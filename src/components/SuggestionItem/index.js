import './index.css'

const SuggestionItem = props => {
  const {suggestions, onChangeButton} = props
  const {suggestion} = suggestions

  const onChangeAction = () => {
    onChangeButton(suggestion)
  }

  return (
    <li className="d-flex flex-row justify-content-between">
      <p className="pl-1">{suggestion}</p>
      <button onClick={onChangeAction} className="btn border-0" type="button">
        <img
          className="arrowIcon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
