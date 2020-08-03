import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;

  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,

      path: 'value',

      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container>
        {label && <label htmlFor={fieldName}>{label}</label>}

        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && <span>{error}</span>}
      </Container>
    </>
  );
};

export default Input;
