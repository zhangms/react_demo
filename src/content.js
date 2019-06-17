import React from "react";

class Content extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="content">
        <div className="titlebar">UserName: 毛生</div>
        <div className="inner">{content}</div>
      </div>
    );
  }
}

export default Content;
