// Props
import Props from './props';

// Styled Components
import { Container, Title, Icon } from "./styles";

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  );
}