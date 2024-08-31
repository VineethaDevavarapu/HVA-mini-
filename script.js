const apikey="284e94d5e8074d5bb8c99cd689e8da85";
const blogContainer=document.getElementById
("blog-container");

async function fetchRandomNews(){
    try{

const apiurl="https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}"
const response =await fetch(apiurl);
const data=await response.json();
return data.articles;
console.log(data);
    }catch(error){
              console.error("error fetching random news",error)
              return []
        }
    
}
function displayBlogs(articles)
{
    blogContainer.innerHTML=""
    articles.forEach((article)=>{
        const blogCard=document.createElement("div");
        blogCard.classList.add("blog-card");
        const img=document.createElement("img");
        img.src=article.urlToImage;
        img.alt=article.title;
        const title=document.createElement("h2");
        title.textContent=article.title;
        const description=document.createElement("p")
        description.textcontent=article.description;
        blogCard=appendChild(img);
        blogCard=appendChild(title);
        blogCard=appendChild(description);
        blogContainer.appendChild(blogCard);
    });
}
(async ()=>{
    try{
        const articles=await fetchRandomNews();
        displayBlogs(articles);
    }
        catch(error)
        {
            console.error("error fetching random news",error);
        }
    })();
