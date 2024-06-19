document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const postContent = document.getElementById('postContent').value;
    const postMedia = document.getElementById('postMedia').files[0];
    
    const postElement = document.createElement('div');
    postElement.className = 'post';
    
    const contentElement = document.createElement('p');
    contentElement.textContent = postContent;
    postElement.appendChild(contentElement);
    
    if (postMedia) {
        const mediaElement = document.createElement('img');
        mediaElement.src = URL.createObjectURL(postMedia);
        mediaElement.style.maxWidth = '100%';
        postElement.appendChild(mediaElement);
    }
    
    const actionsElement = document.createElement('div');
    actionsElement.className = 'actions';
    
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function() {
        likeButton.textContent = 'Liked';
    });
    actionsElement.appendChild(likeButton);
    
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', function() {
        const comment = prompt('Enter your comment:');
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        postElement.appendChild(commentElement);
    });
    actionsElement.appendChild(commentButton);
    
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share';
    actionsElement.appendChild(shareButton);
    
    postElement.appendChild(actionsElement);
    
    document.getElementById('postsContainer').appendChild(postElement);
    
    document.getElementById('postForm').reset();
});
