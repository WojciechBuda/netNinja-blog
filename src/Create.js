import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const[title, setTitle] = useState('');
  const[body, setBody] = useState('');
  const[author, setAuthor] = useState('wojtek');
  const[isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('dodalo');
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Dodaj nowe</h2>
      <form onSubmit={handleSubmit}> 
        <label>Nagłówek: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Treść: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Autor tekstu: </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="wojtek">wojtek</option>
          <option value="jurek">jurek</option>
        </select>
        {!isPending && <button>Dodaj</button>}
        {isPending && <button>Trwa dodawanie...</button>}
      </form>
    </div>
  );
}
 
export default Create;