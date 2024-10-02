function toggleProjects() {
    var blogList = document.getElementById("blog-list");
    if (blogList.classList.contains("hidden")) {
        blogList.classList.remove("hidden");
    } else {
        blogList.classList.add("hidden");
    }
}