import React, { useState } from 'react';
import styled from 'styled-components';
const Message = styled.div`
  color: #d90f0f;
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  padding:10px;
  font-size:14px;
  margin:10px 0;
  display: flex;
`;

const SvgIcon = styled.svg`
  fill: #d90f0f;
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;
interface AlertProps {
    message: string;
}
const Alert = ({ message }: AlertProps) => {
    return (
        <Message><span className="icon"><SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </SvgIcon></span>
            {message}
        </Message>
    )
};

export default Alert;