import React, { useEffect, useState } from 'react';
import AlbumItem from '../AlbumItem/AlbumItem';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');

  // Fetching Albums from API once when component is Rendered useEffect is Gone
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error('Error fetching albums:', error));
  }, []);

  const addAlbum = () => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({ title: newAlbumTitle }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAlbums([data, ...albums]);
        setNewAlbumTitle('');
      })
      .catch((error) => console.error('Error fetching albums:', error));
  };

  const editAlbum = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title: editTitle }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAlbums([data, ...albums]);
        setEditTitle('');
      })
      .catch((error) => console.error('Error fetching albums:', error));
  };

  const deleteAlbum = (id) => {
    // Dummy DELETE request (you won't be able to delete from the actual API)
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedAlbums = albums.filter((album) => album.id !== id);
        setAlbums(updatedAlbums);
      })
      .catch((error) => console.error('Error deleting album:', error));
  };

  return (
    <div className="my-4">
      <section className="py-2 text-center container">
        <div className="row py-lg-2">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold text-light">Album Manager</h1>
            <p className="lead text-light">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p className="d-flex justify-content-center align-items-center">
              <div>
                <input
                  type="text"
                  id="typeText"
                  className="form-control"
                  placeholder="New Album Title"
                  value={newAlbumTitle}
                  onChange={(e) => setNewAlbumTitle(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary my-2 mx-2 text-light"
                onClick={addAlbum}
              >
                Add Album
              </button>
            </p>
          </div>
        </div>
      </section>
      <AlbumItem
        albums={albums}
        deleteAlbum={deleteAlbum}
        editAlbum={editAlbum}
      />
    </div>
  );
};

export default Album;
