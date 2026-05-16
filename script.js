let apikey = "AIzaSyB33zjnYTton45BgJx4VTTYnoASFKC3564"
let idchannel = "UC7j2YvVEVc174XBQvm7Yvxg"

let url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${idchannel}&key=${apikey}`

fetch(url)
.then(res => res.json())
.then(data => {
    const stats = data.items[0].statistics
    console.log(stats)
    
    let Views = document.getElementById("views")
    let Inscritos = document.getElementById("inscritos")
    let Videos = document.getElementById("videos")

    Views.innerText = stats.viewCount
    Inscritos.innerText = stats.subscriberCount
    Videos.innerText = stats.videoCount
})