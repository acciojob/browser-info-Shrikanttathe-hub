//your JS code here. If required.
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName = navigator.appName;
    let version = '' + parseFloat(navigator.appVersion);
    let nameOffset, verOffset, ix;

    // Detect Opera
    if ((verOffset = userAgent.indexOf("Opera")) !== -1) {
        browserName = "Opera";
        version = userAgent.substring(verOffset + 6);
        if ((verOffset = userAgent.indexOf("Version")) !== -1) {
            version = userAgent.substring(verOffset + 8);
        }
    }
    // Detect Edge
    else if ((verOffset = userAgent.indexOf("Edg")) !== -1) {
        browserName = "Microsoft Edge";
        version = userAgent.substring(verOffset + 4);
    }
    // Detect Chrome
    else if ((verOffset = userAgent.indexOf("Chrome")) !== -1) {
        browserName = "Chrome";
        version = userAgent.substring(verOffset + 7);
    }
    // Detect Safari
    else if ((verOffset = userAgent.indexOf("Safari")) !== -1) {
        browserName = "Safari";
        version = userAgent.substring(verOffset + 7);
        if ((verOffset = userAgent.indexOf("Version")) !== -1) {
            version = userAgent.substring(verOffset + 8);
        }
    }
    // Detect Firefox
    else if ((verOffset = userAgent.indexOf("Firefox")) !== -1) {
        browserName = "Firefox";
        version = userAgent.substring(verOffset + 8);
    }
    // Detect MSIE and Trident (IE11)
    else if ((verOffset = userAgent.indexOf("MSIE")) !== -1) {
        browserName = "Microsoft Internet Explorer";
        version = userAgent.substring(verOffset + 5);
    } else if (userAgent.indexOf("Trident/") !== -1) {
        browserName = "Microsoft Internet Explorer";
        verOffset = userAgent.indexOf("rv:");
        version = userAgent.substring(verOffset + 3);
    }
    // Other browsers
    else if ((nameOffset = userAgent.lastIndexOf(' ') + 1) < (verOffset = userAgent.lastIndexOf('/'))) {
        browserName = userAgent.substring(nameOffset, verOffset);
        version = userAgent.substring(verOffset + 1);
        if (browserName.toLowerCase() === browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }

    // Trim the version string
    if ((ix = version.indexOf(";")) !== -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(" ")) !== -1) version = version.substring(0, ix);

    return {
        name: browserName,
        version: version
    };
}

function displayBrowserInfo() {
    const browserInfo = getBrowserInfo();
    const browserInfoDiv = document.getElementById('browser-info');
    browserInfoDiv.textContent = `You are using ${browserInfo.name} version ${browserInfo.version}`;
}

displayBrowserInfo();
