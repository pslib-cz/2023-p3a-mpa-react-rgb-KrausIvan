import React from 'react';
import StyledSlider from './StyledSlider';
import  {ColorChannel, ColorSlidersContext, ColorAction}  from '../Providers/ColorSliderContextProvicer';
import { useContext } from 'react';
import styles  from "./ColorSliders.module.css";



export const ColorSliders:React.FC = () => {
    const [state, dispatch] = useContext(ColorSlidersContext);

    console.log(state.color);
    return (
      <div className={styles["container"]}>
            <StyledSlider
            min={0}
            max={255}
            value={state.color.R}
            onChange={(e) => dispatch(
                {type: ColorAction.CHANGE_COLOR, value: parseInt(e.currentTarget.value), part: ColorChannel.R}
            )}
            backgroundColor={
                `rgb(${state.color.R}, ${state.color.G}, ${state.color.B})`
            }
            thumbColor={
                `rgb(${state.color.R}, 0, 0)`
            }
            />

           <StyledSlider
            min={0}
            max={255}
            value={state.color.G}
            onChange={(e) => dispatch(
                {type: ColorAction.CHANGE_COLOR, value: parseInt(e.currentTarget.value), part: ColorChannel.G}
            )}            backgroundColor={
                `rgb(${state.color.R}, ${state.color.G}, ${state.color.B})`
            }
            thumbColor={
                `rgb(0, ${state.color.G}, 0)`
            }
            />

            <StyledSlider
            min={0}
            max={255}
            value={state.color.B}
            onChange={(e) => dispatch(
                {type: ColorAction.CHANGE_COLOR, value: parseInt(e.currentTarget.value), part: ColorChannel.B}
            )}            backgroundColor={
                `rgb(${state.color.R}, ${state.color.G}, ${state.color.B})`
            }
            thumbColor={
                `rgb(0, 0, ${state.color.B})`
            }
            />
      </div>
    );
    
  }
  export default ColorSliders;