import './index.css'

const ButtonStructure = props => {
  const {buttonText, clicktrigger} = props
  return (
    <button type="button" className="buttons" onClick={clicktrigger}>
      {buttonText}
    </button>
  )
}

export default ButtonStructure
