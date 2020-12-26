import React from 'react';
import Test from './test';//컴포넌트 추가
// 컴포넌트는 JSX(javascript+HTML)로 만듬
// App.js 파일안에 Potato 컴포넌트를 만듬(첫글자는 대문자)
// App.js 파일안에 Potato() 함수를 만들면됨.

function Drama({name, picture}){// 컴포넌트 이름 변경 Drama >
//console.log(props.favorite);전달받은 props 인자를 출력
  return (
    <div>
      <h2>I like Nexflix Drama {name} </h2>
        <img alt='drama' src={picture} />
    </div>
  );
}

const foodlike = [
  {
  name : '스타트업',
  image : './images/01.jpg',
},  
{
  name : '백일의 낭군님',
  image : "./images/02.jpg",
},  
{
  name : '치즈 인더트랩',
  image : './images/03.jpg',
},  
{
  name : '김비서가 왜그럴까',
  image : './images/04.jpg',
},  
{
  name : '런 온',
  image : './images/05.jpg',
},  
{
  name : '으라차차 와이키키2',
  image : './images/06.jpg',
},
{
  name : '응답하라 1988',
  image : './images/07.jpg',
},
{
  name : '이번생은 처음이라',
  image : './images/08.jpg',
},
{
  name : '18 어게인',
  image : './images/09.jpg',
},
{
  name : '우아한 가',
  image : './images/10.jpg',
},

];

// 컴포넌트로 데이터를 보내는 방법 props
// props는 리액트 컴포넌트로 넘어가는 매개변수
// props는'문자열'제외 중괄호{}로 값을 감쌈.
function App() {
  return (
    <div>
      <Test />

      {foodlike.map(drama => (
        <Drama name={drama.name} picture={drama.image} />
      ))}
    </div>//props에 있는 데이터를 객체로 변환하여 Food 컴포넌트(함수)에 전달
  );
}

export default App;
