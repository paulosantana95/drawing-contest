import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1rem 0 7.5rem;
  background: ${({ theme }) => theme["pale-blue"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > img {
    width: 11.25rem;
  }

  > div {
    margin-top: -6rem;
    display: flex;
    justify-content: flex-end;

    > img {
      width: 7.5rem;
    }
  }
`;
