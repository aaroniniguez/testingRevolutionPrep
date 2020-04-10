import * as React from 'react';
import "./Fillbar.css";
import {calcProgressStyles} from "./utils";

export default function Fillbar(props) {
    const {actual, target} = props;
    return (
        <div className="fillBar">
            <div className="filler" style={calcProgressStyles(actual, target)}></div>
        </div> 
    );
}