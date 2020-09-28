define( function() {
    internals = {};
    externals = {};

    internals.activities = ['social','charity','education','recreational','cooking','relaxation','music','busywork','diy'];

    externals.activityPictures = {};
    

    //populates the activityPicture object with activity url array attributes
    externals.getImage = function (activityType, data, cb){
        activities = ['social','charity','education','recreational','cooking','relaxation','music','busywork','diy'];
        activityType = activityType || activities[Math.floor(Math.random() * activities.length)];
        console.log(data);
        
        $.ajax({
            url: 'https://api.unsplash.com/search/photos/?query=' + activityType,
            success: function(response){
            
                image = response.results[(Math.floor(Math.random() * 10))].urls.small;
                cb(data,image);
                    
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