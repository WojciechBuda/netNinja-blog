import { Link } from "react-router-dom"

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Przykro nam ;/ </h2>
      <p>Ta strona nie istnieje w naszej bazie</p>
      <Link to="/">Powrót do strony głównej</Link>
    </div>
   );
}
 
export default NotFound;