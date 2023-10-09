import React from "react";
import '../App.css';
import PropTypes from 'prop-types'

// Función flecha

const Footer =({children})=>{
    //this.props.children
    return(
        <div className="App-footer">
            <h1>{children}</h1>
        </div>
    )
}

export default Footer;

Footer.propTypes = {
    children:PropTypes.array
}

Footer.defaultProps = {
    children:[
        "Ya casi es viernes.",
        "Ya casi es Halloween."
    ] 
}