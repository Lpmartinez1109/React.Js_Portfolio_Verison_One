import React, {Component} from "react";

class Projects extends Component{
    render(){
        return (
            <div class="banner-text">
    <nav class="navbar navbar-light bg-light">
      <a href="loadingpage.html"><span class="navbar-brand mb-0 h1">Welcome To The World</span></a>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="/aboutme">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div id="ss-container" class="ss-container">
    
      <div class="ss-row">
        <div class="ss-left">
          <a href="https://lpmartinez1109.github.io/Password_Generator_HW/">
            <div class="timeline-left">
              <h3>The Password Generator</h3>
              <hr></hr>
              Click here to check out the Password Generator. You can generate a passowrd based off random letters and
              number and save it to your clipboard for further use.
            </div> 
          </a>
        </div>
      </div>
      <div class="ss-row">
        <div class="ss-right">
        <a href="https://lpmartinez1109.github.io/Code_Quiz_HW/"><div class="timeline-right">
            <h3>Chicago Code Quiz</h3>
            <hr></hr>
            Click here to take my famous Chicago Code Quiz. Answer seven questions regarding facts around some of
            Chicago's famous sports team!
          </div>
          </a>
        </div>
      </div>
      <div class="ss-row">
        <div class="ss-left">
          <a href="https://lpmartinez1109.github.io/Work_Day_Scheduler_HW/"><div class="timeline-left">
            <h3>The Day Planner</h3>
            <hr></hr>
            This is the Day Planner. This is an application developed to help users plan out their work day.
          </div>
        </a>
        </div>
      </div>
    </div>
    
  </div>
        )
    }
}
export default Projects;