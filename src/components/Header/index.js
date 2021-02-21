import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
	state = {
		todoName: "",
	};

	handleEnter = (e) => {
		const { keyCode } = e;
		const { todoName } = this.state;
		//gets value when enter key is pressed
		if (keyCode !== 13) return;
		const newTodo = {
			id: nanoid(),
			name: todoName,
			completed: false,
		};
		if (todoName.trim() === "") {
			return;
		}
		this.props.add(newTodo);
		this.setState({ todoName: "" });
	};
	handleChange = (e) => {
		const todoName = e.target.value;
		this.setState({ todoName });
	};
	handleAdd = () => {
		const { todoName } = this.state;
		const newTodo = {
			id: nanoid(),
			name: todoName,
			completed: false,
		};
		if (todoName.trim() === "") {
			return;
		}
		this.props.add(newTodo);
		this.setState({ todoName: "" });
	};
	render() {
		return (
			<div className="todo-header">
				<input
					type="text"
					placeholder="Type in your todo, comfirm by press enter key or click Add button."
					onKeyUp={this.handleEnter}
					onChange={this.handleChange}
					value={this.state.todoName}
				/>
				<button className="btn btn-danger" onClick={this.handleAdd}>
					Add
				</button>
			</div>
		);
	}
}
