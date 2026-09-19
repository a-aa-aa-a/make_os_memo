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
        loadComponent("header-container", "/make_os_memo/components/header.html"),
        loadComponent("sidebar-container","/make_os_memo/components/sidebar.html")
    ]);

    initializeSidebar();
    createSidebar();

}

initializeLayout();
