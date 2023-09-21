import styled from "styled-components";

export const ContestContainer = styled.section`
  padding: 1rem 0 7.5rem;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme["pale-blue"]} 50%,
    white
  );
`;

export const ContestContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: -5rem;

  > img {
    width: 29.375rem;
  }
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 3rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h1 {
      width: 25rem;
      color: ${({ theme }) => theme["base-text"]};
      font-size: 1.2rem;
    }

    > p {
      color: ${({ theme }) => theme["base-text"]};
      font-size: 1rem;
    }
  }

  > form {
    margin-left: 1rem;
  }
`;
