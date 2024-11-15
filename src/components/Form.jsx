import { useState } from "react";

const Form = () => {
  const [ formData, setFormData ] = useState({
    name: "",
    username: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { name, username } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <h3>Details Submitted Sucessfully</h3>}
      <br />
    </div>
  );
};
export default Form;
