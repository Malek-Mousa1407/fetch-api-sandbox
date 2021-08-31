document.getElementById('getText').addEventListener('click', getText);
        document.getElementById('getUsers').addEventListener('click', getUsers);
        document.getElementById('getPosts').addEventListener('click', getPosts);
        document.getElementById('addPost').addEventListener('click', addPost);

        function getText() {
            fetch('sample.txt')
                .then(response => response.text())
                .then(data => document.getElementById('output').innerHTML = data)
                .catch(err => console.log(err));
        }

        function getUsers() {
            fetch('users.json')
                .then(response => response.json())
                .then(data => {
                    let output = '<h2>Users</h2>';
                    data.forEach(user => {
                        output += `
                        <ul class="list-group mb-3">
                            <li class="list-group-item">Id: ${user.id}</li>
                            <li class="list-group-item">Name: ${user.name}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                        </ul>    
                    `
                    });
                    document.getElementById('output').innerHTML = output;
                })
                .catch(err => console.log(err));
        }

        function getPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    let output = '<h2>Posts:</h2>';
                    data.forEach(post => {
                        output += `
                        <div>
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>    
                    `
                    });
                    document.getElementById('output').innerHTML = output;
                })
                .catch(err => console.log(err));
        }

        function addPost(e) {
            e.preventDefault();

            let title = document.getElementById('title').value;
            let body = document.getElementById('body').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    body: body
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }