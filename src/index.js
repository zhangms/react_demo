import React from "react";
import ReactDOM from "react-dom";
import Nav from "./nav";
import Content from "./content";
import Lesson1 from "./lesson1";
import Lesson2 from "./lesson2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initMenus();
    this.state = {
      content: this.menus[0].component
    };
  }

  initMenus() {
    this.menus = [
      {
        name: "Lession1",
        index: 0,
        component: <Lesson1 />,
        selected: true
      },
      {
        name: "Lession2",
        index: 1,
        component: <Lesson2 />,
        selected: false
      }
    ];
    for (var i = this.menus.length; i < 128; i++) {
      this.menus.push({
        name: "Lesson" + (i + 1) + " (not use)",
        index: i,
        component: <div>hello world</div>,
        selected: false
      });
    }
  }

  switchApp(menus) {
    this.setState({
      content: menus.component
    });
  }

  render() {
    return (
      <div className="main">
        <Nav switchApp={id => this.switchApp(id)} menus={this.menus} />
        <Content content={this.state.content} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
