import React, { useState } from "react";

const SmurfForm = props => {
  const [newSmurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
  };

  const handleChanges = e => {
    setSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <div>
            <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChanges}
            value={newSmurf.name}
            />
        </div>
        <div>
            <input
            type="text"
            name="age"
            placeholder="age"
            onChange={handleChanges}
            value={newSmurf.age}
            />
        </div>
        <div>
            <input
            type="text"
            name="height"
            placeholder="height"
            onChange={handleChanges}
            value={newSmurf.height}
            />
        </div>
        <button type="submit">Make your own Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;