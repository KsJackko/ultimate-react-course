function Restart({ dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: 'restart' })}
      className='btn btn-ui'
    >
      Restart
    </button>
  );
}

export default Restart;
