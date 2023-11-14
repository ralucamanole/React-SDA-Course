export const ConsoleChild = (props) => {
  // console.log("ConsoleChild: " + JSON.stringify(props.array2));
  const Dogs = props.array2;
  return (
    <>
      {Dogs.map((dog) => {
        return (
          <div>
            <h3>{dog.name}</h3>
            <p>
              Has {dog.age} old and is{" "}
              {dog.friendly ? "friendly" : "not friendly"}
            </p>
            <p>
              Has {dog.age} old and is {!dog.friendly && "not"} friendly
            </p>
          </div>
        );
      })}
    </>
  );
};
