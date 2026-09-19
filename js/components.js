async function loadComponent(id, path)
{
    const response = await fetch(path);

    if (!response.ok)
    {
        throw new Error(path);
    }

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

async function initializeLayout()
{
    await Promise.all([
        loadComponent("header-container", "./components/header.html"),
        loadComponent("sidebar-container", "./components/sidebar.html")
    ]);

    initializeSidebar();
}

initializeLayout();
