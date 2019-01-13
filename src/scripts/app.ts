import './../css/app.css';

window.onload = () => {
  console.log("window.onload...");
  let container: HTMLElement = document.getElementById("content-box");
  container.innerHTML = "Hello World for the Webpack-TypeScript Starter Project";
};

window.onresize = () => {
  console.log("window.onresize...");
};