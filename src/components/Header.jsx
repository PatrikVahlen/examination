import React from "react";
import LinkedInIcon from "../LinkedIn_icon.svg.png";
import FacebookIcon from "../facebook_icon.jpg";
import GitHubIcon from "../github_icon.png";
import "../App.css";

export default function Header() {
  return (
    <div className="Header">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={LinkedInIcon} alt="linkedIn Icon" />
            </a>
          </div>
          <div class="col-sm">
            <a
              href="https://github.com/PatrikVahlen/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={GitHubIcon} alt="GitHub Icon" />
            </a>
          </div>
          <div class="col-sm">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={FacebookIcon} alt="Facebook Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
