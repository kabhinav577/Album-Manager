import React, { useEffect, useState } from 'react';
import AlbumItem from '../AlbumItem/AlbumItem';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editAlbumId, setEditAlbumId] = useState(null);

  // Fetching Albums from API once when component is Rendered useEffect is Gone
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/albums'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const addAlbum = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums',
        {
          method: 'POST',
          body: JSON.stringify({ title: newAlbumTitle }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Update albums state by spreading the new album data into the array
      setAlbums([data, ...albums]);
      // Clear the newAlbumTitle
      setNewAlbumTitle('');
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const editAlbum = async (editAlbumId) => {
    if (editAlbumId === null || editTitle === '') {
      return;
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${editAlbumId}`,
        {
          method: 'PUT',
          body: JSON.stringify({ title: editTitle }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Update the title of the edited album
      const updatedAlbums = albums.map((album) =>
        album.id === editAlbumId ? { ...album, title: data.title } : album
      );

      setAlbums(updatedAlbums);
      setEditTitle('');
      setEditAlbumId(null);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const deleteAlbum = async (id) => {
    // Dummy DELETE request (you won't be able to delete from the actual API)
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Filter out the deleted album from the albums state
      const updatedAlbums = albums.filter((album) => album.id !== id);

      setAlbums(updatedAlbums);
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  return (
    <div className="my-4">
      <section className="py-2 text-center container">
        <div className="row py-lg-2">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold text-light">Album Manager</h1>
            <p className="lead text-light">
              Photo album managers allow users to categorize and organize their
              photos into albums or folders.
            </p>
            <p className="d-flex justify-content-center align-items-center">
              <span>
                <input
                  type="text"
                  id="typeText"
                  className="form-control"
                  placeholder="New Album Title"
                  value={newAlbumTitle}
                  onChange={(e) => setNewAlbumTitle(e.target.value)}
                />
              </span>
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
      <div className="container">
        <div className="row">
          {albums.map((album) => (
            <AlbumItem
              key={album.id}
              id={album.id}
              editAlbum={editAlbum}
              deleteAlbum={deleteAlbum}
              title={album.title}
              editTitle={editTitle} // Pass the editTitle state
              setEditTitle={setEditTitle} // Pass the setEditTitle function
              editAlbumId={editAlbumId} // Pass the editAlbumId state
              setEditAlbumId={setEditAlbumId} // Pass the setEditAlbumId function
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
