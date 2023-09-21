import styled from "styled-components";

export const LabelContent = styled.label`
  padding: 1rem 0.875rem;
  border-radius: 20px 0 0 20px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme["green-teal"]};
`;
