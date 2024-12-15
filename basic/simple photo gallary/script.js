document.querySelector("#addImage").addEventListener("click", () => {
    // Create container for image and description
    let container = document.createElement("div");
    container.className = "container";
    
    // Create and set image
    let img = document.createElement('img');
    let imgPath = prompt("Enter the path of the image: ");
    img.src = imgPath;

    // Handle image error
    img.onerror = () => {
        alert("Image not found!");
        container.remove();
    };

    container.appendChild(img);

    // Create container for content
    let contentContainer = document.createElement("div");
    contentContainer.className = "description";
    
    // Add user-provided content
    let content = document.createTextNode(prompt("Enter description: "));
    contentContainer.appendChild(content);
    container.appendChild(contentContainer);

    // Insert container before the button
    document.body.insertBefore(container, document.querySelector("#addImage"));

    // Show content on image hover
    img.addEventListener("mouseover", () => {
        contentContainer.style.visibility = "visible";
    });

    // Hide content when not hovering over the image
    img.addEventListener("mouseout", () => {
        contentContainer.style.visibility = "hidden";
    });

    // Smooth transition for the container
    setTimeout(() => {
        container.style.opacity = 1;
    }, 0);

    // Create like and dislike buttons
    let likeDislikeContainer = document.createElement("div");
    likeDislikeContainer.className = "like-dislike";

    let likeButton = document.createElement("button");
    likeButton.innerText = "Like";
    likeDislikeContainer.appendChild(likeButton);

    let dislikeButton = document.createElement("button");
    dislikeButton.innerText = "Dislike";
    likeDislikeContainer.appendChild(dislikeButton);

    container.appendChild(likeDislikeContainer);

    // Add like and dislike button functionality
    likeButton.addEventListener("click", () => {
        likeButton.classList.add("liked");
        dislikeButton.classList.remove("disliked");
    });

    dislikeButton.addEventListener("click", () => {
        dislikeButton.classList.add("disliked");
        likeButton.classList.remove("liked");
    });
});
