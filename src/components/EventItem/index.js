// Write your code here
import './index.css'

const EventItem = props => {
  const {event, displayRegistrationStatus1} = props
  const {imageUrl, name, location, registrationStatus} = event

  const clickOnEvent = () => {
    console.log(registrationStatus)
    displayRegistrationStatus1(registrationStatus)
  }

  return (
    <li className="events">
      <button className="img-in-button" type="button" onClick={clickOnEvent}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
