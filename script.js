
local_data()
function local_data(){
    var datalogin=[
        {
            username:"6410742446",
            password:"2222",
            name:"Phatchara Rakchaui",
            subject_user:[]
        },
        {
            username:"6410742727",
            password:"1111",
            name:"Warunporn intarachana",
            subject_user:[]
        },
        {
            username:"admin",
            password:"admin"
        }]
    localStorage.setItem("data_user",JSON.stringify(datalogin))
}
var data=[
    {
        id:"TU101",
        section:"760001",
        info:"น้องเป็นสาวไหน",
        time:"12.00-13.00",
        time_countdown:"1D:08:22:31",
        count:70,
        limitcount:99
    },
    {
        id:"TU555",
        section:"760001",
        info:"บันเทิงสุขสรรค์",
        time:"12.00-13.00",
        time_countdown:"1D:08:22:31",
        count:3,
        limitcount:99
    },
    {
        id:"EV101",
        section:"760001",
        info:"อนุรักษ์สิ่งเเวดล้อม",
        time:"12.00-13.00",
        time_countdown:"1D:08:22:31",
        count:1,
        limitcount:99
    },
    {
        id:"MV999",
        section:"760001",
        info:"METAVERSE",
        time:"12.00-13.00",
        time_countdown:"1D:08:22:31",
        count:0,
        limitcount:99
    },
    {
        id:"TU456",
        section:"760001",
        info:"คหกรรม",
        time:"12.00-13.00",
        time_countdown:"1D:08:22:31",
        count:80,
        limitcount:99
    }
]
var colta_list=["TU101","TU456"]
var list_checked=[]
function Login(event){
    var datalogin=JSON.parse(localStorage.getItem("data_user"))
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    for(i=0;i<datalogin.length;i++){
        if (username==datalogin[i].username&& password==datalogin[i].password){
            console.log("Loginnnnnn")
            var usering=[
                {
                    id:username,
                    name:datalogin[i].name,
                    subject:datalogin[i].subject_user,
                    index:i,
                }
            ];
            
            var list_checked=datalogin[i].subject_user
            localStorage.setItem('userList',JSON.stringify(usering));
            break
        }
        else if(i==datalogin.length-1){
            alert("username or password is wrong")
            event.preventDefault()
        }
    }
    localStorage.setItem('list',JSON.stringify(list_checked));       
}
function Logout(){
    localStorage.removeItem('userList');
    localStorage.removeItem('username');
    index_count=JSON.parse(localStorage.getItem("index_count"))
    select_count=JSON.parse(localStorage.getItem("select_count"))
    select_count=0
    index_count=0
    localStorage.setItem('index_count',JSON.stringify(index_count))
    localStorage.setItem('select_count',JSON.stringify(select_count))

}
function admin_status(event){
    if(username!="admin"){
      alert("คุณไม่มีสิทธิ์เข้าถึง")
      event.preventDefault()
    }
  

}

document.getElementById('name').innerHTML;
document.getElementById('idc').innerHTML;
var getdata=JSON.parse(localStorage.getItem("userList"))
var localname=getdata[0].name
var localid=getdata[0].id
document.getElementById('name').innerHTML=localname
document.getElementById('idc').innerHTML=localid
// ---------------------------------------

  
  data_count()

