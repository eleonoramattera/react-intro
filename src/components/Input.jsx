const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        style={{
          fontSize: "20px",
          borderRadius: "30",
          padding: "10px",
          width: "400px",
          display: "block",
          margin: "auto",
        }}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
