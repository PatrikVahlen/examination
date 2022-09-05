import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h5>ABOUT ME</h5>
          <div>Quick and curious developer</div>
        </div>

        <div class="col-sm">
          <h5>GET IN TOUCH</h5>
          <ul>
            <il>
              <div>patrik.vahlen@gmail.com</div>
            </il>
            <il>
              <div>070-27 94 533</div>
            </il>
          </ul>
        </div>
        <div class="col-sm">
          <h5>Adress</h5>
          <ul>
            <il>
              <div>Trädgårdsgatan 19</div>
            </il>
            <il>
              <div>173 92 Sundbyberg</div>
            </il>
          </ul>
        </div>
      </div>
    </div>
  );
}
