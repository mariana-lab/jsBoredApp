//responsible for making ajax requests
define(function () {
    internals = {};
    externals = {};

    externals.getName = function () {
        return 'list service name';
    }

    //ajax request
    //manipulate response
    //id, name and pic of activity
    externals.findActivity = function (activityType, participants, price, cb, cberror) {
        internals.url = 'https://www.boredapi.com/api/activity?';
        internals.url += (activityType) ? '&type=' + activityType : '';
        internals.url += (participants) ? '&participants=' + participants : '';
        internals.url += (price) ? '&price=' + price : '';

        $.ajax({
            url: internals.url,
            success: function (response) {
                //console.log(internals.url);
                //console.log(response);

                cb(activityType,response);
            },
            error:cberror.bind(this, activityType,participants,price),
            type: 'GET',
            dataType: 'JSON'
        });
    }


    return externals;
});