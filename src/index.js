//This is a project based of fthe "Modern React with Redux [2019 Update]"
//Udemy course. Created by chelsliu on May 14, 2019.

// Import the React and ReactDOM libraries
import React from 'react'; //find folder in node_modules
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

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
/*		<div>
		  <label className="label" htmlFor="name">
		  	{labelText}
		  </label>
		  <input id="name" type="text"/>
		  <button style={style}>
		  	{buttonText.text}
		  </button>
		</div>*/

		// Comments container
		// Use <CommentDetail> not in curly braces because putting a component inside of 
		// another component
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>WARNING!</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timePosted="Today at 4:45 PM"
					text="Such a great idea!"
					avatar = {faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timePosted="Today at 8:43 AM"
					text="Whoa! That's awesome!"
					avatar = {faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timePosted="Yesterday at 5:20 PM"
					text="Love it!"
					avatar = {faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

/// Take the React component and show it on the screen
// Get reference to that div with an id of 'root' 
ReactDOM.render(<App />, document.querySelector('#root'));
