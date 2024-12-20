import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {

  const[value,setvalue]= useState(false)

  const [data,setdata]= useState({
    Name: "",
    Phone_no:"",
    password:"",
    Email:"",
  })

  const changed=(e)=>{
    e.preventDefault()
    setvalue(true)
  }
  const changes=(e)=>{
    e.preventDefault()
    setvalue(false)

  }
  return (

    <div className='h-screen w-full bg-gray-100 '>
    
    <div className="flex justify-center items-center h-[700px]  bg-gray-100">
  <form className="flex flex-col gap-4 p-6 w-80 bg-white shadow-lg rounded-lg" onSubmit={changed}>
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">User Information</h2>

    <label className="flex flex-col text-sm text-gray-700">
      Name:
      <input
        className="mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        type="text"
        placeholder="Type your name"
        value={data.Name}
        onChange={(e) => setdata({ ...data, Name: e.target.value })}
      />
    </label>

    <label className="flex flex-col text-sm text-gray-700">
      Phone Number:
      <input
        className="mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        type="text"
        placeholder="Type your phone number"
        value={data.Phone_no}
        onChange={(e) => setdata({ ...data, Phone_no: e.target.value })}
      />
    </label>

    <label className="flex flex-col text-sm text-gray-700">
      Password:
      <input
        className="mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        type="password"
        placeholder="Type a strong password"
        value={data.password}
        onChange={(e) => setdata({ ...data, password: e.target.value })}
      />
    </label>

    <label className="flex flex-col text-sm text-gray-700">
      Email:
      <input
        className="mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        type="email"
        placeholder="Type your email"
        value={data.Email}
        onChange={(e) => setdata({ ...data, Email: e.target.value })}
      />
    </label>

    <button
      type="submit"
      className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
    >
      Submit
    </button>
  </form>

  

</div>


{value && (
  <div className="flex flex-col h-[350px] w-[300px] fixed top-4 right-4 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
    <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">Saved Information</h1>
    <div className="flex flex-col gap-3">
      <label className="text-sm text-gray-600">
        Name:
        <p className="text-gray-800 font-medium mt-1">{data.Name}</p>
      </label>
      <label className="text-sm text-gray-600">
        Phone Number:
        <p className="text-gray-800 font-medium mt-1">{data.Phone_no}</p>
      </label>
      <label className="text-sm text-gray-600">
        Password:
        <p className="text-gray-800 font-medium mt-1">{data.password}</p>
      </label>
      <label className="text-sm text-gray-600">
        Email:
        <p className="text-gray-800 font-medium mt-1">{data.Email}</p>
      </label>
    </div>
    <button
      onClick={changes}
      className="mt-6 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors self-center"
    >
      Close
    </button>
  </div>
)}



</div>
  
  );
}

export default App;
