function Person(props) {
    let voteMessage = props.age >= ? "You can vote" : "You cannot vote";
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    hobbies
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteMessage}</h3>
        </div>
    );
}