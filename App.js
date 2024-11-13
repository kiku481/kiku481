import logo from './logo.svg';
import './style.css';
import Cusimg from "./Cusimg"
import { useState } from 'react';

/*function App() {
  return(
    <div id="wrapper">
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"a"}></Cusimg>
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"b"}></Cusimg>
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"c"}></Cusimg>
      <Cusimg img_name={"https://picsum.photos/id/5/200/200"} id={"d"}></Cusimg>
    </div>
  )
}*/

/*function App() {

  function Click(){
    console.log("1 Clicked!")
    document.getElementsByClassName('msg')[0].innerHTML = "1 Clicked!"
  }

  return (
    <div className='App'>
      <div className='msg'>Here!</div>
      <button onClick={Click}>Click Me 1</button>
    </div>
  );
}*/

/*function App() {

  const [msg, SetMsg] = useState('Here!')

  function Click(){
    console.log("1 Clicked!")
    SetMsg("1 Clicked")
  }

  return (
    <div className='App'>
      <div>{msg}</div>
      <button onClick={Click}>Click Me 1</button>
    </div>
  );
}*/

/*function App() {
  const [count, setCount] = useState(0);
  function plus() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={plus}>Click Me 1</button>
    </div>
  );
}*/

/*function App() {
  const [count, setCount] = useState(0);
  function min() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={min}>Click Me 1</button>
    </div>
  );
}*/

function App() {
  const [isHovered, setIsHovered] = useState(false);

  // 일반적인 메서드 정의
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: 'blue',
        opacity: isHovered ? 0.2 : 1,
        transition: 'opacity 0.3s ease',
      }}
      onMouseEnter={handleMouseEnter}  // 메서드 호출
      onMouseLeave={handleMouseLeave}  // 메서드 호출
    >
      {/* 직사각형 내용 */}
    </div>
  );
}

export default App;


//식곤증 애져요
//제가요?
//몰라요ㅠㅠㅜㅠㅜ
//마우스 올리면 0.2에서 1로 투명도 바뀌기를 리액트로 해라???? 음 ㅅㅂ 자살마렵죠
//표정이 다 뒤진표정암