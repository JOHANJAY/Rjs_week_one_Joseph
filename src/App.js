import ConditionalRendering from "./components/ConditionalRendering";
import Counter from "./components/counter";
import DataFetcher from "./components/dataFetcher";
import Form from "./components/Form";
import InputField from "./components/InputField";

const App = () => {
  return (
    <div>
      <Counter />
      <DataFetcher />
      <InputField />
      <ConditionalRendering />
      <Form />
    </div>
  );
};

export default App;
