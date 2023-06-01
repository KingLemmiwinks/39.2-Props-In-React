function App() {
    return (
      <div>
        <Person
          name="Juri Han"
          age={25}
          hobbies={["Taekwondo", "Riding Motorcycles", "Eating Spicy Food"]}
        />
        <Person
          name="Ken Masters"
          age={33}
          hobbies={["Karate", "Skateboarding", "Eating Spaghetti"]}
        />
        <Person
          name="Dee Jay"
          age={29}
          hobbies={["Kickboxing", "Singing", "Watching TV"]}
        />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));