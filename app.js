
const postsEl = document.querySelector('.container-1');
const searchEl = document.getElementById('search');
const filter = document.querySelectorAll('.btn');
const modal = document.getElementById('model');
const closeBtn = document.getElementById('close');

getPosts();

async function getPosts()
{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();

    displayPosts(posts);
} 

function displayPosts(posts)
{
    postsEl.innerHTML = '';
    posts.forEach(post =>
    {
        const postsE = document.createElement('div');
        postsE.classList.add('.container-1');
        postsE.innerHTML = `
    <div class="card">
        <div class="detail detail-1">
            <p class="title"><span>Title: </span> ${post.title}</p>
            <p class="body"><span>Body: </span> ${post.body}</p>
            <p class="user-name"><span>By: </span> ${post.name}</p>
        </div>
    </div>
    `;
        postsEl.addEventListener('click', () =>
        {
            modal.style.display = 'flex';
            showPostDetails(post);
        });
        postsEl.appendChild(postsE);
    });
}

function showPostDetails(post)
{
    modal.querySelector('.card-detail').innerHTML = `
                    <div class="detail-2">
                        <p class="title"><span>Title: </span> ${post.title}</p>
                        <p class="user-name"><span>By: </span> ${post.name}</p>
                    </div>
                    <div class="bodyof">
                        <p class="body"><span>Body: </span> ${post.body}</p>
                    </div>
                    <div class="comments-card">
                        <p class="comments"> <span>Comments: </span>It’s not just the specifications that are changing, either. Much has
                            been made of permutations to Google’s algorithms, which are beginning to favor better written, more
                            authoritative content (and making work for the growing contentstrategy industry). Google’s bots are now charged
                            with asking questions like, “Was the article edited well, or does it
                            appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of
                            the
                            topic?,” the sorts of questions one might expect to be posed by an earnest college professor. This increased
                            support for quality writing, allied with the book-like convenience and tactility of smartphones and
                            tablets, means there has never been a better time for reading online. The remaining task is to make the writing
                            itself a
                            joy to read.</p>
                    </div>`;
}

closeBtn.addEventListener('click', () =>
{
    modal.style.display = 'none';
})

searchEl.addEventListener('input', (e) =>
{
    const val = e.target.value;
    const postTitle = document.querySelectorAll('.title');
    postTitle.forEach(title =>
    {
        if (title.innerText.toUpperCase().includes(val.toUpperCase()))
        {
            title.parentElement.parentElement.style.display = 'block';
        } else
        {
            title.parentElement.parentElement.style.display = 'none';
        }
    })
})

filter.forEach(fil =>
{
    fil.addEventListener("click", () =>
    {
        const value = all.innerText
        const postFilter = document.querySelectorAll('.card');
        postFilter.forEach(all =>
        {
            if (all.innerText.includes(value))
            {
                all.parentElement.parentElement.style.display = 'block';
            } else
            {
                all.parentElement.parentElement.style.display = 'none';
            }
        })
    })
})
