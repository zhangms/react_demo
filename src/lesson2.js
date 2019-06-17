import React from "react";
import API from "./api";

class Lession2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], searchKey: "" };
  }

  componentDidMount() {
    this.loadData({
      search: this.state.searchKey
    });
  }

  loadData(param) {
    API.loadDemoList(param).then(data => {
      this.setState({
        list: data
      });
    });
  }

  /**
   * 4个分一页
   * @param {*} list
   */
  splitPages(list) {
    const pages = [];
    let page = [];
    for (let i = 0; i < list.length; i++) {
      page.push(list[i]);
      if (page.length >= 4) {
        pages.push(page);
        page = [];
      }
    }
    return pages;
  }

  handleSearch(e) {
    this.setState({ searchKey: e.target.value });
    this.loadData({
      search: e.target.value
    });
  }

  render() {
    const pageList = this.splitPages(this.state.list);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <div
          style={{
            padding: 10,
            borderBottom: "1px solid #e8e8e8"
          }}
        >
          <input
            style={{
              width: 300,
              height: 20,
              fontSize: 16
            }}
            onChange={e => this.handleSearch(e)}
            value={this.state.searchKey}
            type="text"
            placeholder="input key words will be auto filter"
          />
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto"
          }}
        >
          {pageList.length === 0 ? <div>There is no results</div> : ""}
          {pageList.map(page => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                {page.map(item => {
                  return (
                    <div
                      style={{
                        background: "#ccc",
                        margin: 10,
                        height: 80,
                        flex: 1,
                        textAlign: "center",
                        fontSize: 12
                      }}
                    >
                      <div>{item.category}</div>
                      <div>{item.name}</div>
                      <div>{item.price}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Lession2;
