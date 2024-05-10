import axios from "axios";
import Cookies from 'js-cookie'
async function Register(name: any, email: any, password: any) {
    const bodyData = new FormData();
    bodyData.append("name", name);
    bodyData.append("email", email);
    bodyData.append("password", password);
    return axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        bodyData,
        {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }
    );
}
async function Login(email: any, password: any) {
    const bodyData = new FormData();
    bodyData.append("email", email);
    bodyData.append("password", password);
    return axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        bodyData,
        {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }
    );
}
async function Auth(vm) {
    if (!Cookies.get("token")) {
        vm.$router.push("/login");
    }
}

export { Register, Login, Auth };
