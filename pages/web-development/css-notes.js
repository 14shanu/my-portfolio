import React from "react";

export default function CssNotes() {
  return (
    <div className="mainContainer">
      <h1>CSS Notes</h1>
      <ul>
        <li>Inline css overrides the external css</li>
        <li>
          <a href="https://devdocs.io/">Dev docs for everything</a>
        </li>
        <li>
          To override any css property over other then, add !important after
          property
        </li>
        <li>
          Use <a href="https://www.cssfontstack.com/"> CssFontStack</a> website
          for fonts design
        </li>
        <li>1 Pixel is 1/96 of an inch</li>
        <li>line-height property for spacing between lines</li>
        <li>
          Color codes from{" "}
          <a href="https://htmlcolorcodes.com/">htmlColorCodes</a>
        </li>
        <li>For Image in background use background-image property</li>
        <li>
          <details>
            <summary>
              position can be of four types : absolute ,relative, static,
              fixed,sticky
            </summary>
            <ul>
              <li>static is default </li>
              <li>
                relative: Relative to its normal positon and will leave a gap at
                its normal positon
              </li>
              <li>absolute :relative to its parent positon </li>
              <li>fixed:component will be fixed at its positon</li>
              <li>sticky: component will stick to the </li>
            </ul>
          </details>
        </li>
        <li>Visibility:hidden ---- Will hide the element but show its space</li>
        <li>display:none ---- Will hide the element as well as space</li>
        <li>
          z-index will work only for any element if positon is other than static
        </li>
        <li>
          FlexBox is a one dimensional layout method for laying out items in
          rows or columns
        </li>
        <li>
          disply:flex ---- will make make container the flexbox and its items
          flex items
        </li>

        <li>
          {" "}
          <details>
            <summary> FlexBox container Properties </summary>
            <ul>
              <li>
                <details>
                  <summary> display:flex</summary>
                  <div className="container1">
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary> flex-direction:row ---- By default </summary>
                  <div className="container1">
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary> flex-direction:column </summary>
                  <div className="container2">
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  {" "}
                  <summary> flex-direction:row-reverse </summary>
                  <div className="container3">
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  {" "}
                  <summary> flex-direction:column-reverse </summary>
                  <div
                    className="container1"
                    style={{ "flex-direction": "column-reverse" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  {" "}
                  <summary> flex-direction:row ,flex-wrap: wrap</summary>
                  <div className="container1" style={{ "flex-wrap": "wrap" }}>
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  {" "}
                  <summary>
                    {" "}
                    flex-direction:row ,flex-wrap: wrap-reverse
                  </summary>
                  <div
                    className="container1"
                    style={{ "flex-wrap": "wrap-reverse" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    {" "}
                    flex-flow: row wrap; --- using flex-flow we can set
                    direction and wrap together
                  </summary>
                  <div
                    className="container1"
                    style={{ "flex-flow": " row wrap" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    {" "}
                    justify-content:center; --- using justify-content we can put
                    the content in center Horizontally
                  </summary>
                  <div
                    className="container1"
                    style={{ "justify-content": "center" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary> justify-content:space-around; </summary>
                  <div
                    className="container1"
                    style={{ "justify-content": "space-around" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary> justify-content:space-between;</summary>
                  <div
                    className="container1"
                    style={{ "justify-content": "space-between" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary> justify-content:space-evenly;</summary>
                  <div
                    className="container1"
                    style={{ "justify-content": "space-evenly" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    {" "}
                    align-items:center; --- using align-items we can put the
                    content in center Vertically
                  </summary>
                  <div
                    className="container1"
                    style={{ "align-items": "center" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    {" "}
                    align-items:flex-end; --- Container items will be aligned at
                    the end of container
                  </summary>
                  <div
                    className="container1"
                    style={{ "align-items": "flex-end" }}
                  >
                    <div className="box" id="box-1">
                      First Box
                    </div>
                    <div className="box" id="box-2">
                      Second Box
                    </div>
                    <div className="box" id="box-3">
                      Third Box
                    </div>
                    <div className="box" id="box-4">
                      Fourth Box
                    </div>
                    <div className="box" id="box-5">
                      Fifth Box
                    </div>
                    <div className="box" id="box-6">
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details>
                  <summary> align-items:stretch;</summary>
                  <div
                    className="container1"
                    style={{ "align-items": "stretch", "flex-wrap": "wrap" }}
                  >
                    <div className="box" id="box-1" style={{ height: "80px" }}>
                      First Box
                    </div>
                    <div className="box" id="box-2" style={{ height: "80px" }}>
                      Second Box
                    </div>
                    <div className="box" id="box-3" style={{ height: "80px" }}>
                      Third Box
                    </div>
                    <div className="box" id="box-4" style={{ height: "80px" }}>
                      Fourth Box
                    </div>
                    <div className="box" id="box-5" style={{ height: "80px" }}>
                      Fifth Box
                    </div>
                    <div className="box" id="box-6" style={{ height: "80px" }}>
                      Sixth Box
                    </div>
                  </div>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details aria-expanded="true">
            <summary>FlexBox Item Properties</summary>
            <ul>
              <li>
                <details>
                  <summary>
                    order:2 --- the item which has the greater order will be
                    moved to the end, Here We have put the order 2 for First
                    Item and it comes at end
                  </summary>
                  <div className="container">
                    <div className="item" id="item1" style={{ order: 2 }}>
                      First Item
                    </div>
                    <div className="item" id="item2">
                      Second Item
                    </div>
                    <div className="item" id="item3">
                      Third Item
                    </div>
                    <div className="item" id="item4">
                      Fourth Item
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details aria-expanded="true">
                  <summary>flex-grow:2 </summary>
                  <div className="container">
                    <div
                      className="item"
                      id="item1"
                      style={{ " flex-grow": 2 }}
                    >
                      First Item
                    </div>
                    <div className="item" id="item2">
                      Second Item
                    </div>
                    <div className="item" id="item3">
                      Third Item
                    </div>
                    <div className="item" id="item4">
                      Fourth Item
                    </div>
                  </div>
                </details>
              </li>{" "}
              <li>
                <details aria-expanded="true">
                  <summary>flex-shrink:2 </summary>
                  <div className="container" style={{ width: "400px" }}>
                    <div
                      className="item"
                      id="item1"
                      style={{ " flex-shrink": 2 }}
                    >
                      First Item
                    </div>
                    <div className="item" id="item2">
                      Second Item
                    </div>
                    <div className="item" id="item3">
                      Third Item
                    </div>
                    <div className="item" id="item4">
                      Fourth Item
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details aria-expanded="true">
                  <summary>
                    flex-basis:300px :
                    <ul>
                      <li>
                        when flex-direction is set to row flex-basis will
                        control width
                      </li>
                      <li>
                        when flex-direction is set to column flex-basis will
                        control height
                      </li>
                    </ul>{" "}
                  </summary>
                  <div className="container">
                    <div
                      className="item"
                      id="item1"
                      style={{ " flex-basis": "300px" }}
                    >
                      First Item
                    </div>
                    <div className="item" id="item2">
                      Second Item
                    </div>
                    <div className="item" id="item3">
                      Third Item
                    </div>
                    <div className="item" id="item4">
                      Fourth Item
                    </div>
                  </div>
                </details>
              </li>
              <li>
                <details aria-expanded="true">
                  <summary>
                    align-self:flex-end : align item itself at container end
                  </summary>
                  <div className="container">
                    <div className="item" id="item1">
                      First Item
                    </div>
                    <div
                      className="item"
                      id="item2"
                      style={{ " align-self": "flex-end" }}
                    >
                      Second Item
                    </div>
                    <div className="item" id="item3">
                      Third Item
                    </div>
                    <div className="item" id="item4">
                      Fourth Item
                    </div>
                  </div>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
