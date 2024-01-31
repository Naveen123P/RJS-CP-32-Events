// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {regStatus} = props

  const nullStatus = () => (
    <>
      <p className="nullStatus-text">
        Click on an event, to view its registration details
      </p>
    </>
  )

  const registeredStatus = () => (
    <div className="display-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <p className="registered-text">
        You have already registered for this event
      </p>
    </div>
  )

  const yetToRegisterStatus = () => (
    <div className="display-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live you can often make fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="registration-button">
        Register Here
      </button>
    </div>
  )

  const registrationsClosedStatus = () => (
    <div className="display-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1 className="registered-text">Registrations Are Closed Now!</h1>
      <p className="registrations-closed-para-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (regStatus) {
    case 'REGISTRATIONS_CLOSED':
      return registrationsClosedStatus()
    case 'REGISTERED':
      return registeredStatus()
    case 'YET_TO_REGISTER':
      return yetToRegisterStatus()
    default:
      return nullStatus()
  }
}

export default ActiveEventRegistrationDetails
