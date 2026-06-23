import "./App.css";

function ProjectCard() {
  const title = "Channfilms Portfolio";

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProjectCard />
    </div>
  );
}

export default App;

