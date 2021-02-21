import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
	state = {
		mouseOver: false,
	};
	handleMouseOver = () => {
		this.setState({ mouseOver: true });
	};
	handleMouseLeave = () => {
		this.setState({ mouseOver: false });
	};
	handlerDelete = (id) => {
		window.confirm("Are you sure you want to delete it?");
		this.props.deleteTodo(id);
	};
	clickBox = (id) => {
		return (e) => {
			this.props.checkTodo(id, e.target.checked);
		};
	};
	render() {
		const { id, name, completed } = this.props;
		return (
			<li
				onMouseOver={this.handleMouseOver}
				onMouseLeave={this.handleMouseLeave}
				style={{ backgroundColor: this.state.mouseOver ? "#ddd" : "white" }}
			>
				<label>
					<input
						type="checkbox"
						checked={completed}
						onChange={this.clickBox(id)}
					/>

					<span>{name}</span>
				</label>
				<button
					className="btn btn-danger"
					style={{ display: this.state.mouseOver ? "block" : "none" }}
					onClick={() => {
						this.handlerDelete(id);
					}}
				>
					Delete
				</button>
			</li>
		);
	}
}
