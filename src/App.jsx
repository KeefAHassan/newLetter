import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <main>
      <div className="newsletter">
        <h1>level up your frontend skills</h1>
        <p>
          In this frontend challenge, you'll build a Newsletter Card Component.
          This challenge is perfect for you if you've been learning HTML and CSS
          and are looking to practice what you've learned by building something
          new and beginner-friendly.
        </p>
        <div className="input-section">
          <input type="text" placeholder="Enter Email address" />
          <button>subscribe</button>
        </div>
        <div className="agreement">
          
          <input type="checkbox" name="checkbox" id="checkbox" />{" "}
          <p>
            This challenge is perfect for you if you've been learning HTML and
            CSS and are looking to practice what you've{" "}
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
