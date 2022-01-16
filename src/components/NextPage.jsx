

const NextPage = ({ nextPage }) => {
  return (
    <button
      type="button"
      className="btn btn-info"
      onClick={nextPage}
    >
      Siguiente &raquo;
    </button>
  );
}

export default NextPage;