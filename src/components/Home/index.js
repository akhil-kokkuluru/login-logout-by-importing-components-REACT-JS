import './index.css'
import {Component} from 'react'
import Message from '../Message'
import ButtonStructure from '../Login'

class Home extends Component {
  state = {text: 'Please Login', buttonText: 'Login'}

  buttonFunction = () => {
    const {text} = this.state
    if (text === 'Please Login') {
      this.setState(v => ({text: 'Welcome User', buttonText: 'Logout'}))
    } else {
      this.setState(v => ({text: 'Please Login', buttonText: 'Login'}))
    }
  }

  render() {
    const {text, buttonText} = this.state
    return (
      <div className="gradBG">
        <Message text={text} />
        <ButtonStructure
          buttonText={buttonText}
          clicktrigger={this.buttonFunction}
        />
      </div>
    )
  }
}

export default Home
