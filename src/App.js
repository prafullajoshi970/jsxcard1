import React from "react";


function App() {

return(
  <div className="main">
    <div className="imgdiv">
      <img src="https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=N31nPlncl1RGZ2IxfQdXTCl9LFN3pD31mWYhzxeRpdY=" alt=""></img>
    </div>
    <div className="header-div">
      <h1>Alexandra Caulea</h1>
      <p>I enjoy a cup of coffee drinking Every day</p>
    </div>

    <div className="list">
      <div className="left-side">
        <h3>Posts</h3>
        <h3>173</h3>
      </div>
      <div className="center">
      <h3>Followers</h3>
        <h3>47</h3>
      </div>
      <div className="right-side">
      <h3>Following</h3>
        <h3>20</h3>
      </div>
    </div>
    <div className="btn-div">
      <button className="left-btn">FOLLOW</button>
      <button className="right-btn">MESSAGE</button>
    </div>
  
  </div>
)
}

export default App;