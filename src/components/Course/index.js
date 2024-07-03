import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class Course extends Component {
  render() {
    const {details} = this.props
    const {id, logoUrl, name} = details
    return (
      <Link to={`course/${id}`}>
        <li className="listItem">
          <div>
            <img src={logoUrl} alt={name} />
          </div>
          <p className="listItem">{name}</p>
        </li>
      </Link>
    )
  }
}