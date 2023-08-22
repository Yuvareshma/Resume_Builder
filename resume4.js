function Addbox(){
    let newbox=document.createElement("textarea");
    newbox.classList.add("box");
    newbox.setAttribute("row",3);
    newbox.setAttribute("placeholder",'Area of interest')

    let clickbtn=document.getElementById("add");
    let form=document.getElementById("Aoi");

    form.insertBefore(newbox,clickbtn);
    

}
function Addnextbox(){
    let newbox1=document.createElement("textarea");
    newbox1.classList.add("box1");
    newbox1.setAttribute("row",3);
    newbox1.setAttribute("placeholder",'projects')

    let clickbtn1=document.getElementById("add1");
    let form=document.getElementById("pro");

    form.insertBefore(newbox1,clickbtn1);

}
function Addsk(){
    let newsk=document.createElement("textarea");
    newsk.classList.add("sk");
    newsk.setAttribute("row",4);
    newsk.setAttribute("placeholder",'Skills');

    let clickbtn=document.getElementById("add2");
    let frmm=document.getElementById("skills");
    
    frmm.insertBefore(newsk,clickbtn);

}
function Addboxe()
{
    let newed=document.createElement("textarea");
    newed.classList.add("boxe");
    newed.setAttribute("row",6);
    newed.setAttribute("placeholder",'Enter your School/College name with percentage obtained');

    let clickbtn2=document.getElementById("add3");
    let frm=document.getElementById("Edu");
    
    frm.insertBefore(newed,clickbtn2);
}
function Addnbox(){
    let newbox4=document.createElement("textarea");
    newbox4.classList.add("box3");
    newbox4.setAttribute("row",3);
    newbox4.setAttribute("placeholder",'Awards and Achievements');

    let clickbtn1=document.getElementById("add4");
    let form=document.getElementById("aaa");

    form.insertBefore(newbox4,clickbtn1);

}
function Addibox(){
    let newbox4=document.createElement("textarea");
    newbox4.classList.add("box4");
    newbox4.setAttribute("row",3);
    newbox4.setAttribute("placeholder",'Internships and Workshops');

    let clickbtn1=document.getElementById("add5");
    let form=document.getElementById("inte");

    form.insertBefore(newbox4,clickbtn1);

}
function Addbbox(){
    let newbox5=document.createElement("textarea");
    newbox5.classList.add("box5");
    newbox5.setAttribute("row",3);
    newbox5.setAttribute("placeholder",'Hobbies');

    let clickbtn1=document.getElementById("add6");
    let form=document.getElementById("Hoi");

    form.insertBefore(newbox5,clickbtn1);

}
function generate(){
    let usename=document.getElementById("fname").value;
    let outf=document.getElementById("userf");
    let uses=document.getElementById("sname").value;
    let outs=document.getElementById("users");
    let useg=document.getElementById("gmail").value;
    let outg=document.getElementById("ug");
    let usem=document.getElementById("inum").value;
    let outm=document.getElementById("unum");
    let usep=document.getElementById("place").value;
    let outp=document.getElementById("uplace");
    let usel=document.getElementById("link").value;
    let outl=document.getElementById("ulink");
    let usec=document.getElementById("carr").value;
    let outc=document.getElementById("carru");
    let usek=document.getElementsByClassName("sk");
    let usar=document.getElementsByClassName("box");
    let uspr=document.getElementsByClassName("box1");
    let used=document.getElementsByClassName("boxe");    
    let usaa=document.getElementsByClassName("box3");
    let usin=document.getElementsByClassName("box4");
    let ushb=document.getElementsByClassName("box5");

    outf.innerHTML=usename;
    outs.innerHTML=uses;
    outg.innerHTML=useg;
    outm.innerHTML=usem;
    outp.innerHTML=usep;
    outl.innerHTML=usel;
    outc.innerHTML=usec;

    let str="";
    for(let e of usek){
        str=str + `<li>${e.value}</li>`;
    }
    document.getElementById("ski").innerHTML=str;

    let str1="";
    for(let e of usar){
        str1=str1 + `<li>${e.value}</li>`;
    }
    document.getElementById("aoi").innerHTML=str1;

    let str2="";
    for(let e of uspr){
        str2=str2 + `<li>${e.value}</li>`;
    }
    document.getElementById("proj").innerHTML=str2;

    let str3="";
    for(let e of used){
        str3=str3 + `<li>${e.value}</li>`;
    }
    document.getElementById("educ").innerHTML=str3;
    let str4="";
    for(let e of usaa){
        str4=str4 + `<li>${e.value}</li>`;
    }
    document.getElementById("adac").innerHTML=str4;
    let str5="";
    for(let e of usin){
        str5=str5 + `<li>${e.value}</li>`;
    }
    document.getElementById("int").innerHTML=str5;
    
    let str6="";
    for(let e of ushb){
        str6=str6 + `<li>${e.value}</li>`;
    }
    document.getElementById("hoi").innerHTML=str6;
    
    document.getElementById('first').style.display='none';
    document.getElementById('contain').style.display='flex';
    document.getElementById('printdo').style.display='flex';
}
window.onload=function(){
    document.getElementById("btn").addEventListener("click",()=>{
        const invoice=this.document.getElementById("contain");
        console.log(invoice);
        console.log(window);
        html2pdf().from(invoice).save();
    })
}