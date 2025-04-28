function saveContext() {
    const userData = {
        name: document.getElementById("name").value,
        lifeGoals: document.getElementById("lifeGoals").value,
        priorities: document.getElementById("priorities").value,
        futurePlans: document.getElementById("futurePlans").value,
        values: document.getElementById("values").value,
        timestamp: new Date().toISOString()
    };

    downloadFile(userData, "context_now_detailed.json");
}

function saveProxy() {
    const proxyData = {
        proxyName: document.getElementById("proxyName").value,
        focusArea: document.getElementById("proxyDimension").value,
        timestamp: new Date().toISOString()
    };

    downloadFile(proxyData, `proxy_${proxyData.proxyName.replace(/\s+/g, '_')}.json`);
}

function downloadFile(dataObj, filename) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataObj, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", filename);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
