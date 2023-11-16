var tempGauge = createVerGauge('temp', -85, 60, ' °C').setVal(0);
var humGauge = createRadGauge('hum', 0, 100, '%').setVal(0);

function refresh() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == XMLHttpRequest.DONE) {
              if (xmlHttp.status == 200)
            {
                var data = JSON.parse(xmlHttp.responseText);

                tempGauge.setVal(data.temp);
                humGauge.setVal(data.hum);
            } else {
                console.log('Refresh failed: ' + xmlHttp.status);
            }
        }
    }

    xmlHttp.open("GET", "data", true);
    xmlHttp.send();
}

document.getElementById('refresh').addEventListener('click', refresh);
refresh();