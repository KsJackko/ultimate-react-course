import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to='-1'>&larr; Back to menu</LinkButton>
    </div>
  );
}

export default Error;
