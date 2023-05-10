import  {useState} from 'react'

export const Form = ({add, title}) => {
    const [form, setForm] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        add(form, title.id);
      };
  return (
    <form  className='input' onSubmit={handleSubmit}>
    <input type="text" required form={form} onChange={(e) => setForm(e.target.value)} placeholder='enter'/>
    <button type="submit">Add</button>
  </form>
  )
}