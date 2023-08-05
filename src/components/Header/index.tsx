import Props from "./props";
import logoImg from '@assets/logo.png';

import { BackButton, BackIcon, Container, Logo } from "./styles";

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  );
}