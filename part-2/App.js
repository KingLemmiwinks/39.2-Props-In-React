function App() {
  return (
    <div>
      <Tweet
        name="Juri Han"
        username="Jurinohans"
        date={new Date().toDateString()}
        message="I did it."
      />
      <Tweet
        name="Ken Masters"
        username="FlameMaser"
        date={new Date().toDateString()}
        message="It's warm in here."
      />
      <Tweet
        name="Luke Sullivan"
        username="FiteNite"
        date={new Date().toDateString()}
        message="Don't talk about Fite Nite."
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));