import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import GameOption from '../GameOption'

import {
  RenderedContainer,
  UnorderedList,
  YouAndOpponent,
  ParagraphAndImage,
  Paragraph,
  Dice,
  StatusAndButton,
  GameStatusMsg,
  PlayAgainButton,
  AppContainer,
  GameContainer,
  MainHeading,
  ScoreContainer,
  ScoreHeading,
  ScoreCount,
  TriggerButton,
  PopupContainer,
  PopupImage,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  won: 'WON',
  lost: 'LOST',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    userChoice: '',
    opponentChoice: '',
    gameStatus: gameStatusConstants.inProgress,
  }

  evaluateGame = () => {
    const {userChoice, opponentChoice} = this.state
    if (userChoice === opponentChoice) {
      this.setState({gameStatus: gameStatusConstants.draw}) // draw
    } else if (userChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.won,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.won,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.won,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoiceList = choicesList.map(each => each.id)
    const getRandomIndex = Math.floor(Math.random() * 3)
    return gameChoiceList[getRandomIndex]
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, opponentChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  onClickPlayAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <UnorderedList>
        {choicesList.map(eachChoice => (
          <GameOption
            choiceDetails={eachChoice}
            key={eachChoice.id}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </UnorderedList>
    )
  }

  renderGameWonView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props

    const userChoiceObjList = choicesList.filter(each => each.id === userChoice)
    console.log(userChoiceObjList)
    const userChoiceObj = userChoiceObjList[0]
    console.log(userChoiceObj)
    const opponentChoiceObjList = choicesList.filter(
      each => each.id === opponentChoice,
    )
    console.log(opponentChoiceObjList)
    const opponentChoiceObj = opponentChoiceObjList[0]
    console.log(opponentChoiceObj)
    return (
      <RenderedContainer>
        <YouAndOpponent>
          <ParagraphAndImage>
            <Paragraph>YOU</Paragraph>
            <Dice src={userChoiceObj.imageUrl} alt="your choice" />
          </ParagraphAndImage>
          <ParagraphAndImage>
            <Paragraph>OPPONENT</Paragraph>
            <Dice src={opponentChoiceObj.imageUrl} alt="opponent choice" />
          </ParagraphAndImage>
        </YouAndOpponent>
        <StatusAndButton>
          <GameStatusMsg>YOU WON</GameStatusMsg>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </StatusAndButton>
      </RenderedContainer>
    )
  }

  renderGameLostView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props

    const userChoiceObjList = choicesList.filter(each => each.id === userChoice)
    console.log(userChoiceObjList)
    const userChoiceObj = userChoiceObjList[0]
    console.log(userChoiceObj)
    const opponentChoiceObjList = choicesList.filter(
      each => each.id === opponentChoice,
    )
    console.log(opponentChoiceObjList)
    const opponentChoiceObj = opponentChoiceObjList[0]
    console.log(opponentChoiceObj)
    return (
      <RenderedContainer>
        <YouAndOpponent>
          <ParagraphAndImage>
            <Paragraph>YOU</Paragraph>
            <Dice src={userChoiceObj.imageUrl} alt="your choice" />
          </ParagraphAndImage>
          <ParagraphAndImage>
            <Paragraph>OPPONENT</Paragraph>
            <Dice src={opponentChoiceObj.imageUrl} alt="opponent choice" />
          </ParagraphAndImage>
        </YouAndOpponent>
        <StatusAndButton>
          <GameStatusMsg>YOU LOSE</GameStatusMsg>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </StatusAndButton>
      </RenderedContainer>
    )
  }

  renderGameDrawView = () => {
    const {userChoice, opponentChoice} = this.state
    const {choicesList} = this.props

    const userChoiceObjList = choicesList.filter(each => each.id === userChoice)
    console.log(userChoiceObjList)
    const userChoiceObj = userChoiceObjList[0]
    console.log(userChoiceObj)
    const opponentChoiceObjList = choicesList.filter(
      each => each.id === opponentChoice,
    )
    console.log(opponentChoiceObjList)
    const opponentChoiceObj = opponentChoiceObjList[0]
    console.log(opponentChoiceObj)
    return (
      <RenderedContainer>
        <YouAndOpponent>
          <ParagraphAndImage>
            <Paragraph>YOU</Paragraph>
            <Dice src={userChoiceObj.imageUrl} alt="your choice" />
          </ParagraphAndImage>
          <ParagraphAndImage>
            <Paragraph>OPPONENT</Paragraph>
            <Dice src={opponentChoiceObj.imageUrl} alt="opponent choice" />
          </ParagraphAndImage>
        </YouAndOpponent>
        <StatusAndButton>
          <GameStatusMsg>IT IS DRAW</GameStatusMsg>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </StatusAndButton>
      </RenderedContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.won:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <>
          <GameContainer>
            <MainHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
              <br />
            </MainHeading>
            <ScoreContainer>
              <ScoreHeading>Score</ScoreHeading>
              <ScoreCount>{score}</ScoreCount>
            </ScoreContainer>
          </GameContainer>

          <RenderedContainer>{this.renderGameView()}</RenderedContainer>

          <>
            <Popup
              modal
              trigger={<TriggerButton type="button">RULES</TriggerButton>}
            >
              {close => (
                <PopupContainer>
                  <TriggerButton type="button" onClick={() => close()}>
                    <RiCloseLine size={30} />
                  </TriggerButton>

                  <PopupImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                    alt="rules"
                  />
                </PopupContainer>
              )}
            </Popup>
          </>
        </>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
