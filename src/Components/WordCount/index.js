import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class WordCount extends Component {
  state = {isFact: true, value: '', final: []}

  onclickAddButton = event => {
    event.preventDefault()
    const {value} = this.state
    const additems = {
      id: uuidv4(),
      value,
    }
    if (value !== '') {
      this.setState(prevState => ({
        final: [...prevState.final, additems],
        value: '',
        isFact: false,
      }))
    }
  }

  onchangeValue = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {isFact, value, final} = this.state
    return (
      <div className="container">
        <div>
          <div className="firstContainer">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          {isFact ? (
            <div className="firstContainer2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt=" no user inputs"
                className="no_user_inputs"
              />
            </div>
          ) : (
            <div className="firstContainer2">
              <ul>
                {final.map(each => (
                  <li key={each.id}>
                    <p className="para">
                      {each.value}:{each.value.length}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <form className="SecContainer" onSubmit={this.onclickAddButton}>
          <h1 className="head">Character Counter</h1>
          <div>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onchangeValue}
              value={value}
            />
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default WordCount
