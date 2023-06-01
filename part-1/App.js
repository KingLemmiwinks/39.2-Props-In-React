function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Juri" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));