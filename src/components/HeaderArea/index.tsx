import { HeaderContainer, HeaderContent } from "./styles";
import cloudImg from "../../assets/cloud.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={cloudImg} alt="cloud" />
        <div>
          <img className="mt-cloud" src={cloudImg} alt="cloud" />
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
