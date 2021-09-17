import * as Style from './AppStyle.js';

function App() {
  return (
    <Style.Container>
      <Style.HeaderTxt>SPLI</Style.HeaderTxt>
      <Style.HeaderTxt mgB='70px'>TTER</Style.HeaderTxt>
      <Style.MainContent>
        <Style.InputDiv>
          <Style.BillInp area='bill_input' bgColor=''>
            <p>Bill</p>
            <div>
              <Style.Dollar fontSize='large' />
              <Style.Inputs type='number' />
            </div>
          </Style.BillInp>
          <Style.TipDiv>
            <Style.TipBtn>5%</Style.TipBtn>
            <Style.TipBtn>10%</Style.TipBtn>
            <Style.TipBtn>15%</Style.TipBtn>
            <Style.TipBtn>25%</Style.TipBtn>
            <Style.TipBtn>50%</Style.TipBtn>
            <Style.TipBtn>100%</Style.TipBtn>
          </Style.TipDiv>
          <Style.BillInp area='people_number_input' bgColor=''>
            <p>Number of people</p>
            <div>
              <Style.Person fontSize='large' />
              <Style.Inputs type='number' />
            </div>
          </Style.BillInp>
        </Style.InputDiv>
        <Style.OutputDiv></Style.OutputDiv>
      </Style.MainContent>
    </Style.Container>
  );
}

export default App;
