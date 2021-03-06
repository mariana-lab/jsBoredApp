//every class starts with define, dependencies and a function
define(['services/activity-service','services/img-service', 'views/activity-list-view'], function (actService, imgService, listActView) {

    var internals = {};
    var externals = {};

    externals.start = function(){
        
       
        listActView.render();
        bindEvents();
    
    };

    function bindEvents(){
        listActView.bind('changeForms', formHandler);
        //listActView.bind('loadList', listHandler);
        //listActView.bind('buttonPush', buttonHandler);
        
        //imgService.getImages();

    }

    function buttonHandler(){
        //service info and the callback function to be called when done
        actService.findActivity( activityType, function(data) {
            listActView.renderActivity(data);
        });
    }

    function formHandler(activityType, participants, price){
        //service info and the callback function to be called when done
        
        actService.findActivity(activityType, participants, price, function(activityType,data) {
            imgService.getImage(activityType, data, function(data, image){
                listActView.renderActivity(data, image);
            });
        }, function(activityType, participants, price){
            listActView.renderError(activityType, participants, price);
        });
    }

    function listHandler(){
        //service info and the callback function to be called when done
       
       actService.findActivity( '', function(data) {
             var value = Math.floor(Math.random() * 10);
            //listActView.renderActivity(data, imgService.activityPictures[data][value]);
        });
    }

    return externals;
});
