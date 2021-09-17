import styled from 'styled-components';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

//-->  Declare font used
const font_1 = 'sans-serif';
const font_2 = 'source code pro';

//-->  Declare colors
const pmColor = '#00494D';
const sdColor = '#C5E4E7';
const inpColor = '#F4FAFA';
const sdcolor_2 = '#26C0AB';
const icColor = '#9EBBBD';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  background-color: ${sdColor};
  font-family: ${font_1};

  /* Display for tablets and small screens */
  @media screen and (min-width: 650px) {
    justify-content: center;
  }
`;

//-->  Header text
export const HeaderTxt = styled.h2`
  font-size: 22px;
  letter-spacing: 15px;
  line-height: 0px;
  font-weight: 700;
  color: ${pmColor};
  margin-bottom: ${(props) => props.mgB};
  margin-top: ${(props) => props.mgT};
`;

//-->   Content card
export const MainContent = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);

  /* Display for tablets and small screens */
  @media screen and (min-width: 650px) {
    width: 80%;
    max-width: 1000px;
    height: 45%;
    max-height: 450px;
    flex-direction: row;
    border-radius: 15px;
    padding: 40px 10px;
    padding-right: 40px;
  }
`;

//-->  Container for the input section of the system
export const InputDiv = styled.div`
  width: 90%;
  height: 100%;
  padding: 10px 5%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 100%;
  grid-template-areas:
    'bill_input'
    'tip_select'
    'tip_select'
    'people_number_input';

  /* for tablets and laptops */
  @media screen and (min-width: 650px) {
    padding: 10px 1%;
  }
`;

//-->  Div to hold the input components
export const BillInp = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.mgB};
  margin-top: ${(props) => props.mgT};
  background-color: ${(props) => props.bgColor};

  p {
    font-family: ${font_2};
    letter-spacing: 3px;
    font-weight: 500;
    line-height: 0px;
    margin-left: 5%;
  }

  div {
    width: 80%;
    height: 40px;
    margin-left: 5%;
    position: relative;
  }
`;

//-->   the inputs used
export const Inputs = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  text-align: right;
  font-size: 25px;
  font-family: ${font_2};
  background-color: ${inpColor};
  padding: 5px 5%;

  &:focus {
    outline-color: ${sdcolor_2};
  }
`;

//-->  div to hold the whole percent buttons and label
export const PercentDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-family: ${font_2};
    letter-spacing: 3px;
    font-weight: 500;
    line-height: 0px;
    margin-left: 5%;
  }
`;

//-->  Tip selection div
export const TipDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-area: tip_select;
  margin-bottom: 30px;
  /* background-color: tan; */
`;

//-->  create buttons for tip percent
export const TipBtn = styled.button`
  width: 31%;
  height: 65%;
  color: #fff;
  font-family: ${font_1};
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 700;
  border: none;
  margin: 5px;
  cursor: pointer;
  transition: 300ms all ease-in-out;
  border-radius: 7px;
  background-color: ${pmColor};

  &:hover {
    color: ${pmColor};
    background-color: ${sdcolor_2};
  }

  /* for bigger screens */
  @media screen and (min-width: 650px) {
    width: 25%;
  }

  /* for even bigger screens */
  @media screen and (min-width: 1050px) {
    width: 30%;
  }
`;

//-->  style dollar icon
export const Dollar = styled(AttachMoneyIcon)`
  font-size: 80px;
  color: ${icColor};
  position: absolute;
  bottom: 0;
`;

//-->  style dollar icon
export const Person = styled(PersonIcon)`
  font-size: 80px;
  color: ${icColor};
  position: absolute;
  top: 10px;
`;

//-->  Div to old the output elements
export const OutputDiv = styled.div`
  width: 85%;
  height: 450px;
  display: flex;
  position: relative;
  padding: 10px 2%;
  border-radius: 22px;
  flex-direction: column;
  background-color: ${pmColor};

  @media screen and (min-width: 650px) {
    height: 100%;
    border-radius: 22px;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
  }
`;

//-->  containers for the output div
export const OutCont = styled.div`
  width: 96%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  /* background-color: red; */
  font-family: ${font_2};
  align-items: center;
`;

//-->  output text display
export const TextDisp = styled.p`
  font-size: ${(props) => (props.side === 'right' ? '30px' : '17px')};
  line-height: 0px;
  color: ${(props) => (props.side === 'right' ? sdcolor_2 : '#fff')};
  font-weight: ${(props) => (props.side === 'right' ? 800 : 400)};
  letter-spacing: ${(props) => (props.side === 'right' ? 0 : '3px')};
`;

//-->  create the reset button
export const ResetBtn = styled.button`
  width: 85%;
  height: 13%;
  align-self: center;
  position: absolute;
  bottom: 20px;
  border: none;
  cursor: pointer;
  font-family: ${font_1};
  color: ${pmColor};
  border-radius: 5px;
  background-color: ${sdcolor_2};
  transition: 300ms all ease-in-out;
  font-size: 1.3rem;
  font-weight: 600;

  &:hover {
    background-color: ${sdColor};
    color: ${pmColor};
  }

  /* fortablets and laptops */
  @media screen and (min-width: 820px) {
    height: 10%;
  }
`;
