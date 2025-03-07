import {useState} from 'react';
export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
      e.preventDefault()
      if (newItem === "") return
      onSubmit(newItem)
      setNewItem("")
    }
    return (
      <form onSubmit= {handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Add new item:</label>
          <input 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} 
            id="item" 
            type="text" 
          />
        </div>
        <button className="btn">Add item</button>
      </form>
    )
}