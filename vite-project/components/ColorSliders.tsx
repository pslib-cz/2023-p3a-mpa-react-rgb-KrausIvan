import React from 'react';
import StyledSlider from './StyledSlider';
import  ColorSliderContext  from './ColorSliderContextProvicer';

interface IColorSlidersProps {
    thumbColor?: string;
    backgroundColor?: string;
  }
  

export const ColorSliders:React.FC<IColorSlidersProps> = () => {
    const { color, changeColor } = React.useContext(ColorSliderContext);

    return (
      <>
            <StyledSlider
            min={0}
            max={255}
            value={200}
            onChange={(e) => {let colorValue = parseInt(e.currentTarget.value); console.log(colorValue)}}
            backgroundColor={}
            thumbColor={}
            />
      </>
    );
    
  }
  export default ColorSliders;