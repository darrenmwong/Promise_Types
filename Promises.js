const redditApi = "https://www.reddit.com/r/dankmemes/top.json?limit=100";


const getRedditPostings = async (payload) => {
    return await fetch(payload);
};


getRedditPostings(redditApi).then((res) => {
    if(res.status !== 200) {
        console.log("wrong status code bro");
        return;
    }

    res.json().then((data) => {
        data.data.children.map(postArray => newImage(postArray));
    });
});


const imageContainerElement = document.getElementById('images');
const newImage = (data) => {
    const wrapper = document.createElement('li');
    const title = document.createElement('h3');
    const img = new Image();
    img.src = data.data.thumbnail;

    title.append(data.data.title); // puts data of post into h3 element
    wrapper.append(title); // h3 element into the created li tag
    wrapper.append(img);
    imageContainerElement.append(wrapper); // puts li tag into image UL tag
}