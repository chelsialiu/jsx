//This is a project based of fthe "Modern React with Redux [2019 Update]"
//Udemy course. Created by chelsliu on May 14, 2019.

// Import the React and ReactDOM libraries
import React from 'react'; //find folder in node_modules
import ReactDOM from 'react-dom';

// Create a React component (function-based component)
// Use babeljs.io/ to see how JSX gets compiled
const App = () => { // () => { replaces function() {
	
	const labelText = 'Enter name: ';
	const style = { backgroundColor: 'blue', color: 'white'}
	const buttonText = { text: 'Click Me!'} //make sure to use .text to access attribute of the object

	return (
		//use className instead of class to avoid collisions in declaring
		//another Javascript class
		//use htmlFor instead of for to avoid confusion with JS for loop
		<div>
		  <label className="label" htmlFor="name">
		  	{labelText}
		  </label>
		  <input id="name" type="text"/>
		  <button style={style}>
		  	{buttonText.text}
		  </button>
		</div>
	);
};

/// Take the React component and show it on the screen
// Get reference to that div with an id of 'root' 
ReactDOM.render(<App />, document.querySelector('#root'));
