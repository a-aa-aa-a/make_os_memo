function generateTableOfContents()
{
    const toc =
        document.getElementById("toc-list");

    const headings =
        document.querySelectorAll(".content h2");

    headings.forEach((heading, index) =>
    {
        if (!heading.id)
        {
            heading.id = `section-${index}`;
        }

        const li =
            document.createElement("li");

        const a =
            document.createElement("a");

        a.href = "." + `#${heading.id}`;
        a.textContent = heading.textContent;

        li.appendChild(a);
        toc.appendChild(li);
    });
}