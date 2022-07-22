import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author , date , source } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl ? "https://images.livemint.com/img/2022/05/31/600x338/MARUTI-SUZUKI-INDIA_1653998188545_1653998188704.JPG" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} <span class="badge bg-info text-dark">{source}</span></h5>
          <p className="card-text">{description}...</p>
          <div className="card-footer">
            <small className="text-muted">By{!author?"Unknown": author} on {new Date(date).toGMTString()}</small>
          </div>
          <a href={newsUrl} target="_blank" className="btn btn-dark">ReadMore</a>
        </div>
      </div>
    )
  }
}

export default Newsitem