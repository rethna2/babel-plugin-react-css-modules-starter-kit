import React from 'react';
import './mycomp.css';
import MyContentComp from './contentComp/MyContentComp';

export default class MyComp extends React.Component{

	render(){
		return (
				<div>
					<p className = "btn btn-primary" styleName = 'designOne'> First Level Component </p>
					<MyContentComp />
				</div>
			)
	}
}