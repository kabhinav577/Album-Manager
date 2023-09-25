import React from 'react';
import './AlbumItem.css';

const AlbumItem = ({
  id,
  deleteAlbum,
  editAlbum,
  title,
  editTitle,
  setEditTitle,
  editAlbumId,
  setEditAlbumId,
}) => {
  // Function run when edit button clicked
  const handleClick = () => {
    // Set the editAlbumId to the current album ID
    setEditAlbumId(id);
    // Set the editTitle to the current album's title
    setEditTitle(title);
  };
  return (
    <>
      <div className="col-md-6 col-lg-4 col-sm-12 my-2">
        <div className="card card-inverse card-info text-center">
          <div className="card-block p-2">
            <h5 className="card-title fw-semibold text-start text-light">
              {title.slice(0, 32)}
            </h5>
            <div className="d-flex justify-content-start align-items-center py-2">
              <button
                type="button"
                className="btn btn-outline-warning rounded-circle me-2 text-light"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal${id}`}
                onClick={handleClick}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button
                className="btn btn-outline-danger rounded-circle"
                onClick={() => deleteAlbum(id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tab  */}

      <div
        className="modal fade"
        id={`exampleModal${id}`}
        tabIndex="-1"
        aria-labelledby={`#exampleModalLabel${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`exampleModalLabel${id}`}>
                Edit title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Edit title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="floatingInput">Edit Title</label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => editAlbum(id)}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Save new Title
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumItem;
