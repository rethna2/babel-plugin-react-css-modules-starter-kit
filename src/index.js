import React from 'react';
import {render} from 'react-dom';
import './app.css';

import MyComp from './comp/MyComp';

let Comp = () => (
	<div styleName = 'rootDiv'>
		<p> Root Component</p>
		<MyComp />
	</div>
	)

render(
	<Comp />, 
	document.getElementById('root')
	)