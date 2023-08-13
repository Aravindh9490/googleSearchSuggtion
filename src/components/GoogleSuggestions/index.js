import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {value: ''}

  searchSuggestion = event => {
    const letters = event.target.value
    this.setState({value: letters})
  }

  onChangeButton = suggestion => {
    this.setState({value: suggestion})
  }

  render() {
    const {value} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(value.toLowerCase()),
    )

    return (
      <div className="bg1">
        <div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="mt-4 searchCon p-3">
          <div>
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              onChange={this.searchSuggestion}
              className="inputcss"
              type="search"
              placeholder="Search Google"
              value={value}
            />
          </div>
          <ul className="list-unstyled mt-3">
            {searchResult.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestions={eachItem}
                onChangeButton={this.onChangeButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
