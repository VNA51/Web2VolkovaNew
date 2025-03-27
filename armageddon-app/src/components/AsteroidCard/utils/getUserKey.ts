export const getUserKey=()=>{
    const test = process.env.REACT_APP_FOO;
    console.log(">>>>>>>>>>>>>>", test)

    let userKey='';
    try{
        userKey=localStorage.getItem("API_KEY");
    }
    catch {
        userKey='DEMO_KEY';
    }

    if(!userKey){
        userKey='DEMO_KEY';
    }
    return userKey;
}