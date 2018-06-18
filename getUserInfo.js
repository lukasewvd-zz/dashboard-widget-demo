getUserInfo();

function getUserInfo() {
    $.get("../../../api/me", function(data) {
        putUserData(data);
    }).fail(function() {
        console.log("ERROR: Was not able to fetch user data!");
    });
}

function putUserData(userInfo) {
    var userHtml = "";
    userHtml += "<p>Name: " + userInfo.displayName + "</p>";
    userHtml += "<p>Username: " + userInfo.userCredentials.username + "</p>";
    userHtml += "<p>Password last updated: " + userInfo.userCredentials.passwordLastUpdated + "</p>";

    var userContainer = document.getElementById("userInfo");
    userContainer.innerHTML = userHtml;
}