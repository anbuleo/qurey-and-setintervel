//onclick function
/*
function foo(){
    const result = document.getElementById("email").value;
    const expInput = "b50wd2tamil@gmail.com";
   
   let output = `${result===expInput ?'valid User' :'in valid user'}`;
   console.log(output)

}
   */
    // if(result==expInput){
    //     console.log("valid user")
    // }else{
    //     console.log("invalid user")
    // }
/*

    function createlabel(tagname,content,attrname,attrvalue){

        const label = document.createElement(tagname);
        label.innerHTML= content;
        label.setAttribute=(attrname,attrvalue);
        return label;
    }

    function taginput(tagname,type,inputvalue){
        const input1 = document.createElement(tagname);
        input1.setAttribute=(type,inputvalue)
        return input1;
    }
 
  function linebreake(){
    const br = document.createElement("br");
    return br;
  }


    let form = document.createElement("form")
    let label1 = createlabel("label","First Name:  ", "for", "firstName");
    let label1input = taginput("input","type","text")
    let br = createlabel("br")
    let label2 = createlabel("label","Last Name:  ","for", "lastname");
    let label2input = taginput("input","type","text");
    let mobile = createlabel("label", "Phone Number:  ","for","tele") 
    let mobileinput = taginput("input", "type", "tel")
    let email = createlabel("label","E-mail:  ", "for", "email")
    let emailinput  = taginput("input","type","email")
    let button = createlabel("button","submit","type","button")
     form.append(label1,label1input,linebreake(),label2,label2input,linebreake(),mobile,mobileinput,linebreake(),email,emailinput,linebreake(),button)
    
    document.body.append(form)

    */

   /* // set time out

    function greet(){
        console.log("hello all")
    }
    setInterval(greet,1000)

    */

const text = document.querySelector(".sec-text")
const textload = () =>{
    setTimeout(()=>{
        text.textContent = "Developer"
    },0)
        setTimeout(()=>{
            text.textContent = " Front-End Developer"
        },4000)
            setTimeout(()=>{
                text.textContent = " Back-End Developer"
            },8000)
}
textload();
setInterval(textload,12000);