import React from 'react';

const AddColorForm = ({onNewColor}) => {
  let title, color;

  //submit event dispatch the action addColor
  const submit = e => {
    e.preventDefault()
    onNewColor(title.value, color.value)
    title.value = ""
    color.value = "#000000"
  }

  return(
    //ref = accumulate the values of input
    //the first input pass the value of the first argument in the reducer function addColor(title)
    //the second input pass the value of the second argument in the reducer function addColor(hexColor)
    <form action = "" className="add-color container d-flex mt-5" onSubmit={submit}>
      <div className="form-group m-auto">
        <input ref={input => title = input}
               type ="text"
               placeholder="color title..."
               className="mr-5"
               required />

        <input ref={input => color = input}
               type="color"
               className="mr-5"
               required />

        <button className="btn btn-primary">ADD</button>
      </div>
    </form>
  )
}

export default AddColorForm;
