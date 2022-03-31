import React from 'react'
export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "John",
    lastName: "Henry",
    checkbox: false
  });


  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="checkbox"
        value={formData.checkbox}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
}