import React from 'react';
import {calcExpectedWidth, calculateExpectedMonthProgress} from "../utils";
import "./FillbarEmployeeCard.css";
import Fillbar from "../Fillbar";
import NumberFormat from 'react-number-format';

function FillbarEmployeeCard(props) {
    const {actual, target} = props;
    return (
        <div className="fillBarContainer">
            <div className="revenueActual">
                <NumberFormat decimalScale={0} thousandSeparator={true} displayType={'text'} value={actual} prefix="$"/>
            </div>
            <div className="revenueTarget">
                <NumberFormat decimalScale={0} thousandSeparator={true} displayType={'text'} value={target} prefix="$"/>
            </div>
            <Fillbar actual={actual} target={target} />
            <div className="numberPillContainer" style={{width: calcExpectedWidth(target)*2+"%"}}>
                <NumberFormat className="numberPill" decimalScale={0} thousandSeparator={true} displayType={'text'} value={calculateExpectedMonthProgress(target)} prefix="$"/>
            </div>
            <div className="fillBarTick" style={{width: calcExpectedWidth(target)+"%"}}></div>
        </div>
    );
}

export default FillbarEmployeeCard;