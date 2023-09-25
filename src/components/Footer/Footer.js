import React from 'react';

const Footer = () => {
  return (
    <>
      <div class="b-example-divider"></div>

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <i class="fa-solid fa-camera"></i>
            </a>
            <span class="mb-3 mb-md-0 text-muted">
              🙋‍♂️Designed by{' '}
              <a
                class="text-muted"
                href="https://www.linkedin.com/in/krishna-kant-singh-ab391a1b1/"
                target="_blank"
                rel="noreferrer"
              >
                Krishna Kant Singh
              </a>
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a
                class="text-muted"
                href="https://www.linkedin.com/in/krishna-kant-singh-ab391a1b1/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-muted"
                href="https://instagram.com/mr.robot_abhi"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-muted"
                href="https://github.com/kabhinav577"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
