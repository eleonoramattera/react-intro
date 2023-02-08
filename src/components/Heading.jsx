import Input from "./Input";

const Heading = (props) => {
  return (
    <>
      <h1 className="heading"> BENVENUTI SU REACTJS</h1>
      <Input
        placeholder={props.placeholder}
        label={props.label}
        style={{ display: "block" }}
      />
    </>
  );
};

export default Heading;
