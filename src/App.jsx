
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>~
}

function Todo({id}) {
   const currentodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentodo.title}
      {currentodo.description}
      <br />
    </>
  )
}

export default App
