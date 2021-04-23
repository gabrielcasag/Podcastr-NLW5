import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 4rem;
  height: 100vh;
  width: 26rem;

  background: var(--purple-500);
  color: var(--white);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  footer { 
    align-self: stretch;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 20rem;
  padding: 4rem;
  
  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;
  background: linear-gradient(143.8deg, rgba(145,100,250,0.8) 0%, transparent 100%);

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`   
  display: flex;
  align-items: center;
  gap: 1rem;

  strong { 
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }

  div {
    width: 100%;
    height: 4px;
    background: var(--purple-300);
    border-radius: 2px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;
  }

  .playButton {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: var(--purple-400);
  }
`;