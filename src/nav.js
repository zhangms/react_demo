import React from "react";
import "./styles.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.menus = this.props.menus;
  }

  handleClickNavItem(m) {
    const { switchApp } = this.props;
    for (var i = 0; i < this.menus.length; i++) {
      const mi = this.menus[i];
      mi.selected = mi.index === m.index;
    }
    this.setState({});
    switchApp(m);
  }

  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img
            width="29"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAMAAACbrRsRAAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFODc3NDM4MzdGNjcxMUU5OTk3REI1MTA3REU0NUM5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFODc3NDM4NDdGNjcxMUU5OTk3REI1MTA3REU0NUM5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4Nzc0MzgxN0Y2NzExRTk5OTdEQjUxMDdERTQ1QzlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU4Nzc0MzgyN0Y2NzExRTk5OTdEQjUxMDdERTQ1QzlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3kuBqQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABpUExURUdwTEmj/0qi/0ii/0ih/0+z/0ad/Uqi+0+n/Uih/kqk/0qm/0ih/kqk/0ih/0mj/0ad/0ee/0ee/0ac/zJXdU+z/1K4/zJZeT+CuzdnkUSR1Dt0pUac/0ef/0ih/02t/1K6/0uo/0KU/7D8wfoAAAAcdFJOUwBrNoh5/tklEKRftOZDl1D3y77tJuHESp9txobWaXSBAAADJ0lEQVRIx5WXi5KrIAxAEamC+LaP7VZp9f8/8iYRFL1q3czsbAc4TUhCkjJGkkUqiNlS4ryJhFwtZqKulyv5AFIX/hndojSh941SpHhuqSMaSGq3WlTtJMotJs14KligdnEoabmI2oUQLGt7ZgiXFksuqmGAY4JloLFDqQOR0oe2U7FEO4ZSJWuXkPAaVUTEmU5zMjIyBJcNbJWhZHsSlK0Fa+7WktQYwIGsYsYOUMTA1GyxmhpcbqNsF+TVqLJaH5EEg+TbBsscjTVdVGxtipKu3CQbm1lKZCl2TIr1eGP9n+KwJbI+8ESBkYL8WloVV0RumuNfCRTDQf/GSUmkkuyL8Aj1DtFkmyQyzdgJEXi21dN3UZ5Kdko45PeQTvfHTGFnJUZFU7aAueo0ytBkOQemC8+j+CKdnzCNxHm0Aic7l0Ip6fCJi3d46KtYVbhfA+oSALMeP+t3nwb7YN73PWaS7rAgOOO7jtbeILftjJLh+w0obipICx/NHApwsfFwLu8JzQF1Xk1bY/iMXi73VWIFNyQdGnpoA1rR23eHAsy9DL/hysgGFs1djOG1IarTMk3UBdnPR9vQFbfPB8mbUBYVgLoMaqE2oNd1FMGbiPWF2A9W3+wOIKIQttCigfHRziD68/v7i7r4HUmQ/D7+v9ALRVSsUGewQ0dls9jOgeERK4Odm35Army+4iju0pNW4bkpBRQ9+gI09hyLoOdqzCax8jCkhMFIPl+v19UP5137AVa9DY6Z44ooZtDj+Xxe97NfW9TPJpf+J9Axh9s2WD266+PxOEArQDP7cpLVU/+C3gDl9r1mqwIjryD7KJAUfiwwfC5rNsZHqAS0d2Utnotp972YciCx/kq/mGIJ/941it6Yyp5O/9Y4AkCVLfj6b+0K2pxBZwqYVOJ1kzSHTRJas6HStG5P31szDDL0SIJiq4MdDQTcdMZIdjSGmJ0xpAGl6fHwYw6Gn6N2GDQ4NxmzHrloDls4dsMwRaMVwP6gR7Na87UZwoxJ9DRejrNpGZ4ZGLaG2jw+2XxplO7snz+Hn4LnAb5UnP1N+MbPhvNTztaPFU/+AQOfZHzZZ2MwAAAAAElFTkSuQmCC"
            alt=""
            data-spm-anchor-id="0.0.0.i4.3157b1cazrBQ7Z"
          />
          <img
            width="121"
            class=""
            src="//gw.alicdn.com/tfs/TB13C3KbCSD3KVjSZFKXXb10VXa-243-56.png"
            alt=""
            data-spm-anchor-id="0.0.0.i3.3157b1cazrBQ7Z"
          />
        </div>
        <div className="items">
          {this.menus.map(m => {
            return (
              <div
                className={m.selected ? "itemsel" : "item"}
                onClick={() => this.handleClickNavItem(m)}
              >
                {m.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Nav;
