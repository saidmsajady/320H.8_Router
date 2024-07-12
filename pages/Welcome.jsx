import { useParams } from "react-router-dom"

const Welcome = () => {
    const params = useParams()
  return (
    <div>
        Welcome {params.firstName} {params.lastName} to our website
    </div>
  )
}

export default Welcome