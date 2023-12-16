
let stories=[
    {
    dp:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
    status:"https://images.unsplash.com/photo-1583766395091-2eb9994ed094?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    dp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww",
    status:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1613005798967-632017e477c8?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    status:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    status:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    status:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
  }
  ]
  
  let htmlstories=document.querySelector(".stories")
  
  let story=document.querySelector(".story")
  
  
  let htmlString="";
  stories.forEach(function(elem,idx){
    htmlString=htmlString+`
    
    <div class="story">
          <img id="${idx}" src="${elem.dp}" alt ="">
        </div>
    
    `
  })
  
  htmlstories.innerHTML=htmlString;
  
  
  let full =document.querySelector(".full-screen")
  
  htmlstories.addEventListener("click",function(dets){
    
    full.style.display="block"
   full.style.backgroundImage=`url(${stories[dets.target.id].status})` 
   
   setTimeout(function (){
     full.style.display="none"
   },2500)
  })
  
  
  let post =[
  
  {
   profile:"https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   name:"sarah_butt",
   poster:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   caption:"Beauty is not outside is inside"
  }  ,
  {
   profile:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   name:"kimson_doan",
   poster:"https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   caption:"love animals not humans"
  }, 
  {
   profile:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   name:"charles_devilou",
   poster:"https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   caption:"Self love is necessary"
  } , 
  {
   profile:"https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   name:"alexandra_gorn",
   poster:"https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
   caption:"let the people bark"
  }  
    ]
    
    
  let display=  document.querySelector(".display")
    
    let htmlString2=""
   post.forEach(function(value){
     htmlString2=htmlString2+`
     
     <div class="name">
        <div class="name-left">
          <img src="${value.profile}" alt="">
          <p>${value.name}</p>
        </div>
        <div class="name-right">
          <i class="ri-notification-badge-line"></i>
        </div>
      </div>
      <div class="content">
        <img class="heart" src="${value.poster}">
      </div>
    <div class="comment">
     <div class="comment-child">     
      <div class="comment-left">
        <i class="ri-heart-line"></i>
        <i class="ri-chat-3-line"></i>
        <i class="ri-share-forward-line"></i>
       </div>
      <div class="comment-right">
         <i class="ri-save-line"></i>
       </div>
      </div>
      <div class="text">
        <p id="text1">${value.caption}</p>
        <p id="text2">View all comments</p>
        
      </div>
     </div>
     
     `
   })
   
   display.innerHTML=htmlString2;
   
   
  /*let heart= document.querySelector(".heart")
  let like=document.getElementById("like")
  
  heart.addEventListener("dblclick",function(){
    like.style.opacity=1;
    setTimeout(function(){
      like.style.opacity=0;
    },2000)
  })*/
  
  
  