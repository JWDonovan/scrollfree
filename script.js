const TIMEOUT = 2000;
const blockedSites = [
    'www.instagram.com'
];

function isBlockingOverflow() {
    if (document.documentElement.style.overflow === 'hidden' ||
        document.body.style.overflow === 'hidden' ||
        document.documentElement.style.overflowY === 'hidden' ||
        document.body.style.overflowY === 'hidden')
        return true;
    return false;
}

function unblockOverflow() {
    if (isBlockingOverflow()) {
        console.log('SrollFree: Unblocking Overflow');
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    }
}

function isBlockedSite() {
    if (blockedSites.indexOf(window.location.hostname) !== -1)
        return true;
    return false;
}

function init() {
    console.log('Hostname: ' + window.location.hostname);

    if (isBlockedSite()) {
        setInterval(unblockOverflow, TIMEOUT);
    }
}

init();