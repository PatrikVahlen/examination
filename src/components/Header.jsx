import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../LinkedIn_icon.svg.png";
import FacebookIcon from "../facebook_icon.jpg";
import GitHubIcon from "../github_icon.png";
import "../App.css";

export default function Header() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div>
            <img src={LinkedInIcon} />
          </div>
        </div>
        <div class="col-sm">
          <img src={GitHubIcon} />
        </div>
        <div class="col-sm">
          <img src={FacebookIcon} />
        </div>
      </div>
    </div>
  );
}
