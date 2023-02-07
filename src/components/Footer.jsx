const Footer = (props) => {
  console.log(props);
  return (
    <div>
      <h2
        style={{
          color: props.color,
          backgroundColor: props.bg,
          fontSize: "20px",
        }}
      >
        {" "}
        {props.content}
      </h2>
      <p>{props.title}</p>
    </div>
  );
};

export default Footer;
