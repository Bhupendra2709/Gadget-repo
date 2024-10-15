let n=0
function add()
{
    let  add=document.getElementById("main")
    let num=n+5
    add.innerHTML= num
    
}
function sub()
{
    let  sub=document.getElementById("main")
    if (n<0)
    {
        let num1=n-5
        sub.innerHTML= num1
    }

}