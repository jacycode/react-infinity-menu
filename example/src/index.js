import React from "react";
import ReactDOM from "react-dom";
import "../../src/infinity-menu.css";
import InfinityMenu from "../../src/infinity-menu";

class App extends React.Component {

	componentWillMount() {
		const tree = [
			{
				name: "基础数据",
				id: 0,
				isOpen: true,
				icon:"./src/test.png",
				openIndicator:"./src/openIndicator.png",
				closeIndicator:"./src/closeIndicator.png",
				children: [
					{
						name: "SubMenu1-1",
						id: 0,
						active:true,
					},
					{
						name: "SubMenu2-1",
						id: 1,
						active:false,
					},
					{
						name: "SubMenu3-1",
						id: 2,
						active:false,
					}
				]
			},
			{
				name: "行业基准值",
				id: 1,
				isOpen: false,
				icon:"./src/test.png",
				children: [
					{
						name: "SubMenu2-1",
						id: 0,
						active:false,
					},
					{
						name: "SubMenu2-2",
						id: 1,
						active:false,
					},
					{
						name: "SubMenu2-3",
						id: 2,
						active:false,
					}
				]
			},
			{
				name: "效果对比",
				id: 2,
				isOpen: false,
				icon:"./src/test.png",
				children: [
					{
						name: "SubMenu3-1",
						id: 0,
						active:false,
					},
					{
						name: "SubMenu3-2",
						id: 1,
						active:false,
					}
				]
			}
		];
		this.setState({
			tree: tree
		});
	}

	onNodeMouseClick(event, tree) {
		this.setState({
			tree: tree
		});
	}

	render() {
		return (
			<InfinityMenu
				tree={this.state.tree}
				onNodeMouseClick={this.onNodeMouseClick.bind(this)}
				maxLeaves={5}
			/>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("example"));
