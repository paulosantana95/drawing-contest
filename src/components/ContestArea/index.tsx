import { ContestContainer, ContestContent, FormContent } from "./styles";
import IdeaImg from "../../assets/ideia.svg";
import { Label } from "./components/Label";

export function ContestArea() {
  return (
    <ContestContainer>
      <ContestContent>
        <FormContent>
          <div>
            <h1>
              Preencha os campos abaixo para realizar a pré-inscrição de sua
              escola no concurso.
            </h1>
            <p>Após isso, aguarde nosso contato para mais informações.</p>
          </div>

          <form action="">
            <Label htmlForVariant="school">Nome da escola</Label>
            <input id="school" type="text" placeholder="Nome da escola" />
          </form>
        </FormContent>
        <img src={IdeaImg} alt="" />
      </ContestContent>
    </ContestContainer>
  );
}
