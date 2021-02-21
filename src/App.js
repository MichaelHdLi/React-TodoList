import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
	state = {
		todos: [
			{ id: "001", name: "study", completed: false },
			{ id: "002", name: "work out", completed: false },
			{ id: "003", name: "buy grocery", completed: true },
		],
	};

	//add a todo item
	addTodo = (todo) => {
		const { todos } = this.state;
		const newTodos = [todo, ...todos];
		this.setState({ todos: newTodos });
	};

	//delete a todo item
	deleteTodo = (id) => {
		const { todos } = this.state;
		const newTodos = todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos: newTodos,
		});
	};

	//check to complete a todo item
	checkTodo = (id, completed) => {
		const { todos } = this.state;
		const newTodos = todos.map((todo) => {
			if (todo.id === id) return { ...todo, completed };
			else return todo;
		});
		this.setState({
			todos: newTodos,
		});
	};

	//complete all todos
	selectAll = (completed) => {
		const { todos } = this.state;
		const newTodos = todos.map((todo) => {
			return { ...todo, completed };
		});
		this.setState({
			todos: newTodos,
		});
	};

	//delete all todos that are completed.
	clearCompleted = () => {
		const { todos } = this.state;
		const newTodos = todos.filter((todo) => {
			return todo.completed !== true;
		});
		this.setState({
			todos: newTodos,
		});
	};

	render() {
		return (
			<div className="todo-container">
				<h1>Todo List</h1>
				<div className="todo-wrap">
					<Header add={this.addTodo} />
					<List
						list={this.state.todos}
						deleteTodo={this.deleteTodo}
						checkTodo={this.checkTodo}
					/>
					<Footer
						todos={this.state.todos}
						selectAll={this.selectAll}
						clearCompleted={this.clearCompleted}
					/>
				</div>
			</div>
		);
	}
}
