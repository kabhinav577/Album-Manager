import React from 'react';

const AlbumItem = ({ albums, deleteAlbum }) => {
  return (
    <>
      <div class="container">
        <div class="row">
          {albums.map((album) => (
            <div class="col-md-6 col-lg-4 col-sm-12 my-2">
              <div class="card card-inverse card-info text-center">
                <div class="card-block">
                  <h4 class="card-title">{album.title}</h4>
                  <div className="d-flex justify-content-start align-items-center px-4 py-2">
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() => deleteAlbum(album.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteAlbum(album.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlbumItem;
