window.addEventListener("load", () => {
    const mobile_nav = {
        open: document.querySelector('[data-nav-open-button]'),
        drawer: document.querySelector('[data-navigation-drawer]'),
        close: document.querySelector('[data-nav-close-button]'),
        sublink_btns: document.querySelectorAll('[data-sublink-btn]'),
        sublink_uls: document.querySelectorAll('[data-sublink-ul]'),
        openDrawer: () => {
            if(mobile_nav.drawer.classList.contains('closed')) {
                document.body.classList.add('no-scroll');
                document.body.classList.add('box-shadow');
                if(mobile_nav.drawer.classList.contains('hidden'))
                    mobile_nav.drawer.classList.toggle('hidden');
    
                setTimeout(() => {
                    mobile_nav.drawer.classList.remove('closed');
                    mobile_nav.drawer.classList.add('open');
                }, 1);
            }
        },
        closeDrawer: () => {
            if(mobile_nav.drawer.classList.contains('open')) {
                document.body.classList.remove('box-shadow');
                mobile_nav.drawer.classList.remove('open');
                mobile_nav.drawer.classList.add('closed');
                
                setTimeout(() => {
                    mobile_nav.drawer.classList.add('hidden');
                    document.body.classList.remove('no-scroll');
                }, 500);
            }
        },
        toggleSublinks: (event) => {
            event.preventDefault()
            const sublink_idx = event.target.getAttribute('data-sublink-id');
            mobile_nav.sublink_btns[sublink_idx].classList.toggle('shown');
            mobile_nav.sublink_uls[sublink_idx].classList.toggle('shown');
            mobile_nav.hideSublinks(parseInt(sublink_idx));
        },
        hideSublinks: (shownIDX) => {
            for(let i = 0; i < mobile_nav.sublink_btns.length; i++) {
                if(i != shownIDX || i === -1) {
                    mobile_nav.sublink_btns[i].classList.remove('shown');
                    mobile_nav.sublink_uls[i].classList.remove('shown');
                }
            }
        }
    };

    mobile_nav.open.addEventListener('click', mobile_nav.openDrawer);
    mobile_nav.open.addEventListener('focus', mobile_nav.openDrawer);
    mobile_nav.close.addEventListener('click', mobile_nav.closeDrawer);
    mobile_nav.sublink_btns.forEach(button => {
        button.addEventListener('mousedown', mobile_nav.toggleSublinks);
        button.addEventListener('focus', mobile_nav.toggleSublinks);
    })
    window.addEventListener('resize', mobile_nav.closeDrawer);
});
