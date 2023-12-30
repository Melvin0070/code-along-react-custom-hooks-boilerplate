import {useEffect } from "react";

const useStorage=(search)=>{
    useEffect(()=>{
        localStorage.setItem('content', search);
        sessionStorage.setItem('content', search);
    },[search])
}

export default useStorage