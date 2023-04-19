import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react app to leave a feedback for a product or services</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href="/">Back to home </a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
