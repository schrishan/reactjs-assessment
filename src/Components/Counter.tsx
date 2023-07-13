import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from './Alert';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;
const PageTitle = styled.h1`
  text-decoration:underline;
  margin: 50px auto 10px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin:5px 0 0;
`;

const Count = styled.p`
  font-size: 24px;
  margin: 10px 0 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  background-color: #0095ff;
  border: 1px solid #0095ff;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0e65e7;
  }
`;
const ResetButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  border: 1px solid #0095ff;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const Value = styled.span`
  display: inline-block;
  background-color: #00722e;
  color: #fff;
  padding: 0px 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');

  const increase = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
      setAlertMessage('');
    } else {
      setAlertMessage("Count can't be more than 10");
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setAlertMessage('');
    } else {
      setAlertMessage("Count can't be less than 0");
    }
  };

  const reset = () => {
    setCount(0);
    setAlertMessage('');
  };

  return (
    <Container>
      <PageTitle>Reactjs - Assessment</PageTitle>
      {alertMessage && <Alert message={alertMessage} />}

      <Count>Count: <Value>{count}</Value></Count>
      <ButtonsWrapper>
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
        <ResetButton onClick={reset}>Reset</ResetButton>
      </ButtonsWrapper>
    </Container>
  );
};

export default Counter;
