import { GroupCard } from '@components/GroupCard';
import { Container, Title } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      <GroupCard
        title="Galera do Ignite"
      />
    </Container>
  );
}

