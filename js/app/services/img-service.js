define( function() {
    internals = {};
    externals = {};

    internals.activities = ['social','charity','education','recreational','cooking','relaxation','music','busywork','diy'];

    externals.activityPictures = {};
    

    //populates the activityPicture object with activity url array attributes
    function findPictures(activityType){
        $.ajax({
            url: 'https://api.unsplash.com/search/photos/?query=' + activityType,
            success: function(response){
                response.results.forEach(element => {
                    externals.activityPictures[activityType].push(element.urls.small);
                    
                    console.log(element);
                    
                });
            },
            beforeSend: authenticate,
            type: 'GET',
            dataType: ''
          });
    }

    function authenticate(xhr) {
        xhr.setRequestHeader("Authorization", "Client-ID 55eb48c808740edce38f03c079c1dfeec76e1fb2d70f7b1ceebfe94b11b84741" );
    }

    //let's controller ask for urls
    externals.getImages = function () {
        internals.activities.forEach(element => {
            externals.activityPictures[element]=[];
            ///findPictures(element); 
        });
        console.log(externals.activityPictures);
    }
    return externals;
});