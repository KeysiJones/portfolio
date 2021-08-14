import "./App.css";
import Box from "./components/Box";
import imgBuscador from "./images/buscador.png";
import imgCalculadora from "./images/calculadora.png";
import imgEng4Devs from "./images/english4developers.png";
import blog from "./images/blog.png";
import instituto from "./images/instituto.png";

function App() {
  return (
    <div className="bg-gray-500">
      <div className="text-center">
        <h1 className="text-6xl pt-12 text-green-400 font-bold">Keysi Jones</h1>
        <p className="mt-6 text-2xl text-white">FullStack web developer</p>
      </div>
      <div id="contato">
        <Box
          styles="mt-24 px-10 py-8"
          text="Projetos"
          link="#projects"
          bg="bg-yellow-400"
          hoverBg="bg-yellow-400"
        />
        <Box
          styles="mt-24 px-10 py-8"
          text="Github"
          link="https://github.com/KeysiJones"
          bg="bg-gray-600"
          hoverBg="bg-gray-700"
        />
        <Box
          styles="mt-24 px-10 py-8"
          text="Skills"
          link="#skills"
          bg="bg-green-400"
          hoverBg="bg-green-500"
        />
        <Box
          styles="mt-24 px-10 py-8"
          text="LinkedIn"
          link="https://www.linkedin.com/in/keysijones/"
          bg="bg-blue-400"
          hoverBg="bg-blue-500"
        />
      </div>
      <h2
        id="skills"
        className="my-24 text-6xl text-green-400 text-center font-bold"
      >
        Skills
      </h2>
      <div className="skills-box">
        <Box
          styles="w-32 p-4"
          text="JS"
          bg="bg-yellow-400"
          hoverBg="bg-yellow-400"
        />
        <Box
          styles="mt-8 w-32 p-4"
          text="JAVA"
          bg="bg-red-400"
          hoverBg="bg-red-400"
        />
      </div>
      <div className="skills-box">
        <Box
          styles="mt-8 w-32 p-4"
          text="HTML"
          bg="bg-red-400"
          hoverBg="bg-red-400"
        />
        <Box
          styles="mt-8 w-32 p-4"
          text="CSS"
          bg="bg-blue-400"
          hoverBg="bg-blue-400"
        />
        <Box
          styles="mt-8 w-32 p-4"
          text="PHP"
          bg="bg-indigo-400"
          hoverBg="bg-indigo-400"
        />
        <Box
          styles="mt-8 w-32 p-4"
          text="Git"
          bg="bg-gray-400"
          hoverBg="bg-gray-400"
        />
      </div>
      <div className="skills-box mb-24">
        <Box
          styles="mt-8 w-32 p-4"
          text="React"
          bg="bg-blue-400"
          hoverBg="bg-blue-400"
        />
        <Box
          styles="mt-8 w-32 p-4"
          text="SQL"
          bg="bg-indigo-400"
          hoverBg="bg-indigo-400"
        />
      </div>
      <h2
        id="projects"
        className="text-6xl my-28 text-green-400 text-center font-bold"
      >
        Projects
      </h2>
      <div className="project-wrapper">
        <div className="projects">
          <a href="https://buscador-six.vercel.app/">
            <img
              alt=""
              src={imgBuscador}
              className="rounded-bl-xl rounded-tl-xl"
            />
          </a>
        </div>
        <div className="projects">
          <a href="https://calculadora-salario.vercel.app/">
            <img
              alt=""
              src={imgCalculadora}
              className="rounded-bl-xl rounded-tl-xl"
            />
          </a>
        </div>
      </div>
      <div className="my-4 project-wrapper">
        <div className="projects">
          <a href="https://english4developers.vercel.app/">
            <img
              alt=""
              src={imgEng4Devs}
              className="rounded-bl-xl rounded-tl-xl"
            />
          </a>
        </div>
        <div className="projects">
          <a href="https://keysijones-blog.vercel.app/">
            <img alt="" src={blog} className="rounded-bl-xl rounded-tl-xl" />
          </a>
        </div>
        <div className="projects">
          <a href="https://instituto-helper.netlify.app//">
            <img
              alt=""
              src={instituto}
              className="rounded-bl-xl rounded-tl-xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
