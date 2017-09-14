import React from 'react';
import './mycontentcomp.css';

export default class MyContentComp extends React.Component{

	render(){
		return (
				<div >
					<p className = "btn btn-success" styleName = 'designTwo'> Second Level Component </p>
				</div>
			)
	}
}