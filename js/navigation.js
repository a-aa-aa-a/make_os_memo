function initializeNavigation()
{
    const currentPage =
        location.pathname.split("/").pop();

    const currentIndex =
        chapters.findIndex(
            chapter => chapter.path === currentPage
        );

    if(currentIndex === -1)
    {
        return;
    }

    const prevBtn =
        document.getElementById("prev-btn");

    const nextBtn =
        document.getElementById("next-btn");

    // 前へ
    if(currentIndex > 0)
    {
        const prevChapter =
            chapters[currentIndex - 1];

        prevBtn.textContent =
            `← ${prevChapter.title}`;

        prevBtn.onclick = () =>
        {
            location.href = prevChapter.path;
        };
    }
    else
    {
        prevBtn.style.display = "none";
    }

    // 次へ
    if(currentIndex < chapters.length - 1)
    {
        const nextChapter =
            chapters[currentIndex + 1];

        nextBtn.textContent =
            `${nextChapter.title} →`;

        nextBtn.onclick = () =>
        {
            location.href = nextChapter.path;
        };
    }
    else
    {
        nextBtn.style.display = "none";
    }
}
``