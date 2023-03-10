import { Heading } from './components/Heading';
import { Logo } from './Logo';
import { Text } from './components/Text';

import './styles/global.css';
import { Envelope, Lock } from 'phosphor-react';
import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mb-3">Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-18">
        <label htmlFor="email" className="flex flex-col gap-2">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>

            <TextInput.Input type="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>


        <label htmlFor="password" className="flex flex-col gap-2">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>

            <TextInput.Input type="password" placeholder="**********"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias.</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na Plataforma</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <a href="">Esqueceu sua senha?</a>
        <a href="">Não possui conta? Crie uma agora!</a>
      </footer>
    </div>
  )
}