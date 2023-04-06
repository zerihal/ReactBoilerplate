import { useState } from "react";

// REACT BASICS:
// The "export" keyword makes the function accessible outside of this file (so from the index.js in this example)
// The "default" keyword tells other files using the code in this file that is the main function
// The return here is a "JSX element", which is a combination of javascript and HTML (basically what to display)
// The className is a property that tells CSS how to style the button - this can be seen in styles.css

// The boiler plate code here returns a div, styled as a fixed size panel (as per styles.css) containing a single
// "HelloWorldLabel" component.

// Function to return the "Hello XYZ" text. If value to reflect is an empty string, this will be returned as 
// "Hello World!" by default
function HelloWorldLabel({reflect}) {
	let reflectHello = reflect !== "" ? "Hello " + reflect + "!" : "Hello World!";

	return <p className="helloWorldLab">{reflectHello}</p>
}

// Simple input form with default value as per last input and event to handle change
function InputField({input, onValueChange}) {
	return (
		<form>
			<label className="inputLab">Reflect hello ... </label>
			<input type="text" defaultValue={input} onChange={onValueChange} />
		</form>
	);
}

export default function ViewPanel() {
	// Store the state of the current "Hello" value (default empty string)
	const [currentHello, setHello] = useState("");

	// Handle changes to the input field to update the "Hello" value as per input
	const handleInputChange = (event) => {
		setHello(event.target.value);
	};
	
	// Return simple panel with "Hello XYZ" text and a smaller one below to allow input to change the
	// value XYZ value to something else
	return (
		<>
			<div className="panel">
				<HelloWorldLabel reflect={currentHello} />
			</div>
			<div className="inputPanel">
				<InputField input={currentHello} onValueChange={handleInputChange} />
			</div>
		</>
	);
}