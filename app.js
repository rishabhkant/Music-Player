const songsData = [
    {   id: 1,
        name : "Stayin Alive",
        arist : "Bee Gees",
        img: 'https://www.dropbox.com/scl/fi/ckdo6xb2xgd8arp5s7rce/Stayin-Alive-Bee-Gees.png?rlkey=fs6laapifyktc4yxqovm3z780&st=29z9hn9c&dl=1' ,
        genre: 'Disco',
        source: 'https://www.dropbox.com/scl/fi/tsc9npi69nprqvw4awrmn/Stayin-Alive-Bee-Gees.mp3?rlkey=uj6tep4x5697wqztcscddn2dh&st=49nc70vg&dl=1',
    },
    {   id: 2,
        name : "Smooth Operator",
        arist : "Sade",
        img: 'https://www.dropbox.com/scl/fi/xp7fhjwxc96fq5olsgovh/Smooth-Operator.png?rlkey=x3duggzuahcsqhdd0oulu6vjm&st=jvwmhyla&dl=1' ,
        genre: 'Jazz',
        source: 'https://www.dropbox.com/scl/fi/7xps0t0hq8mfmdi7oy2ff/Smooth-Operator-Sade.mp3?rlkey=73fqz1z1ok4l7m3tjr527h8qk&st=fj5t6rgz&dl=1',
    },
    {   id: 3,
        name : "Rasputin",
        arist : "Boney M",
        img: 'https://www.dropbox.com/scl/fi/sax3a4fui2jx69cdl0s7s/Rasputin.png?rlkey=x96qzlwmumq3vemajrpxmb2r1&st=g35gst47&dl=1' ,
        genre: 'Disco',
        source: 'https://www.dropbox.com/scl/fi/dms4l9xbvxt3eoevme8w9/Rasputin-Boney-M.mp3?rlkey=t2syr0v9fs9k9wavdtyzyr1wz&st=i36cyk1i&dl=1',
    },
    {   id: 4,
        name : "Kill Shot",
        arist : "Magdalena Bay",
        img: 'https://www.dropbox.com/scl/fi/ribg2z9l9oqgkkobcbqnh/Killshot.png?rlkey=yots0gpn4sf4ttkj9nz6hpijw&st=noq0yzbd&dl=1' ,
        genre: 'Hip Hop',
        source: 'https://www.dropbox.com/scl/fi/x4i051f16m54bufbklcpi/Magdalena-Bay-Killshot-Magdalena-Bay.mp3?rlkey=f02hnm538i3f1inrjo4t37m2a&st=9mjq3de5&dl=1',
    },
    {   id: 5,
        name : "Funkytown",
        arist : "Bee",
        img: 'https://www.dropbox.com/scl/fi/cvt4ghbwtwoq3cssr00o0/FunkyTown.png?rlkey=c3duxeh2utk51jcmvbo8bxjhf&st=d4l8fv1r&dl=1' ,
        genre: 'Pop',
        source: 'https://www.dropbox.com/scl/fi/hau33iau7e0ijopwu3ecr/Funkytown-made-popular-by-Lipps-Inc.-vocal-version-Party-Tyme.mp3?rlkey=ezc5u9c1h1oupqurqlxhaz92e&st=11tc22im&dl=1',
    },
    {   id: 6,
        name : "La Isla Bonita",
        arist : "Madonna",
        img: 'https://www.dropbox.com/scl/fi/nvkpgnomg2k0i7qprx30n/La-Isla-Bonita.png?rlkey=ocp7syvqrg0zr251znu7b41z6&st=rltrvau8&dl=1' ,
        genre: 'Pop',
        source: 'https://www.dropbox.com/scl/fi/13zp69lca8j2x1c00345q/La-Isla-Bonita-Madonna.mp3?rlkey=88j0k2gb7iuze0tuhm865dac7&st=m5ihbx06&dl=1',
    }
]

