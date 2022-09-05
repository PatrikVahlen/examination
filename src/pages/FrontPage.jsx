import React from "react";
import "../App.css";

export default function FrontPage() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div>PICTURE!</div>
          <div>ABOUT ME</div>
        </div>
      </div>
      <h1>EDUCATION</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h3>Frontend</h3>
          </div>
          <div class="col-sm">
            <h3>Backend</h3>
          </div>
          <div class="col-sm">
            <h3>ALM</h3>
          </div>
        </div>
      </div>
      <h2>Portfolio</h2>
    </>
  );
}