// ---------------------------------------
// ----------------
appendData(data)
function appendData(data){
    var mainContainer = document.getElementById("main_container");
    let list_count=JSON.parse(localStorage.getItem("list_count"))
    let usering=JSON.parse(localStorage.getItem("userList"))
    let list_checked=JSON.parse(localStorage.getItem("list"))
    let select_count=JSON.parse(localStorage.getItem("select_count"))
    if (select_count == 0){
        for (let i =0; i < data.length; i++){
    // ---------------------------------------
        var div =document.createElement("div");
        div.className="card_content";
        div.id=i
                var con1=document.createElement("div")
                con1.className="content1"
                div.appendChild(con1)
                    var p1=document.createElement("p")
                    p1.className="tag_name"
                    p1.innerHTML=data[i].id
                    con1.appendChild(p1)
                    var p2=document.createElement("p")
                    p2.innerHTML=data[i].section
                    p2.className="section"
                    con1.appendChild(p2)
                var con2=document.createElement("div")
                con2.className="content2"
                div.appendChild(con2)
                    var p3=document.createElement("p")
                    p3.innerHTML=data[i].info
                    con2.appendChild(p3)
                    var p4=document.createElement("p")
                    p4.className="time_learn"
                    p4.innerHTML=data[i].time
                    con2.appendChild(p4)
                var con3=document.createElement("div")
                con3.className="content3"
                div.appendChild(con3)
                    var p5=document.createElement("p")
                    p5.innerHTML=String(list_count[i].count)+"/"+String(data[i].limitcount)
                    con3.appendChild(p5)
                    var ul1=document.createElement("ul")
                    ul1.className="tm"
                    con3.appendChild(ul1)
                        var div2=document.createElement("div")
                        div2.className="time_container"
                        ul1.appendChild(div2)
                            var p1_div=document.createElement("p")
                            var p2_div=document.createElement("p")
                            p1_div.className="time_countdown"
                            p1_div.innerHTML=data[i].time_countdown
                            p2_div.innerHTML="close"
                            div2.appendChild(p1_div)
                            div2.appendChild(p2_div)
                            var li1=document.createElement("li")
                            ul1.appendChild(li1)
                                var p6=document.createElement("input")
                                p6.type="checkbox"
                                if(list_count[i].count==0 ){
                                    let check=0
                                    for(let u=0;u<usering[0].subject.length;u++){
                                        if  (list_count[i].id==usering[0].subject[u]){
                                            check=1
                                        }
                                    }
                                    if(check==0){
                                        p6.id="cancel_checkbox"
                                        p6.checked=true
                                        p6.disabled=true
                                    }
                                    else{
                                        p6.id=data[i].id
                                        p6.checked=true
                                        p6.disabled=true
                                    }
                                }    
                                else{
                                    for (let y=0;y<list_checked.length;y++){
                                        if(data[i].id==list_checked[y]){
                                            p6.checked=true
                                        }
                                    }
                                    for (let k=0;k<usering[0].subject.length;k++){
                                        if(data[i].id==usering[0].subject[k]){
                                            p6.disabled=true
                                        }
                                    }
                                    p6.value=data[i].id
                                    p6.setAttribute("onclick","_checked(value)")
                                    p6.id=data[i].id
                                }
                                li1.appendChild(p6)
                    mainContainer.appendChild(div)
                }
        }  
        else   { 
            for (let i=0;i<list_checked.length;i++){
                for (let j=0;j<data.length;j++){
                    if(list_checked[i]==data[j].id){
                        var div =document.createElement("div");
                        div.className="card_content";
                        div.id=i
                        var con1=document.createElement("div")
                        con1.className="content1"
                        div.appendChild(con1)
                            var p1=document.createElement("p")
                            p1.className="tag_name"
                            p1.innerHTML=data[j].id
                            con1.appendChild(p1)
                            var p2=document.createElement("p")
                            p2.innerHTML=data[j].section
                            p2.className="section"
                            con1.appendChild(p2)
                        var con2=document.createElement("div")
                        con2.className="content2"
                        div.appendChild(con2)
                            var p3=document.createElement("p")
                            p3.innerHTML=data[j].info
                            con2.appendChild(p3)
                            var p4=document.createElement("p")
                            p4.className="time_learn"
                            p4.innerHTML=data[j].time
                            con2.appendChild(p4)
                        var con3=document.createElement("div")
                        con3.className="content3"
                        div.appendChild(con3)
                            var p5=document.createElement("p")
                            p5.innerHTML=String(list_count[j].count)+"/"+String(data[j].limitcount)
                            con3.appendChild(p5)
                            var ul1=document.createElement("ul")
                            ul1.className="tm"
                            con3.appendChild(ul1)
                                var div2=document.createElement("div")
                                div2.className="time_container"
                                ul1.appendChild(div2)
                                    var p1_div=document.createElement("p")
                                    var p2_div=document.createElement("p")
                                    p1_div.className="time_countdown"
                                    p1_div.innerHTML=data[j].time_countdown
                                     p2_div.innerHTML="close"
                                    div2.appendChild(p1_div)
                                    div2.appendChild(p2_div)
                                    var li1=document.createElement("li")
                                    ul1.appendChild(li1)
                                        var p6=document.createElement("input")
                                        p6.type="checkbox"
                                        for (let y=0;y<list_checked.length;y++){
                                            if(data[j].id==list_checked[y]){
                                                p6.checked=true
                                            }
                                        }
                                        for (let k=0;k<usering[0].subject.length;k++){
                                            if(data[j].id==usering[0].subject[k]){
                                                if (select_count!=2){
                                                    p6.disabled=true
                                                }
                                                else{
                                                    p6.disabled=false
                                                }
                                            }
                                            
                                        }
                                        p6.value=data[j].id
                                        p6.setAttribute("onclick","_checked(value)")
                                        p6.id=data[j].id
                                        li1.appendChild(p6)
                            mainContainer.appendChild(div)

                }
            }
            }

    }
    // ---------------local--จำนวนที่เหลือ------------
 }
