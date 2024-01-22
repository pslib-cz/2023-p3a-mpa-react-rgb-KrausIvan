import React from "react";


type colorType = { R: number, G: number, B: number };
export enum colorChannel {R = "R", G = "G", B = "B"};
export enum actionType {CHANGE_COLOR, REPLACE_COLOR, RESET_COLOR}

type stateType = { 
    color: React.ReducerState<>
    changeColor: (color: colorType) => void
};

type ColorsAction = {
    type: actionType.CHANGE_COLOR; value: number; part: colorChannel
} | {
    type: actionType.REPLACE_COLOR; value: colorType
} | {
    type: actionType.RESET_COLOR; part: number
};

const colorsReducer = (state: stateType, action: ColorsAction) => {
    const newState:stateType = {...state};
    switch(action.type){
        case actionType.RESET_COLOR:
            return {
                color: {R: 0, G: 0, B: 0}
            };
        case actionType.CHANGE_COLOR:
            newState.color[action.part] = action.value
            return newState;
            
        default:
            return state;
    }
}

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 }, 
    changeColor: (color: colorType) => { console.log(color)} 
};


export const ColorSlidersContext = React.createContext(initialState);


interface IColorSliderProvider {
    children: React.ReactNode;
}

export const ColorSliderContextProvider: React.FC<IColorSliderProvider> = ({ children }) => {
    //const [color, setColor] = React.useState<colorType>({R: 0, G: 0, B: 0 });
    const [state, dispatch] = React.useReducer(colorsReducer, initialState);
    
    const changeColor = (color: colorType) => {
        dispatch({type: actionType.CHANGE_COLOR, value: color})
    };

    return (
        <ColorSlidersContext.Provider value={{ state, changeColor }}>
            {children}
        </ColorSlidersContext.Provider>
    );
}

export default ColorSliderContextProvider;
