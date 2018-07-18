<script>
export default {
  name: "HelloWorld",
  functional: true,
  render(h, { data, listeners, children }) {
    return (
      <div class="hello">
        <h1>{data.attrs.msg}</h1>
        <button onClick={listeners.click}>Click me</button>
        {children}
      </div>
    );
  }
};
</script>
