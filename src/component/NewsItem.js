import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="d-flex justify-content-flex-end position-absolute" style={{right: '0'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
        {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "75%", zIndex:"1"}}>{source}</span> */}
        <img src={!imageUrl ? "https:img.freepik.com/free-vector/breaking-news-alert-background-red-theme_1017-14200.jpg?w=2000" : imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{!title?"Big Breaking News..." :title}...
          </h5>
          <p className="card-text">{!description?"If you want to read this news click read more...": description}...</p>
          <p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} style={{textDecoration:"none"}} target="_blank" rel="noreferrer" className="btn-sm btn-primary">Read More</a>
        </div>
      </div>

      </div>     
    )
  }
}