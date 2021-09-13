//async function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//"async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains." MDN Web Docs
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function name, param, statement
async function newFormHandler(event) {
    event.preventDefault();

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector element = document.querySelector(selectors);

    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);