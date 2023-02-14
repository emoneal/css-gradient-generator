import React from "react";
import Box from "./Box";

export default function App () {
    const [color, setColor] = React.useState({

        color1: '#a90909',
        color2: '#ffffff',
        deg: 50
    })

    function handleChange (e) {
        const {value, name} = e.target
        // console.log(color)
        setColor(prevColor => {
            return {
                ...prevColor,
                [name]: value
            }
        })
    }

    let backColors = '';
    for (let i = 1; color['color'+i]; ++i) {
        backColors += `,` + color['color'+i];
     }

     console.log(backColors);
    let backgroundColorBox = {
        background: `linear-gradient(${color.deg}deg ${backColors})`,
        height: `225px`
    }

    return(
        <div>
            <h1 className="header">CSS Gradient Generator Tool</h1>

            <div className="boxForTheBoxes">
                <Box>
                    <div style={backgroundColorBox} className="coloredBox"></div>
                    <p className="codeText">background: linear-gradient({color.deg}deg, {backColors}); 
                        -moz-background: linear-gradient({color.deg}deg, {backColors}); 
                        -webkit: linear-gradient({color.deg}deg, {backColors})
                    </p>
                </Box>
                <Box>
                    <h1>Options</h1>
                    

                    
                    <form>
                        <div className="colorSetter">
                            <p className="color1">Color 1</p>
                            <p className="color1">The color is {color.color1}</p>

                            <input 
                            type="color" 
                            name="color1" 
                            value={color.color1} 
                            onChange={handleChange}
                            placeholder="Color1"
                            className="color1"
                            ></input>
                        </div>

                        <div className="colorSetter">
                            <p className="color2">Color 2</p>
                            <p className="color2">The color is {color.color2}</p>

                            <input 
                            type="color" 
                            name="color2"
                            value={color.color2}
                            onChange={handleChange}
                            placeholder="Color2"
                            className="color2"
                            ></input>
                        </div>

                        <div className="angleDiv">
                            <p>Angle</p>

                            <input 
                            type="number" 
                            name="angle"
                            value={color.deg}
                            onChange={handleChange}
                            placeholder="num"
                            className="angle"
                            ></input>
                        </div>
                    </form>
                </Box>
            </div>
        </div>
    )
}