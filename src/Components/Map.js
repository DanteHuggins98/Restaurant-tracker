import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section id="#home">
      <div>
        <iframe
          title="myFrame"
          className="map"
          src="https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20me&key=AIzaSyC7Vrzt67DQxycej4ik9bQrB7KuqduTFX8"
        ></iframe>
      </div>
    </section>
  );
}

export default App;
