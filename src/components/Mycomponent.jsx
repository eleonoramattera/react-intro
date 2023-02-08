import Button from "./Button";

const Mycomponent = (props) => {
  return (
    <div>
      <h1> Titolo</h1>
      <h2>
        {" "}
        <Button button="props.button"> </Button>
      </h2>
      <div>
        <p>
          {" "}
          {props.eleonora} <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          autem distinctio perferendis vel corrupti fuga non, iure quasi
          molestias. Pariatur rem vitae praesentium ex quaerat eveniet optio
          mollitia error sit?
        </p>
      </div>
    </div>
  );
};

export default Mycomponent;
