import * as Style from './AppStyle.js';
import React, { useState, useRef, useEffect } from 'react';
import { _success, _info, _warning, _error } from 'react-color-log';

function App() {
  //-->  set refs
  const ref_5 = useRef();
  const ref_10 = useRef();
  const ref_15 = useRef();
  const ref_25 = useRef();
  const ref_50 = useRef();
  const ref_100 = useRef();
  const billInp = useRef(0);
  const pipInp = useRef();

  //-->  set states
  const [Bill, setBill] = useState('');
  const [People, setPeople] = useState(1);
  const [TipAmt, setTipAmt] = useState(Number(0).toFixed(2));
  const [TotalAmt, setTotalAmt] = useState(Number(0).toFixed(2));
  const [BtnState, setBtnState] = useState(true);

  //-->  Handle %
  const handlePercent = (ref) => {
    const tip = ref.current.value * billInp.current.value;
    setTipAmt(tip);
  };

  //-->  hand bill
  const handleBill = (e) => {
    setBill(e.current.value);
    console.log(Bill);
  };

  useEffect(() => {
    _info('Bill changed');
  }, [Bill]);

  useEffect(() => {
    _success('Tip Amount changed');
  }, [TipAmt]);

  useEffect(() => {
    _info('Total amount changed');
  }, [TotalAmt]);

  useEffect(() => {
    _info('Number of People changed');
  }, [People]);

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
                ref={billInp}
                onChange={() => {
                  setBill(billInp.current.value / pipInp.current.value);
                }}
              />
            </div>
          </Style.BillInp>

          <Style.PercentDiv>
            <p>Select Tip</p>
            <Style.TipDiv>
              <Style.TipBtn
                ref={ref_5}
                value={0.05}
                onClick={() => {
                  const tip = ref_5.current.value * Bill;
                  setTipAmt(tip);
                  setTotalAmt(Bill + TipAmt);
                }}
              >
                5%
              </Style.TipBtn>
              <Style.TipBtn
                ref={ref_10}
                value={0.1}
                onClick={() => {
                  const tip = ref_10.current.value * Bill;
                  setTipAmt(tip);
                  setTotalAmt(Bill + TipAmt);
                }}
              >
                10%
              </Style.TipBtn>
              <Style.TipBtn
                ref={ref_15}
                value={0.15}
                onClick={() => {
                  const tip = ref_15.current.value * Bill;
                  setTipAmt(tip);
                  setTotalAmt(Bill + TipAmt);
                }}
              >
                15%
              </Style.TipBtn>
              <Style.TipBtn
                ref={ref_25}
                value={0.25}
                onClick={() => {
                  const tip = ref_25.current.value * Bill;
                  setTipAmt(tip);
                  setTotalAmt(Bill + TipAmt);
                }}
              >
                25%
              </Style.TipBtn>
              <Style.TipBtn
                ref={ref_50}
                value={0.5}
                onClick={() => {
                  const tip = ref_50.current.value * Bill;
                  setTipAmt(tip);
                  setTotalAmt(Bill + TipAmt);
                }}
              >
                50%
              </Style.TipBtn>
              <Style.TipBtn
                ref={ref_100}
                value={1.0}
                onClick={() => {
                  const tip = ref_100.current.value * Bill;
                  setTipAmt(tip);
                  setTotalAmt(Bill + TipAmt);
                }}
              >
                100%
              </Style.TipBtn>
            </Style.TipDiv>
          </Style.PercentDiv>

          <Style.BillInp area='people_number_input' mgT=''>
            <p>Number of people</p>
            <div>
              <Style.Person fontSize='large' />
              <Style.Inputs
                type='number'
                defaultValue={People}
                min='1'
                ref={pipInp}
                onChange={() =>
                  setBill(billInp.current.value / pipInp.current.value)
                }
              />
            </div>
          </Style.BillInp>
        </Style.InputDiv>

        <Style.OutputDiv>
          <Style.OutCont>
            <Style.TextDisp>
              Tip Amount <br />{' '}
              <h5 style={{ fontWeight: '100', color: '#9EBBBD' }}>/ Person</h5>
            </Style.TextDisp>
            <Style.TextDisp side='right'>
              $ {Number(TipAmt).toFixed(2)}
            </Style.TextDisp>
          </Style.OutCont>

          <Style.OutCont>
            <Style.TextDisp>
              Total <br />{' '}
              <h5 style={{ fontWeight: '100', color: '#9EBBBD' }}>/ Person</h5>
            </Style.TextDisp>
            <Style.TextDisp side='right'>
              $ {Number(TotalAmt).toFixed(2)}
            </Style.TextDisp>
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
