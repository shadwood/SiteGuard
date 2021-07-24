function pageAlert(){
    alert('Переход на другую станицу')
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo){
    if (changeInfo.status === 'loading'){
        chrome.scripting.executeScript({
            target: {tabId : tabId},
            function : pageAlert,
            //files: ['alert.js'],
        })
    }
})