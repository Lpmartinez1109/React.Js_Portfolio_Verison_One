import React, { Component } from "react";

class About extends Component {
    render() {
        return (


            <div className="banner-text">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Welcome To The World</span>
                    <ul className="nav justify-content-end">

                        <li className="nav-item">
                            <a className="nav-link" href="projects.html">Portfolio</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="writings.html">writing</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>


                <div className="container jumbotron">
                    <h1 className="display-4">About Me</h1>
                    <p className="lead">My name is Luis Martinez, and I am up and coming web developer here in Chicago</p>
                    <hr className="my-4"></hr>
                        <p>My goal is to work as a front-end web developer with the eventual goal being to work as a full-time full
                          stack developer. Now for some other facts to have some fun. I am a huge Marvel and DC fan, big time into video
          games, reading and writing. </p>
                        <p>Currently, I've managed to put together a few websites as part of the Full-Stack Flex Coding Bootcamp at Northwestern University. While they are still in the early stages of develoment, I could to work on them and improve them with every new lesson I learn. On this profile page, I also included some of my hobby writing, writing I was working on before the bootcamp and some writing I plan to continue working on in the future.</p>
      </div>

                </div>
                )
            }
        }
export default About;