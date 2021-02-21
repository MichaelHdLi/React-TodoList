import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
	render() {
		return (
			<ul className="todo-main">
				{this.props.list.map((item) => {
					return (
						<Item
							key={item.id}
							{...item}
							deleteTodo={this.props.deleteTodo}
							checkTodo={this.props.checkTodo}
						/>
					);
				})}
			</ul>
		);
	}
}
