import { toast } from "sonner"
import httpService from "../services/httpService"
import useAuth from "./useAuth"

function useServer() {
    const { token, setUser } = useAuth()

    const handleResponse = ({ data, loading, error }) => {
        if (data?.user && data?.accessToken) { 
            setUser({...data})
        }
        //aqui se pregunta si llego un error
        if (error && error.status === 401){ //aqui se pregunta si hay algun error y si ese error es 401 por el doble && pero se coloca toda la linea 13,14,15,16
            toast.error('El usuario o contraseña es incorrecto')
        }else{
            if (error){
                
                toast.error(error.message) //este el mensaje delerror que le muestra al usuario
            }
        }
        return {data, loading, error}
    }

    return {
        get: ({ url }) => httpService({ url, method: 'GET', token }), //el error pasa por aqui
        post: ({ url, body }) => httpService({ url, method: 'POST', token, body }).then(handleResponse),
        put: ({ url, body }) => httpService({ url, method: 'PUT', token, body }).then(handleResponse),
        delete: ({ url }) => httpService({ url, method: 'DELETE', token })
    }
}

export default useServer
