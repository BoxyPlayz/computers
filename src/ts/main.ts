import '../scss/styles.scss';
import 'bootstrap/js/dist/tab';

document.addEventListener("DOMContentLoaded", () => {
    const navTabs = document.querySelector('.nav-tabs');
    const tabs = document.querySelectorAll('.nav-tabs .nav-link');

    if (!navTabs) return;

    const indicator = document.createElement('div');
    indicator.classList.add('tab-indicator');
    navTabs.appendChild(indicator);

    function updateIndicator(el: Element) {
        const rect = el.getBoundingClientRect();
        const navRect = navTabs!.getBoundingClientRect();
        const indicatorWidth = rect.width * 0.5;
        const indicatorLeft = (rect.left - navRect.left) + (rect.width - indicatorWidth) / 2;

        indicator.style.width = `${indicatorWidth}px`;
        indicator.style.left = `${indicatorLeft}px`;
    }

    const activeTab = navTabs.querySelector('.nav-link.active');
    if (activeTab) updateIndicator(activeTab);

    tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', (e) => {
            const target = e.target as HTMLElement;
            updateIndicator(target);
        });
    });
});
