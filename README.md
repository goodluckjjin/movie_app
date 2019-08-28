#Movie App 2019

React JS fundamentals Course (2019 Update!)

<What I've Learn>

1. jsx란? javascript안의 html이다 (오직 리액트에서만의 개념)

2. react application은 한번에 하나의 component만 rendering 할 수 있다. 따라서 모든것은 App.js 안에 들어가 있어야 한다.



3. component to component, component to child component 정보전달 방법

4. App.js에서 food component로 정보를 보낸 후 food component에서 그 정보를 어떻게 사용하는 가

5. react와 props를 활용하는 기본 방법



6. 클라이언트에게 보내기 전 우리가 원하는 props를 받고 있는 지 체크하는 방법 => PropTypes
    - node.js에 propTypes 설치한다: npm i prop-types (prop-types가 내가 전달받은 props가 내가 원하는 props인지 확인해줌)
    - 설치가 잘 되었는지 확인한다: package.json > dependencies에 prop-types 확인
7. PropTypes 사용하여 어떤 type인지 알 수 있다.
    - string, number, boolean, true or false, array, object..
    - isRequired는 꼭 존재해야 할 때 사용함
    - 주의할 점: .propTypes라고 정확히 써야만 react가 인식 (sexyTypes, PropTypes X)



state

8. function App이 아닌 class App를 사용하는 이유 = state = component의 data를 바꾸고 싶을 때
    - state는 object이다.
    - state에는 component의 data를 넣을 공간이 있고 이 data는 변한다.

9. state의 상태를 변경할 때 react는 render function을 호출하여 바꿔준다. 즉, setState를 이용하여 새로운 state(object)를 받는다.
=> 매 순간 setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.

10. react component에서 사용하는 유일한 function = render function



<Component life cycle>

Mounting(= component born) > Updating > Unmounting(= component die)

11. Mounting 
    - constructor() : js에서 class 만들 때 호출. ( 언제? component가 mount될 때, component가 screen에 효시될 때, component가 website에 갈 때, )
    - render()
    -componentDidMount() : component가 render되었을 때

12. Updating
    - render()
    - componentDidUpdate()

13. Unmounting : component가 죽는것은 state로 component교체할때, 페이지가 바뀔때 등
    - compenentWillUnmount : component가 떠날 때 호출. 하지만 확인할 순 없지만 작동함 (확인 방법 : 콘솔>설정>Preserve log체크>새로고침)


react에서 date를 fetch하는 방법 => js방법 => 보통은 fetch() 사용
14. axios
    - axios는 fetch 위의 작은 layer (fetch < axios)
    - axios 설치한다 : npm install axios / yarn add axios