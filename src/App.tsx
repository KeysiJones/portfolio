import './App.css';
import Box from './components/Box'
import imgBuscador from './images/buscador.png'
import imgCalculadora from './images/calculadora.png'

function App() {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-6xl mt-12 text-green-400 font-bold'>Keysi Jones</h1>
        <p className='mt-3 text-2xl text-gray-500'>FullStack web developer</p>
      </div>
      <div className='flex'>
        <Box styles='mt-24 px-10 py-8' text='Projetos' link='#projects' bg='bg-yellow-400' hoverBg='bg-yellow-400'/>
        <Box styles='mt-24 px-10 py-8' text='Github' link='https://github.com/KeysiJones' bg='bg-gray-500' hoverBg='bg-gray-600'/>
        <Box styles='mt-24 px-10 py-8' text='Skills' link='#skills' bg='bg-green-400' hoverBg='bg-green-500'/>
        <Box styles='mt-24 px-10 py-8' text='LinkedIn' link='https://www.linkedin.com/in/keysijones/' bg='bg-blue-400' hoverBg='bg-blue-500'/>
      </div>
      <h2 id='skills' className='text-6xl mt-48 text-green-400 text-center font-bold'>Skills</h2>
      <div className='flex'>
        <Box styles='mt-24 w-32 p-4' text='JS' bg='bg-yellow-400' hoverBg='bg-yellow-400'/>
        <Box styles='mt-24 w-32 p-4' text='JAVA' bg='bg-red-400' hoverBg='bg-red-400'/>
      </div>
      <div className='flex'>
        <Box styles='mt-8 w-32 p-4' text='HTML' bg='bg-red-400' hoverBg='bg-red-400'/>
        <Box styles='mt-8 w-32 p-4' text='CSS' bg='bg-blue-400' hoverBg='bg-blue-400'/>
        <Box styles='mt-8 w-32 p-4' text='PHP' bg='bg-indigo-400' hoverBg='bg-indigo-400'/>
        <Box styles='mt-8 w-32 p-4' text='Git' bg='bg-gray-400' hoverBg='bg-gray-400'/>
      </div>
      <div className='flex mb-24'>
        <Box styles='mt-8 w-32 p-4' text='React' bg='bg-blue-400' hoverBg='bg-blue-400'/>
        <Box styles='mt-8 w-32 p-4' text='SQL' bg='bg-indigo-400' hoverBg='bg-indigo-400'/>
      </div>
      <h2 id='projects' className='text-6xl mt-28 text-green-400 text-center font-bold'>Projects</h2>
      <div className='my-24 mx-14'>
        <div className='flex border-4 rounded-xl border-green-400 mb-2'>
          <a href='https://buscador-six.vercel.app/'><img alt='' src={imgBuscador} className='w-96 rounded-bl-xl rounded-tl-xl'/></a>
          <div className='w-full text-center my-auto'>
            <h2 className='mt-3 text-2xl text-gray-600 font-bold px-4'>Site de pesquisas</h2>
            <p>Interface de um buscador personalizado</p>
          </div>
        </div>
        <div className='flex border-4 rounded-xl border-green-400 mb-2'>
          <a href='https://calculadora-salario.vercel.app/'><img alt='' src={imgCalculadora} className='w-96 rounded-bl-xl rounded-tl-xl'/></a>
          <div className='w-full text-center'>
            <h2 className='mt-3 text-2xl text-gray-600 font-bold px-4'>Calculadora de salários</h2>
            <p>Essa calculadora transforma o salário de mêses para horas. Te ajuda com os freelas onde geralmente o valor é cobrado em horas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
