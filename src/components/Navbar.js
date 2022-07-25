import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <img src="https://www.logodesign.net/logo/detailed-outline-of-papers-5543ld.png?nwm=1&nws=1&industry=All&sf=teko" alt="..." className="img-thumbnail w-25 h-25 p-3"/> */}
          <Link className="navbar-brand" to ="/">Shravan-News</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to ="/">Home <span className="sr-only">(current)</span></Link>
              </li>
             
              <li className="nav-item"><Link className="nav-link" to ="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to ="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to ="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to ="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to ="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to ="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to ="/technology">Technology</Link></li>

            </ul>

          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar