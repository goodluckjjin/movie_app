//14
import React from 'react';
import axios from "axios";
import Movie from "./Movie";
// import "./Movie.css";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // this.setState({movies:movies})
    this.setState({ movies, isLoading: false })

  };

  componentDidMount() {
    this.getMovies();
  }
  //   setTimeout(()=> {
  //     this.setState({isLoading: false});
  //   }, 3000);
  // }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          )
          : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key= {movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;



//1~7
//import React from 'react';
// import PropTypes from "prop-types";

// const fruitsILike = [
//   {
//     id: 1,
//     name: "Strawberry",
//     image: 
//      "https://img1.daumcdn.net/thumb/R720x0/?fname=https://t1.daumcdn.net/liveboard/realfood/2aa6f294356c43bab9266cbcc77434a7.jpg",
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: "Watermelon",
//     image: 
//      "http://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_261053_15561697653725187.jpg",
//      rating: 4.9
//   },
//   {
//     id: 3,
//     name: "Peach",
//     image: 
//      "http://www.farmnmarket.com/data/photos/20180730/art_15326529103219_da81e2.jpg",
//      rating: 4.7
//   },
//   {
//     id: 4,
//     name: "Pineapple",
//     image: 
//      "http://post.phinf.naver.net/MjAxNzAyMTVfMTQ0/MDAxNDg3MTMxNjU3ODA0.1jS3whgSGafCsr1PQM3e8tVrFfQ80EhGMLn0TfOJZukg.wgQrVERmzX8c4v1ROB5h4WCSkq7p-9a_Hsg20UGBu8Ag.PNG/image.png?type=w1200",
//      rating: 5
//   }
// ]

// function Fruits({name, picture, rating}) {
//   return (
//   <div>
//     <h2>I like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name} />
//   </div>
//   );
// }

// Fruits.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };


// function App() {
//   return (
//   <div>
//     {fruitsILike.map(dish => (
//       <Fruits
//         key={dish.id}
//         name={dish.name}
//         picture={dish.image}
//         rating={dish.rating}
//       />
//     ))}
//   </div>
//   );
// }
//export default App;



//8~13
//import React from 'react';

// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   add = () => {
//     // console.log("add");
//     // this.state.count = 1;  => nothing happened
//     // this.setState({ count: this.state.count +1 }); => not good
//     this.setState(current => ({ count: current.count +1 }));
//   };
//   minus = () => {
//     // console.log("minus");
//     // this.state.count = -1;
//     // this.setState({ count: this.state.count -1 });
//     this.setState(current => ({ count: current.count -1 }));

//   };

//   componentDidMount() {
//     console.log("Component rendered");
//   }

//   componentDidUpdate() {
//     console.log("I just updated");
//   }

//   render() {
//     console.log("I'm rendering");
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     ) 
//   }
// }
//export default App;

//1.
// React가 빠른 이유는 가상이기 때문이다
// <Potato /> => I love potato
//jsx는 javascript안의 html이다

//2.
//app(App.js)에 많은 component를 넣을 수 있고, 이러한 component 안에 더 많은 component(ex: Potato.js)를 넣을 수 있다.

//3.
//<Food fav="kimchi"/>
//food component에 정보를 보내는 방법
//food component의 property=fav, value=kimchi

//react magic에서 react는 우리가 전달한 props를 가져가는 역할
//<Food />안의 모든 내용은 function Food(props)의 인자로 들어간다.
//consol.log(props) => Object(fav: kimchi)

//key prop
//단지 react 내부에서 사용하기 위한 것으로,
//function App()의 Food key={dish.id}는 name={dish.name},picture={dish.image}과 달리 function Fruits({name, picture})에 전달되지 않는다.
//key={dish.id}가 없으면,
// Each child in a list should have a unique "key" prop 라는 경고가 뜬다. 왜? 리액트는 그닥 똑똑하지 않아서.

//6, 7
//우리가 원하는 props를 받고 있는 지 체크하는 방법 = PropTypes

// onClick은 react magic.
// js에서는 다른 onclick이나 eventListener를 등록해야 하지만 react에는 button에 자동적으로 주어진 onClick이 있다.
// ()가 있으면 즉시, 없으면 내가 동작을 했을때만

//14.
//render(){}에서
//const { isLoading } = this.state; 를 추가함으로써 
//this.state.isLoading 대신 isLoading으로 줄여서 사용할 수 있다

//미래에 쓰고자하는 state를 선언하는 것 => 필수는 아니지만 좋은 습관