const songLists = document.getElementById('songLists');
const imageEl = document.getElementById('image');
const songPlay = document.getElementById('songLink');
const genreList = document.getElementById('genre');
const singer = document.getElementById('singer');
const song = document.getElementById('song');

const audioBlock = document.getElementById('audioBlock');

const currentPlay = document.getElementById('currentPlaylist');
const currentPlaylistDiv = document.getElementById('currentPlaylistDiv');
const allPlay = document.getElementById('allPlaylist');

const playlistNameInput = document.getElementById('playlist');
const createPlaylists = document.getElementById('createPlaylist')

const buttons = document.getElementsByClassName('controlBtn');
const ctrlBtn = [...buttons];

const checkBox = document.getElementById('checkBox');
const toggleBtn = document.getElementById('toggleBtn');


const songSearch = document.getElementById('songSearch');
const songSearchBtn = document.getElementById('searchBtn');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const addBtn = document.getElementById('add');


const disc = document.getElementById('disc');

const cards = document.getElementsByClassName('card');
let allCards = [...cards];

let currentGenreSongs = [];



checkBox.addEventListener('click' , ()=>{
    toggleTheme();
    
})

function toggleTheme(){
    if(checkBox.checked){
        disc.classList.toggle('active');
        document.body.style.color = "white";

    }else{
        disc.classList.toggle('active');
        document.body.style.color = "black";

    }
}


let genres = [];
songsData.forEach((e)=>{
    genres.push(e.genre);
})

// console.log(genres);
const allGenres = [...new Set(genres)];
// console.log(allGenres);


function showGenres(){
    for(const i of allGenres){
        const genreOpt = document.createElement('option');
        genreOpt.value = i;
        genreOpt.textContent = i;
        genreList.appendChild(genreOpt);
    };
}
showGenres();


let currentSongId= 0;
let index = 0;


function showSongs(){
    currentGenreSongs = [];
    songsData.forEach((e)=>{
        const songList = document.createElement("div")
        songList.classList.add('songNames');
        songList.textContent =  e.name;
        songList.dataset.id = e.id;
        songLists.appendChild(songList);
        currentGenreSongs.push(e);
    })
}
showSongs();
// console.log(currentGenreSongs);



genreList.addEventListener('change', ()=>{
        songLists.textContent = '';
        currentGenreSongs = [];
        if(genreList.value === "all"){
            showSongs();
        }else{
        const genress = songsData.filter(e => e.genre === genreList.value);
        
        genress.forEach((e)=>{
            const songList = document.createElement("div")
            songList.classList.add('songNames');
            songList.textContent =  e.name;
            songList.dataset.id = e.id;
            songLists.appendChild(songList);
            currentGenreSongs.push(e);
        })
    }
    // console.log(currentGenreSongs);
})



songLists.addEventListener('click' , (event)=>{
        if(event.target.classList.contains('songNames')){
            const currId = event.target.dataset.id;
            currentSongId = currId;
            const currObj = songsData.find((e)=> e.id === Number(currId));
            renderCurrentSong(currObj);
        }
})

function renderCurrentSong(object){
        imageEl.textContent = '';
        singer.textContent = '';
        song.textContent = '';
        const tempImg = document.createElement('img');
        tempImg.src = object.img;
        imageEl.appendChild(tempImg);

        singer.textContent = object.arist;
        song.textContent = object.name;

        audioBlock.src = object.source;
        audioBlock.load();
        audioBlock.controls = true;
        audioBlock.play();
}

nextBtn.addEventListener('click', ()=>{
    index = songsData.findIndex(curr => curr.id == currentSongId);
    if(index < songsData.length-1){
        renderCurrentSong(songsData[index+1]);
        currentSongId = songsData[index+1].id;
    }
})

prevBtn.addEventListener('click', ()=>{
    index = songsData.findIndex(curr => curr.id == currentSongId);
    if(index <= songsData.length - 1){
        if(!index == 0){
            renderCurrentSong(songsData[index-1]);
            currentSongId = songsData[index-1].id;
        }else{
            return
        }
        
    }
})


