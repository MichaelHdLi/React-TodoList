import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
	handleSelectAll = (e) => {
		this.props.selectAll(e.target.checked);
	};
	clearCompleted = () => {
		window.confirm("Are you sure you want to delete completed items?");
		this.props.clearCompleted();
	};
	render() {
		const { todos } = this.props;
		const completedTodo = todos.reduce(
			(prev, cur) => prev + (cur.completed ? 1 : 0),
			0
		);

		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						checked={completedTodo === todos.length && todos.length !== 0}
						onChange={this.handleSelectAll}
					/>
				</label>
				<span>
					<span>Completed: {completedTodo}</span> / Total: {todos.length}
				</span>
				<button className="btn btn-danger" onClick={this.clearCompleted}>
					Delete completed item
				</button>
			</div>
		);
	}
}
