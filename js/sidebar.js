function initializeSidebar()
{
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (!menuBtn) return;

    menuBtn.addEventListener("click", () =>
    {
        sidebar.classList.toggle("show");
        overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () =>
    {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
    });
}
function createSidebar()
{
    const list =
        document.getElementById("abc");

    const currentPage =
        location.pathname.split("/").pop();

    chapters.forEach(chapter =>
    {
        const li =
            document.createElement("li");

        const a =
            document.createElement("a");
        if(location.pathname.includes("chapters")){
            a.href =  chapter.path;
        }else{
            a.href =  "chapters/"+ chapter.path;
        }
        
        a.textContent = chapter.title;

        if(chapter.path === currentPage)
        {
            li.classList.add("active");
        }

        li.appendChild(a);
        list.appendChild(li);
    });
}