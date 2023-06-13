import {DiceButton, Dice} from './styledComponents'

const GameOption = props => {
  const {choiceDetails, onClickSetUserChoice} = props
  const {id, imageUrl} = choiceDetails

  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <li>
      <DiceButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <Dice src={imageUrl} alt={id} />
      </DiceButton>
    </li>
  )
}

export default GameOption
