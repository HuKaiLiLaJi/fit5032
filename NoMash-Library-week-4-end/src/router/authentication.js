import { ref } from 'vue'
//import router from '.';
const check=ref(false)

export function auth(){
    const login = ()=>{
        check.value==true;
        
    }
    const logout = ()=>{
        check.value==false;
        
    }
    return {check,login,logout}
}
































