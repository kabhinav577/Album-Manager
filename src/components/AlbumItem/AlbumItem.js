import React from 'react';
import './AlbumItem.css';

const AlbumItem = ({ albums, deleteAlbum, editAlbum }) => {
  return (
    <>
      <div class="container">
        <div class="row">
          {albums.map((album) => (
            <>
              <div class="col-md-6 col-lg-4 col-sm-12 my-2">
                <div class="card card-inverse card-info text-center">
                  <div class="card-block p-2">
                    <h5 class="card-title fw-semibold text-start text-light">
                      {album.title.slice(0, 32)}
                    </h5>
                    <div className="d-flex justify-content-start align-items-center py-2">
                      <button
                        type="button"
                        className="btn btn-outline-warning rounded-circle me-2 text-light"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-outline-danger rounded-circle"
                        onClick={() => deleteAlbum(album.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Edit title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form class="">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control rounded-3"
                            id="floatingInput"
                            placeholder="Edit title"
                          />
                          <label for="floatingInput">Edit Title</label>
                        </div>
                        <button
                          class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                          type="submit"
                          onClick={() => editAlbum(album.id)}
                        >
                          Edit title
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlbumItem;
