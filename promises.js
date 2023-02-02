const posts = [
    { title:'Post one', body:'This is post one', createdAt: new Date().getTime() },
    { title:'Post two', body:'This is post two', createdAt : new Date().getTime()}
];

let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title} - last updated ${(new Date().getTime()- posts[i].createdAt) / 1000} seconds ago </li>`;
        }
        
        document.body.innerHTML = output;
   
    },1000)
}

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.push({...post, createdAt: new Date().getTime() });

            const error = false;

            if(!error) {
                resolve();
            }else {
                reject('Error:Something went wrong');
            }
        },2000);
    });
}

const user={
    username :'iry',
    lastactivitytime : '1 feb'
}

function updatelastactivitytime (user) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime)

        })
            
        
    })
}

function userupdatesapost() {
    Promise.all([createPost,updatelastactivitytime])
    .then(([createPostresolves,updatelastactivitytimeresolves]) => {
        console.log(updatelastactivitytimeresolves)

    })
    .catch(err => console.log(err))
}

function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(posts.values!==0){
                resolve(posts.pop());
            }
            else {
                reject('Array is empty now');
            }
        },5000);
    })
}

const newfunction = () => {
    getPosts();
    deletePost();

}

createPost({title: 'Post 3',body: "This is post 3",createdAt: new Date().getTime() }).then(() =>{
    getPosts();
    deletePost().then(() => {
        getPosts()
    })
})
getPosts();
    deletePost().then(() => {
        getPosts()
    })
    getPosts();
    deletePost().then(() => {
        getPosts()
    })
    