function saveIntake() {
    const userData = {
        name: document.getElementById("name").value,
        lifeGoals: document.getElementById("lifeGoals").value,
        priorities: document.getElementById("priorities").value,
        futurePlans: document.getElementById("futurePlans").value,
        timestamp: new Date().toISOString()
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "BaC_UserData/context_now_detailed.json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
