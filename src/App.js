import * as Style from './AppStyle.js';
import React, { useState, useRef } from 'react';

function App() {
  //-->  set refs
  const ref_5 = useRef(0.5);
  const ref_10 = useRef(0.1);
  const ref_15 = useRef(0.15);
  const ref_25 = useRef(0.25);
  const ref_50 = useRef(0.5);
  const ref_100 = useRef(0.1);

  //-->  set states
  const [Bill, setBill] = useState('');
  const [People, setPeople] = useState(1);
  const [TipAmt, setTipAmt] = useState(Number(0).toFixed(2));
  const [TotalAmt, setTotalAmt] = useState(Number(0).toFixed(2));

  //-->  Handle %
  const handlePercent = (e) => {};
  return (
    <Style.Container>
      <Style.HeaderTxt>SPLI</Style.HeaderTxt>
      <Style.HeaderTxt mgB='70px'>TTER</Style.HeaderTxt>
      <Style.MainContent>
        <Style.InputDiv>
          <Style.BillInp area='bill_input' mgB=''>
            <p>Bill</p>
            <div>
              <Style.Dollar fontSize='large' />
              <Style.Inputs
                type='number'
                step='0.01'
                min='0'
                defaultValue={Bill}
              />
            </div>
          </Style.BillInp>
          <Style.PercentDiv>
            <p>Select Tip</p>
            <Style.TipDiv>
              <Style.TipBtn ref={ref_5}>5%</Style.TipBtn>
              <Style.TipBtn ref={ref_10}>10%</Style.TipBtn>
              <Style.TipBtn ref={ref_15}>15%</Style.TipBtn>
              <Style.TipBtn ref={ref_25}>25%</Style.TipBtn>
              <Style.TipBtn ref={ref_50}>50%</Style.TipBtn>
              <Style.TipBtn ref={ref_100}>100%</Style.TipBtn>
            </Style.TipDiv>
          </Style.PercentDiv>
          <Style.BillInp area='people_number_input' mgT=''>
            <p>Number of people</p>
            <div>
              <Style.Person fontSize='large' />
              <Style.Inputs type='number' defaultValue={People} min='1' />
            </div>
          </Style.BillInp>
        </Style.InputDiv>
        <Style.OutputDiv>
          <Style.OutCont>
            <Style.TextDisp>
              Tip Amount <br />{' '}
              <h5 style={{ fontWeight: '100', color: '#9EBBBD' }}>/ Person</h5>
            </Style.TextDisp>
            <Style.TextDisp side='right'>$ {Bill}</Style.TextDisp>
          </Style.OutCont>

          <Style.OutCont>
            <Style.TextDisp>
              Total <br />{' '}
              <h5 style={{ fontWeight: '100', color: '#9EBBBD' }}>/ Person</h5>
            </Style.TextDisp>
            <Style.TextDisp side='right'>$ 0.00</Style.TextDisp>
          </Style.OutCont>
          <Style.ResetBtn>Reset</Style.ResetBtn>
        </Style.OutputDiv>
      </Style.MainContent>
      <Style.HeaderTxt mgT='50px' mgB='80px'>
        oddFEELING
      </Style.HeaderTxt>
    </Style.Container>
  );
}

export default App;
