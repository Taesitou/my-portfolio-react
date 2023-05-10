import './App.css';
import Header from './components/header.jsx';
import Button from './components/button.jsx';
import Titles from './components/titles';
import AboutMe from './components/about-me';
import Search from './components/search';
import ProjectCard from './components/project-card';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='principal'>
        <h1>Tomas Espinosa</h1>
        <p>Software Developer and Content Creator.</p>  
        <Button label="Download CV"/>
      </div>

      <div className='content-section'>
        <Titles label="Let me introduce myself" title="About Me"/>
        <AboutMe img="https://www.biografiasyvidas.com/monografia/julio_cesar/fotos/cesar_julio_420.jpg" 
                bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, quidem, voluptates, voluptas, tempore quia magni
                reprehenderit quos voluptatibus nemo doloremque. Quisquam, quidem
                voluptatem. Quisquam voluptatum, quidem, voluptates, voluptas, tempore
                quia magni reprehenderit quos voluptatibus nemo doloremque. Quisquam,
                quidem voluptatem."/>
      </div>

      <div className='content-section'>
        <Titles title="Projects Portfolio" />
        <Search label="Search projects by title or filter by category"  placeholder="Search Projects..."/>
      <div className='flex-cards'>
        <ProjectCard image="https://www.biografiasyvidas.com/monografia/julio_cesar/fotos/cesar_julio_420.jpg" 
                     alt="Julio Cesar" 
                     title="Julio Cesar Quotes" 
                     description="An API with the most known quotes of Julio Cesar"/>
         <ProjectCard image="https://www.biografiasyvidas.com/monografia/julio_cesar/fotos/cesar_julio_420.jpg" 
                     alt="Julio Cesar" 
                     title="Julio Cesar Quotes" 
                     description="An API with the most known quotes of Julio Cesar"/>
         <ProjectCard image="https://www.biografiasyvidas.com/monografia/julio_cesar/fotos/cesar_julio_420.jpg" 
                     alt="Julio Cesar" 
                     title="Julio Cesar Quotes" 
                     description="An API with the most known quotes of Julio Cesar"/>
         <ProjectCard image="https://www.biografiasyvidas.com/monografia/julio_cesar/fotos/cesar_julio_420.jpg" 
                     alt="Julio Cesar" 
                     title="Julio Cesar Quotes" 
                     description="An API with the most known quotes of Julio Cesar"/>
        <ProjectCard image="https://www.biografiasyvidas.com/monografia/julio_cesar/fotos/cesar_julio_420.jpg" 
                     alt="Julio Cesar" 
                     title="Julio Cesar Quotes" 
                     description="An API with the most known quotes of Julio Cesar"/>
        <ProjectCard image="https://www.biografiasyvidas.com/monografia/julio_cesar/fotos/cesar_julio_420.jpg" 
                     alt="Julio Cesar" 
                     title="Julio Cesar Quotes" 
                     description="An API with the most known quotes of Julio Cesar"/> {/*ME FAlta agregar el rowgap en  las cards. el error esta en el height de content section */}
      </div>
              
      </div>






    </div>
  );
}

export default App;