function data_count(){
    let list_count=[]
    for (let i=0;i<data.length;i++){
        let id_count={
            id:data[i].id,
            count:data[i].count
        }
        list_count.push(id_count)
    }
    localStorage.setItem('list_count',JSON.stringify(list_count))
}
function selecttion_subject(){
    index_count=JSON.parse(localStorage.getItem("index_count"))
    let select_count=0
    select_count=JSON.parse(localStorage.getItem("select_count"))
    if (select_count==1){
        select_count=0
    }
    else{
        select_count=1
    }
    localStorage.setItem('select_count',JSON.stringify(select_count))
    localStorage.setItem('index_count',JSON.stringify(index_count))
}
function _checked(id){
    let index_count=0
    index_count=JSON.parse(localStorage.getItem("index_count"))
    let list_checked=JSON.parse(localStorage.getItem("list"))
        if (document.getElementById(id).checked){
            index_count+=1  
            list_checked.push(id) 
        }
        else{
            for(let i=0 ;i<list_checked.length;i++){
                if(id ==list_checked[i]){
                    if (index_count>0){
                        index_count-=1
                    }
                    list_checked.splice(i,1)

                }
            }
        }
    
    localStorage.setItem('index_count',JSON.stringify(index_count))
    localStorage.setItem('list',JSON.stringify(list_checked));
    console.log(list_checked)
    }
