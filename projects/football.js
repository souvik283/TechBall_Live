let url="https://www.scorebat.com/video-api/v3/feed/?token=[MjIxNzI0XzE3NTI1NjEyOTVfZTM2NzZkN2M4Yzc0MTVhM2ViNTAwNWIwZWZkZGEyZTM0ZWI4MzBjNA==]"

let a = fetch(url)
a.then((value)=>{
    return value.json()
}).then((matches)=>{
    let inhtml =""
    for(let i in matches){
        let l=1
        let temp =(matches[i])
        for(let j in temp){
           let temp2= (temp[j].videos)
        //    console.log(temp[j])
            for (let k in temp2) {
  const link_html = temp2[k].embed;
 
  const match = link_html.match(/src='([^']+)'/);
  let match2;
  if (match && match[1]) {
    match2 = (match[1]);
    
  }

                inhtml += `
        
        <div class="card" style="width: 18rem;">
  <img src="/projects/Football.jpg" class="card-img-top" alt="Football Match">
  <div class="card-body">
  <h6 class="card-text link">Match No. ${(l)}</h6>
    <h5 class="card-title text">${(temp[j].title)} </h5>
    <p class="card-text link"><a class="link" href="${temp[j].competitionUrl}" target="_blank" <h6>${temp[j].competition}</h6></a></p>
    <p class="card-text text">Matchday: ${temp[j].date}</p>
    <p class="card-text link">Check: <a class="link" href="${temp[j].matchviewUrl}" target="_blank">Scorecard</a></p>
    
    <a href="${match2}" class="btn btn-primary" target="_blank">LIVE / HIGHLIGHTS</a>
  </div>
</div>`
l++

let cardcontain = document.getElementById("card-container")
cardcontain.innerHTML = inhtml
}
}    
    }

})