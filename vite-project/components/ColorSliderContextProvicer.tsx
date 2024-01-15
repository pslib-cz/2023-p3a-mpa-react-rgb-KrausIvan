import React from "react";

type colorType = { R: number, G: number, B: number };

type stateType = { 
    color: colorType
    changeColor: (color: colorType) => void
};

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 }, 
    changeColor: (color: colorType) => { console.log(color)} 
};

interface ColorSlidersContextType {
    color: colorType;
    changeColor: (color: colorType) => void;
}

const ColorSlidersContext = React.createContext<ColorSlidersContextType>({} as ColorSlidersContextType);


interface IColorSliderProvider {
    children: React.ReactNode;
  }

export const ColorSliderContextProvider: React.FC<IColorSliderProvider> = ({ children }) => {
    const [color, setColor] = React.useState<colorType>({R: 0, G: 0, B: 0 });

    const changeColor = (color: colorType) => {
        setColor(color);
    };

    return (
        <ColorSlidersContext.Provider value={{ color, changeColor }}>
            {children}
        </ColorSlidersContext.Provider>
    );
}

export default ColorSliderContextProvider;
