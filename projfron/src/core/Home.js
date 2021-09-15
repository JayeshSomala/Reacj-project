import React from "react";
import "../styles.css";
import {API} from "../backend";
import Base from "./Base.js"; 

export default function Home() {
  console.log("API Is", API);
  return (
    <Base title="Home page">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-sucess">Test</button>
        </div>
        <div className="col-4">
        <button className="btn btn-sucess">Test</button>
        </div>
        <div className="col-4">
        <button className="btn btn-sucess">Test</button>
        </div>
      </div>
    </Base>
  );
}
