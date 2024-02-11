import styled from 'styled-components';

export const ButtonListWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.div`
  width: 100px;
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  font-size: 16px;
  font-weight: 600;
  padding: 5px 15px 5px 15px;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f7fafa;
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
