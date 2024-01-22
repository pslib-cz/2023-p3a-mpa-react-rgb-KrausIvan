import React, {useReducer} from "react";

type colorType = { R: number, G: number, B: number };
export enum ColorChannel { R = "R", G = "G", B = "B"};
export enum ColorAction { CHANGE_COLOR = "CHANGE_COLOR", REPLACE_COLOR = "REPLACE_COLOR", RESET_COLOR = "RESET_COLOR" };

type stateType = { // vše, co obsahuje state - data aplikace
    color: colorType
};

type ColorsAction = 
    {type:  ColorAction.CHANGE_COLOR; value: number; part: ColorChannel;} |
    {type: ColorAction.REPLACE_COLOR; value: number;} |
    {type: ColorAction.RESET_COLOR; part: ColorChannel;}
;

const colorsReducer = (state: stateType, action: ColorsAction) => {
    const newState = {...state};

    switch (action.type) {
        case ColorAction.CHANGE_COLOR:
            newState.color[action.part] = action.value;
            return newState;
        

        default:
            return newState;
    }
}

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 }
};

export const ColorSlidersContext = React.createContext<[
    stateType,
    React.Dispatch<ColorsAction> ]>([initialState, () => null]
);

export const ColorSliderContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const reduce = useReducer(colorsReducer, initialState);

    return (
        <ColorSlidersContext.Provider value={reduce}>
            {children}
        </ColorSlidersContext.Provider>
    );
}

export default ColorSliderContextProvider;
