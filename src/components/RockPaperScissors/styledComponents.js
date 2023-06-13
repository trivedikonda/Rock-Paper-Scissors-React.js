import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
`

export const GameContainer = styled.div`
  width: 800px;
  border: 3px solid #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 26px;
  padding-right: 26px;
  border-radius: 15px;
`

export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Bree Serif';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const PopupImage = styled.img`
  height: 500px;
  width: 600px;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 160px;
  border-radius: 10px;
  background-color: #ffffff;
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Bree Serif';
`

export const ScoreCount = styled.p`
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: bold;
  color: #223a5f;
`

export const RenderedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
`

export const UnorderedList = styled.ul`
  width: 400px;
  justify-content: space-around;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const YouAndOpponent = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`

export const ParagraphAndImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const StatusAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameStatusMsg = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const PlayAgainButton = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Bree Serif';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`

export const Dice = styled.img`
  height: 180px;
  width: 180px;
`
