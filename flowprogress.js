let width = 0;
let interval;
let paused = false;

function startFlowProgress() {
    if (paused) {
        return;
    }
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const progressContainer = document.getElementById("progressContainer");
    const completionMessage = document.getElementById("completionMessage");

    completionMessage.style.opacity = 0; // 隐藏完成提示
    width = 0;

    interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            progressBar.style.borderRadius = "15px";
            progressBar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
            
            // 显示完成提示
            completionMessage.innerText = "Load Complete!";
            completionMessage.style.opacity = 1;
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressText.innerText = width + '%';
            progressContainer.setAttribute('aria-valuenow', width);
        }
    }, 100);
}

function pauseFlowProgress() {
    clearInterval(interval);
    paused = true;
}

function resumeFlowProgress() {
    if (paused) {
        paused = false;
        const progressBar = document.getElementById("progressBar");
        const progressText = document.getElementById("progressText");
        const progressContainer = document.getElementById("progressContainer");

        interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                progressBar.style.borderRadius = "15px";
                progressBar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
                
                // 显示完成提示
                const completionMessage = document.getElementById("completionMessage");
                completionMessage.innerText = "Load Complete!";
                completionMessage.style.opacity = 1;
            } else {
                width++;
                progressBar.style.width = width + '%';
                progressText.innerText = width + '%';
                progressContainer.setAttribute('aria-valuenow', width);
            }
        }, 100);
    }
}
