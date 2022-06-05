export function Post(props) {
  const { author, content } = props;
  console.log(props);

  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}
