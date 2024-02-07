// Pass SCORM params to another server. Remember CORS rules:

var player = GetPlayer();
var scoreval = player.GetVar("varPostflight");

var lmsAPI = findLMSAPI(this);
var userid = lmsAPI.GetStudentID();

function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "../../../../../../[down to your base folder]...link to your script&uid="+userid+"&qid=CIVC-CF&sid=1&sval="+scoreval);
xhttp.setRequestHeader( 'Access-Control-Allow-Origin', '*');
xhttp.send();