function colta(){
    let check=0
    let list_checked=JSON.parse(localStorage.getItem("list"))
    let index_count=JSON.parse(localStorage.getItem("index_count"))
    if(list_checked.length==0){
        for(let i=0;i<colta_list.length;i++){
            index_count+=1
            list_checked.push(colta_list[i])
            console.log(list_checked)
        }
    }
    else{
        for(let i=0;i<colta_list.length;i++){
            check=0
            for(let j=0;j<list_checked.length;j++){
                if (list_checked[j]==colta_list[i]){
                    check=1}
                if (j==list_checked.length-1){
                    if(check==0){
                        index_count+=1
                        list_checked.push(colta_list[i])
                    }
                }
            }
        } 
    }
    localStorage.setItem('index_count',JSON.stringify(index_count))
    localStorage.setItem('list',JSON.stringify(list_checked))
}
function con_firm(){
    let list_checked=JSON.parse(localStorage.getItem("list"))
    let data_user=JSON.parse(localStorage.getItem("data_user"))
    let list_count=JSON.parse(localStorage.getItem("list_count"))
    let usering=JSON.parse(localStorage.getItem("userList"))
    for(let i=0;i<list_checked.length;i++){
        let check=0
        if(usering[0].subject.length==0){
            usering[0].subject.push(list_checked[i])
            for(let j=0;j<list_count.length;j++){
            if (list_checked[i]==list_count[j].id){

                list_count[j].count-=1
            }
        }
    }
        else {  
            for (let k=0;k<usering[0].subject.length;k++){
            if (list_checked[i]==usering[0].subject[k]){

                check=1
            }}
            if (check==0){
                usering[0].subject.push(list_checked[i])
                for(let j=0;j<list_count.length;j++){
                if (list_checked[i]==list_count[j].id){
            
                    list_count[j].count-=1
                }
                }
                }
            }
        }
    data_user[usering[0].index].subject_user=usering[0].subject
    localStorage.setItem('data_user',JSON.stringify(data_user)) 
    localStorage.setItem('userList',JSON.stringify(usering))
    localStorage.setItem('list',JSON.stringify(list_checked))
    localStorage.setItem('list_count',JSON.stringify(list_count))
    }
function cancel_(event){
    let select_count=JSON.parse(localStorage.getItem("select_count"))
    let usering=JSON.parse(localStorage.getItem("userList"))
    if (usering[0].subject.length==0){
        alert("กรุณายืนยันการขอโควตา")
        event.preventDefault()
    }
    else{
        select_count=2
    }
    localStorage.setItem('select_count',JSON.stringify(select_count))
}
function cancel_comfirm(){
    let data_user=JSON.parse(localStorage.getItem("data_user"))
    let list_checked=JSON.parse(localStorage.getItem("list"))
    let select_count=JSON.parse(localStorage.getItem("select_count"))
    let list_count=JSON.parse(localStorage.getItem("list_count"))
    let usering=JSON.parse(localStorage.getItem("userList"))
    select_count=0
    let check=0
    for(let i=0;i<usering[0].subject.length;i++){
        check=0
        for(let j=0;j<list_checked.length;j++){
            if(list_checked[j]==usering[0].subject[i]){
                check=1
            }
        }
        if (check==0){
            for(let k=0;k<list_count.length;k++){
                if(list_count[k].id==usering[0].subject[i]){
                    list_count[k].count+=1
                }
            }
  
        }
    }
    usering[0].subject=list_checked
    data_user[usering[0].index].subject_user=usering[0].subject
    localStorage.setItem('data_user',JSON.stringify(data_user)) 
    localStorage.setItem('userList',JSON.stringify(usering))
    localStorage.setItem('list',JSON.stringify(list_checked))
    localStorage.setItem('list_count',JSON.stringify(list_count))
    localStorage.setItem('select_count',JSON.stringify(select_count))
}
var liste=[]
var searchcount=0
var list_search=[]

liste=data.map(liste=>{
    return {
        id:liste.id 
    }
})

const searchinput=document.querySelector("[data-search]")
searchinput.addEventListener("input",e=>{
    const value=e.target.value
    searchcount=value.length
    var div8=document.getElementById("main_container")
    if(searchcount>0){
        liste.forEach(liste=>{
            const isVisible=liste.id.includes(value)
            if (isVisible==true){
                list_search.push(liste.id)
            }
        })
       
        console.log(list_search)
        console.log(data.id)
        for(let i=0;i<data.length;i++){

            let check=0
            let div9=document.getElementById(i)
            for(let j=0;j<list_search.length;j++){
                console.log(data[i].id)
                if (list_search[j]==data[i].id){
                    check=1
                }
            }
            console.log(check)
            if(check==0){
                div9.style.display='none'
            }
        }
        list_search=[] 
    }
    else{
        for(let k=0;k<data.length;k++){
            let div9=document.getElementById(k)
            div9.style.display='block'
        }
    }
}
)



