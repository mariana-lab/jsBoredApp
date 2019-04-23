//responsible for making ajax requests
define( function() {
    internals = {};
    externals = {};

    externals.getName = function(){
        return 'list service name';
    }

    //ajax request
    //manipulate response
    //id, name and pic of activity
    externals.findActivity= function(activityType, cb){
        activityType = (activityType !== '') ? 'type=' + activityType : '';
        
        $.ajax({
            url: 'https://www.boredapi.com/api/activity?'+ activityType,
            success: function(response){
                console.log(response);
                cb(response);
            },
            type: 'GET',
            dataType: 'JSON'
          });
    }


    return externals;
});