imageEl.addEventListener('click', ()=>{
    if(audioBlock.paused){
        audioBlock.play();
    }else{
        audioBlock.pause();
    }
});



// let currentPlaylist = currentSongs;

currentPlay.addEventListener('click' , (event)=>{
        if(event.target.classList.contains('songNamesList')){
            const currId = event.target.dataset.id;
            currentSongId = currId;
            const currObj = songsData.find((e)=> e.id === Number(currId));
            renderCurrentSong(currObj);
        }
})

addBtn.addEventListener('click', ()=>{
    addToPlaylist();
})


let currentSongs = [];

function addToPlaylist(){
    const selectedSong = songsData.find(curr => curr.id == currentSongId);


    if(!currentSongs.find((e)=> e.name == selectedSong.name)){
        currentSongs.push(selectedSong);

        const songList = document.createElement("div");
        songList.classList.add('songNamesList');
        songList.textContent =  selectedSong.name;
        songList.dataset.id = selectedSong.id;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'x';
        songList.appendChild(deleteBtn);

        currentPlay.appendChild(songList);
    }
}


createPlaylists.addEventListener('click', ()=>{
    createPlaylist();
})

let allPlaylists = [];
let idNum = 0

function createPlaylist(){
    if(playlistNameInput.value){

        if(currentSongs.length == 0){
            alert('no songs added')
        }else{
            let playlistObj = {};
            playlistObj.name = playlistNameInput.value;
            playlistObj.songs = currentSongs;
            playlistObj.id = idNum;
            renderPlaylistSong(playlistObj);
            allPlaylists.push(playlistObj);
            idNum++;
        }

    }else{
        alert('Enter a playlist name first');
    }
}

function renderPlaylistSong(obj){
        const playlistName = document.createElement("div");
        playlistName.classList.add('songNamesList');
        playlistName.textContent = obj.name;
        playlistName.dataset.id = obj.id;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'x';
        playlistName.appendChild(deleteBtn);


        allPlay.appendChild(playlistName);
        currentPlay.textContent = '';
        playlistNameInput.value = '';
}


allPlay.addEventListener('click',(event)=>{
    if(event.target.classList.contains('songNamesList')){
        // const selectedSong = songsData.find(curr => curr.id == currentSongId);
        const id = event.target.dataset.id;
        const play = allPlaylists.find(e => e.id == Number(id));
        renderCurrentPlaylist(play);
    }
})


function renderCurrentPlaylist(obj){
    let object = obj.songs;
    currentPlay.textContent = '';
    object.forEach((e)=>{
        const songList = document.createElement("div");
        songList.classList.add('songNamesList');
        songList.textContent =  e.name;
        songList.dataset.id = e.id;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'x';
        songList.appendChild(deleteBtn);

        currentPlay.appendChild(songList);
    })
    
}


songSearchBtn.addEventListener('click', ()=>{
    searchSongRender();
})

songSearch.addEventListener('keypress' , (event)=>{
    if(event.key === "Enter"){
        searchSongRender();
    }
})

function searchSongRender(){
    if(songSearch.value){
        songLists.textContent = '';
        const query = songSearch.value.toLowerCase();
        let temp = songsData.find((e)=>e.name.toLowerCase().includes(query))

        console.log(temp);

        const songList = document.createElement("div")
        songList.classList.add('songNames');
        songList.textContent =  temp.name;
        songList.dataset.id = temp.id;
        songLists.appendChild(songList);
    }else{
        alert('Please enter a song name first');
    }
}


// const deleteBtn = document.getElementsByClassName('deleteBtn');
// deleteBtn.addEventListener('click',(event)=>{
//     if(event.target.classList.contains('songNamesList')){
//             currentSongs.find(e => e.id === event.dataset.id);
//         }
// })