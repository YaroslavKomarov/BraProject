import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const ActivatorButton = styled.button`
  align-items: center;
  background-color: inherit;
  border: 0px solid transparent;
  border-color: #ccc;
  color: inherit;
  display: flex;
  font-weight: 400;
  font-size: 16px;
  max-width: 160px;
  margin-left: 23px;
  margin-top: 7px;
  cursor: pointer;
  transition-property: box-shadow;
  transition-duration: 0.3s;
`;

export const DropdownList = styled.ul<{ active: boolean }>`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 23px;
  background-color: #dfe7ed; 
  color: black;
  display: ${props => (props.active ? "block" : "none")};
  min-width: 180px;
  padding: 0;
  -webkit-box-shadow: -1px 2px 10px -1px rgba(0,0,0,0.45); 
  box-shadow: -1px 2px 10px -1px rgba(0,0,0,0.45);
  border-radius: 7px;
  li {
    list-style: none;
    margin: 0;
    transition-property: text-shadow;
    transition-duration: 0.3s;
    a,
    a:link {
      font-weight: 400;
      font-size: 16px;
      text-decoration: none;
      color: #c7a63f;
      display: block;
      padding: 0.5em;
      &:hover {
        color: #c7a53fbb;
        text-shadow: 0.5px 0.5px 2px #d8cdaa;
        text-decoration: underline;
      }
    }
  }
`;
