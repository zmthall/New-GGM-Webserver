window.addEventListener("load", () => {
    const mobile_nav = {
        open: document.querySelector('[data-nav-open-button]'),
        drawer: document.querySelector('[data-navigation-drawer]'),
        close: document.querySelector('[data-nav-close-button]'),
        openDrawer: () => {
            document.body.classList.add('no-scroll');
            document.body.classList.add('box-shadow');
            if(mobile_nav.drawer.classList.contains('hidden'))
                mobile_nav.drawer.classList.toggle('hidden');

            setTimeout(() => {
                mobile_nav.drawer.classList.remove('closed');
                mobile_nav.drawer.classList.add('open');
            }, 1);
        },
        closeDrawer: () => {
            document.body.classList.remove('box-shadow');
            mobile_nav.drawer.classList.remove('open');
            mobile_nav.drawer.classList.add('closed');
            
            setTimeout(() => {
                mobile_nav.drawer.classList.add('hidden');
                document.body.classList.remove('no-scroll');
            }, 500);
        }
    };

    mobile_nav.open.addEventListener('click', mobile_nav.openDrawer);
    mobile_nav.open.addEventListener('focus', mobile_nav.openDrawer);
    mobile_nav.close.addEventListener('click', mobile_nav.closeDrawer);
});
