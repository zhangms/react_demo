const API = {
  filterDemoData(key, list) {
    if (key == null || key.length === 0) {
      return list;
    }
    const searchKey = key.toLowerCase();
    const ret = [];
    list.forEach(item => {
      if (
        item.name.toLowerCase().indexOf(searchKey) >= 0 ||
        item.category.toLowerCase().indexOf(searchKey) >= 0
      ) {
        ret.push(item);
      }
    });
    return ret;
  },

  loadDemoList: param => {
    return new Promise((resolve, reject) => {
      resolve(
        API.filterDemoData(param.search, [
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          },
          {
            category: "Sporting Goods",
            price: "$49.99",
            stocked: true,
            name: "Football"
          },
          {
            category: "Sporting Goods",
            price: "$9.99",
            stocked: true,
            name: "Baseball"
          },
          {
            category: "Sporting Goods",
            price: "$29.99",
            stocked: false,
            name: "Basketball"
          },
          {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch"
          },
          {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5"
          },
          {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7"
          }
        ])
      );
    });
  }
};

export default API;
