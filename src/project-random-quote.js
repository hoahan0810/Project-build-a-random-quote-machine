// import * as ReactDOM from 'react-dom/client';

function random(arr) {
  let rannum=Math.floor(Math.random() * arr.length);
  return rannum;
}
const colordata = ["#886F68","#424C55","#3D2C2E","#0FFF95","#103900","#F7B05B","#56203D","#3D0A78","#142047"];
const quotedata = [
  {text: "The purpose of our lives is to be happy.",
  author: "Dalai Lama"},
  {text: "Life is what happens when you’re busy making other plans.",
  author: "John Lennon"},
  {text: "Get busy living or get busy dying.",
  author: "Stephen King"},
  {text: "You only live once, but if you do it right, once is enough.",
  author: "Mae West"},
  {text: "If you want to live a happy life, tie it to a goal, not to people or things.",
  author: "Albert Einstein"},
  {text: "Never let the fear of striking out keep you from playing the game.",
  author: "Babe Ruth"},
  {text: "Money and success don’t change people; they merely amplify what is already there.",
  author: "Will Smith"},
];

class Machine extends React.Component {
constructor(props){
  super(props);
  this.state={
    color: " ",
    text: " ",
    author: " ",
  };
  this.handleClick=this.handleClick.bind(this);
}; 

randomQuote(arrcolor, arrquote) {
  let color = random(arrcolor);
  let quote = random(arrquote);
  this.setState({
    color: arrcolor[color],
    text: arrquote[quote].text,
    author: arrquote[quote].author,
    
  });
}
handleClick(){
  this.randomQuote(colordata, quotedata);
}

componentDidMount(){
  this.randomQuote(colordata, quotedata);}

render(){
  
  
  let background={backgroundColor: this.state.color};
  let textco={color: this.state.color};
  
  return (
    <div id="randommachine" style={background} >
      <div id="quote-box" className="quoteBox">
        <div id="text" style={textco}><i className="fa-solid fa-quote-left"></i>{this.state.text}</div>
        <div id="author" style={textco}>-{this.state.author}</div>
        <div className="btn">
          
          <a style={background} className="BtnLink button" href="twitter.com/intent/tweet" target="_blank" id="tweet-quote"><i className="fa-brands fa-twitter"></i></a>
          
          <a className="BtnLink button" style={background} href="#" target="_blank" ><i className="fa-brands fa-tumblr"></i></a>
          <button className="button" onClick={this.handleClick} id="new-quote" style={background}>New quote</button>
        </div>
       </div>
    </div>
  );
}
}

const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);
root.render(<Machine />);

// ReactDOM.render(
// <Machine />, 
// document.getElementById('root')
// );

