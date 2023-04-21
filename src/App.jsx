import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Card from "./assets/Card"

function App() {
  const [count, setCount] = useState(0)
  const [isShowText, setisShowText] = useState(false)
  const [showData, setShowData] = useState([])

  const getAllUsers = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setShowData(data.users))
  }
  useEffect(() => {
    getAllUsers()
  }, [count])

  return (
    <>
      {showData.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "1050px",
            flexWrap: "wrap"
          }}
        >
          {showData.map((data, key) => (
            <Card
              key={data.id}
              img={data.image}
              name={data.firstName}
              number={data.phone}
              email={data.email}
            />
          ))}
        </div>
      ) : (
        <h1>DATA NOT FOUND</h1>
      )}
    </>
  )
}

export default App
