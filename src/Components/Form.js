import React, {useState} from 'react';


const wrapperStyle = {
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'center',
}
const formStyle = {

}
const moduleStyle = {
    display: 'inlineBlock',
    marginLeft: '10px',
}



const Form = (props) => {

    const [colorText, setColorText] = useState("")



const submitHandler = (e) =>{
    e.preventDefault();


    if(colorText === "blue"){
        console.log("Blue is true")
        props.setBlue(true);    }
    if(colorText === "red"){
        props.setRed(true);
        console.log("Red is true")

    }
    if(colorText === "yellow"){
        props.setYellow(true);
    }
    if(colorText === "orange"){
        props.setOrange(true);
    }
    if(colorText === "green"){
        props.setGreen(true);
    }
    if(colorText === "purple"){
        props.setPurple(true);
    }
    if(colorText === "black"){
        props.setBlack(true);
    }




    setColorText("");

}
        
    
    return(
        <div style={wrapperStyle}>
            <form style={formStyle} onSubmit={submitHandler}>
                Color  
                <input 
                onChange={(e) => setColorText(e.target.value)}
                value={colorText}
                />
                <button style={moduleStyle}
                >Add</button>

            </form>
        </div>
    );
};
export default Form;

