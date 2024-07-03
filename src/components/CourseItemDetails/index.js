import React, {Component} from 'react'
import TailSpin from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

export default class CourseItemDetails extends Component {
  state = {isLoading: true, isFailed: false, isSuccess: false, itemDetails: {}}

  componentDidMount() {
    this.fetchCourseDetails()
  }

  fetchCourseDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)

    const data = await response.json()
    if (response.ok) {
      const updateData = {
        description = data.course_details.description,
        id: data.course_details.id,
        name:data.course_details.name,
        imageUrl: data.course_details.image_url,
      }
      console.log(data)
      console.log(updateData)
      this.setState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        itemDetails: updateData,
      })
    } else {
      this.setState({isLoading: false, isSuccess: false, isFailed: true})
    }
  }
  render() {
    const {isLoading, isFailed, isSuccess, itemDetails} = this.state
    const {description, name, imageUrl} = itemDetails

    return (
      <div>
        <Header />
        <div>
          {isLoading && (
            <div data-testid="loader" className="spinner">
              <TailSpin
                heigth="80"
                width="80"
                color="#4fa940"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}

          {isSuccess && (
            <div className="itemDetails">
            <div>
            <img src={imageUrl} alt={name} />
            </div>
            
            </div>
          )}
          {isFailed && (
            <div>
            <div>
            <img  src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png" alt="failure view"/>
            </div>
            <button type="button" onClick={this.fetchCourseDetails}>Retry</button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
  
