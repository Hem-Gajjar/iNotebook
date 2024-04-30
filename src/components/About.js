import React from "react";

const About = () => {
  return (
    <>
      <div>
        <header>
          <h1>Welcome to iNotebook</h1>
          <p>Your personalized notes manager built with React</p>
        </header>

        <main>
          <section>
            <h2>About Us</h2>
            <p>
              We understand that organizing your thoughts and ideas is crucial,
              which is why we created iNotebook to be your go-to solution for
              managing your notes efficiently and securely.
            </p>
            <p>
              At iNotebook, we believe that each user's journey is unique, and
              so are their notes. Our app is designed to cater to your specific
              needs, allowing you to create, update, and delete notes with ease.
            </p>
          </section>

          <section>
            <h2>Key Features</h2>
            <ul>
              <li>
                User-Specific Notes: Your notes are private and accessible only
                to you.
              </li>
              <li>
                Insert, Update, Delete: Effortlessly manage your notes with
                ease.
              </li>
              <li>Responsive Design: Access iNotebook from any device.</li>
              <li>Customization: Tailor iNotebook to suit your preferences.</li>
              <li>Search and Filter: Easily find specific notes.</li>
            </ul>
          </section>

          <section>
            <h2>Join Us Today</h2>
            <p>
              Experience the convenience of a user-centric notes manager that
              adapts to your unique workflow. Join the iNotebook community
              today!
            </p>
            <p>
              Thank you for choosing iNotebook—we're excited to be part of your
              journey!
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
