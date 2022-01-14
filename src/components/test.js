import React from "react";
import "./test.css";
import data from "./data.json";

const TestnLP = () => {
  var a ;
  if (data) {
    console.log("data true", data);
    console.log("data keys", Object.keys(data));
    Object.keys(data).forEach((chunk) => {
      // console.log("chunk  :", chunk);
      if (!data[chunk].entity) {
        return (
          <span className="entity-wrapper non-ner">
            {data[chunk].original_chunk}
          </span>
        );
        // a += `<span className="entity-wrapper non-ner"> ${data[chunk].original_chunk}</span>`;
      } else if (data[chunk].entity === "PER") {
        // console.log("chunk entity", data[chunk].entity);
        // return (
        //   <span
        //     className="entity-wrapper"
        //     style={{ backgroundColor: "darkred" }}
        //   >
        //     <span className="entity-name">{data[chunk].original_chunk}</span>
        //     <span className="entity-type">{data[chunk].entity}</span>
        //   </span>
        // );
        a = ` <span  className="entity-wrapper" style={{ backgroundColor: "darkred" }}> <span className="entity-name">${data[chunk].original_chunk}</span> <span className="entity-type">${data[chunk].entity}</span></span>`;
      } else if (data[chunk].entity === "LOC") {
        console.log("chunk entity", data[chunk].entity);
        return (
          <span
            className="entity-wrapper"
            style={{ backgroundColor: "darkorange" }}
          >
            <span className="entity-name">{data[chunk].original_chunk}</span>
            <span className="entity-type">{data[chunk].entity}</span>
          </span>
        );
        // a += `<span className="entity-wrapper"style={{ backgroundColor: "darkorange" }}><span className="entity-name">${data[chunk].original_chunk}</span><span className="entity-type">${data[chunk].entity}</span></span>`;
      } else if (data[chunk].entity === "ORG") {
        console.log("chunk entity", data[chunk].entity);
        return (
          <span className="entity-wrapper" style={{ backgroundColor: "blue" }}>
            <span className="entity-name">{data[chunk].original_chunk}</span>
            <span className="entity-type">{data[chunk].entity}</span>
          </span>
        );
        // a += `<span className="entity-wrapper"style={{ backgroundColor: "blue" }}><span className="entity-name">${data[chunk].original_chunk}</span><span className="entity-type">${data[chunk].entity}</span></span>`;
      }
    });
    console.log(a);
  }
  return (
      <div>
          {a}
      </div>
    // <div dangerouslySetInnerHTML={{ __html: a }}></div>
    // <p>No data</p>
  );
};
export default TestnLP;
