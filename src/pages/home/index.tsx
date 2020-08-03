import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface FormData {
  media: number;
  distance: number;
  valor: number;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleCalculate: SubmitHandler<FormData> = data => {
    const result = (data.distance / data.media) * data.valor;
    console.log(result);
  };

  return (
    <>
      <Container>
        <Content>
          <h1>Quanto vou gastar?</h1>
          <h2>Estime o custo de combustível de suas viagens</h2>

          <Form ref={formRef} onSubmit={handleCalculate}>
            <Input
              name="media"
              placeholder="Média de km/litro de seu veículo"
            />
            <Input
              name="distance"
              placeholder="Distância a ser percorrida em km"
            />
            <Input name="valor" placeholder="Valor do combustível" />
            <button type="submit"> Calcular </button>
          </Form>
        </Content>
      </Container>
    </>
  );
};
export default Home;
