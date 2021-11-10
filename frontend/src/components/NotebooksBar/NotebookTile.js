import { useHistory, useParams } from 'react-router-dom';

const NotebookTile = ({ notebook }) => {
  const { notebookId } = useParams();
  const history = useHistory();
  const handleClick = () => {
    history.push(`/notebooks/${notebook.id}/notes/new`);
  };

  const selected = +notebookId === notebook.id;

  return (
    <div
      className={selected ? 'notebook-tile-selected' : 'notebook-tile'}
      key={notebook.id}
      onClick={handleClick}
    >
      <img
        className="tile-image"
        src={
          notebook.photoUrl
            ? notebook.photoUrl
            : 'https://images.unsplash.com/photo-1602629978851-125a3b62f3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        }
        alt="test"
      />
      <p>{notebook.title}</p>
    </div>
  );
};

export default NotebookTile;
