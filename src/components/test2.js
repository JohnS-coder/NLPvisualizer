import React from "react";
// import "./test.css";
import data from "./data.json";

const TestnLP2 = () => {
  var a = `<style>.non-ner {
    /* color: var(--primary-color-text-dark); */
    color: white;
  }
  :global(body.dark-mode) .non-ner {
    /* color: var(--primary-color-text); */
    color: black;
  }
  
  .entity-wrapper {
    display: inline-grid;
    text-align: center;
    border-radius: 4px;
    margin: 0 2px 5px 2px;
    padding: 1px;
  }
  .entity-name {
    font-size: 14px;
    line-height: 24px;
    font-family: "Montserrat", sans-serif !important;
    background: #f1f2f3;
    border-width: medium;
    text-align: center;
    font-weight: 400;
    border-radius: 5px;
    padding: 2px 5px;
    display: block;
    margin: 3px 2px;
    color: black;
  }
  .entity-type {
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    font-family: "Montserrat", sans-serif !important;
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    padding: 3px 5px;
  }
  </style>`;
  if (data) {
    console.log("data true", data);
    console.log("data keys", Object.keys(data));
    Object.keys(data).forEach((chunk) => {
      // console.log("chunk  :", chunk);
      if (!data[chunk].entity) {
        // return (
        //   <span class="entity-wrapper non-ner">
        //     {data[chunk].original_chunk}
        //   </span>
        // );
        a += `<span class="entity-wrapper non-ner"> ${data[chunk].original_chunk}</span>`;
      } else if (data[chunk].entity === "PER") {
        // console.log("chunk entity", data[chunk].entity);
        // return (
        //   <span
        //     class="entity-wrapper"
        //     style={{ backgroundColor: "darkred" }}
        //   >
        //     <span class="entity-name">{data[chunk].original_chunk}</span>
        //     <span class="entity-type">{data[chunk].entity}</span>
        //   </span>
        // );
        a += ` <span  class="entity-wrapper" style="background-color: darkred "> <span class="entity-name">${data[chunk].original_chunk}</span> <span class="entity-type">${data[chunk].entity}</span></span>`;
      } else if (data[chunk].entity === "LOC") {
        // console.log("chunk entity", data[chunk].entity);
        // return (
        //   <span
        //     class="entity-wrapper"
        //     style={{ backgroundColor: "darkorange" }}
        //   >
        //     <span class="entity-name">{data[chunk].original_chunk}</span>
        //     <span class="entity-type">{data[chunk].entity}</span>
        //   </span>
        // );
        a += `<span class="entity-wrapper"style="background-color: darkorange "}}><span class="entity-name">${data[chunk].original_chunk}</span><span class="entity-type">${data[chunk].entity}</span></span>`;
      } else if (data[chunk].entity === "ORG") {
        // console.log("chunk entity", data[chunk].entity);
        // return (
        //   <span class="entity-wrapper" style={{ backgroundColor: "blue" }}>
        //     <span class="entity-name">{data[chunk].original_chunk}</span>
        //     <span class="entity-type">{data[chunk].entity}</span>
        //   </span>
        // );
        a += `<span class="entity-wrapper"style="background-color: blue "}}><span class="entity-name">${data[chunk].original_chunk}</span><span class="entity-type">${data[chunk].entity}</span></span>`;
      }
    });
    console.log(a);
  }
  return (
    <div dangerouslySetInnerHTML={{ __html: a }}></div>
    // <p>No data</p>
  );
};
export default TestnLP2;
