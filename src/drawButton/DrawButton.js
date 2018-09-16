import React, { Component } from 'react';
import './DrawButton.css';

const DrawButton = (props) => (
	<div className="buttonContainer">
		<button className="btn" onClick={props.drawCard}>Draw Card</button>
	</div>
)

export default DrawButton;