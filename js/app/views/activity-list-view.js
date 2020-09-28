define(function () {
    internals = {};
    externals = {};

    internals.elements = {};
    internals.handlers = {};

    internals.events = {
        changeForms: bindFormChangeHandler,
        magicButtonPush: bindButtonPushHandler,
        loadList: loadListHandler
    };

    externals.bind = function (event, handler) {
        internals.events[event](handler);
    };

    externals.render = function () {
        internals.elements.app = $('#app');
        internals.elements.app.append(renderForm());
        //internals.elements.app.append(renderButton());
        //internals.elements.app.append(renderCards());
    };

    

    function renderForm() {
        form =
            '<form id="ajax-form" >' +
            '<select id = "activities-sel">' +
            '<option value = "">ACTIVITY</option>' +
            '<option value = "diy">DIY</option>' +
            '<option value = "social">Social</option>' +
            '<option value = "charity">Charity</option>' +
            '<option value = "education">Educational</option>' +
            '<option value = "cooking">Cooking</option>' +
            '<option value = "relaxation">Relax</option>' +
            '<option value = "music">Music</option>' +
            '<option value = "busywork">Busy</option>' +
            '<option value = "recreational">Recreational</option>' +
            '</select>' +
            
            '<select id = "participants-sel">' +
            '<option value = "">PARTICIPANTS</option>' +
            '<option value = "1">1</option>' +
            '<option value = "2">2</option>' +
            '<option value = "3">3</option>' +
            '<option value = "4">4</option>' +
            '<option value = "5">5</option>' +
            '<option value = "6">6</option>' +
            '<option value = "7">7</option>' +
            '<option value = "8">8</option>' +
            '</select>' +

            '<select id = "price-sel">' +
            '<option value = "">PRICE</option>' +
            '<option value = "0">free</option>' +
            '<option value = "0.1">Very-low</option>' +
            '<option value = "0.2">Low</option>' +
            '<option value = "0.3">Medium-low</option>' +
            '<option value = "0.4">Medium</option>' +
            '<option value = "0.5">High</option>' +
            '<option value = "0.6">Very High</option>' +
            '</select>' +


            '</form>';

        return form;
    }

    function renderButton() {
        return '<button id="magic-button">button</button>';
    }

    function renderCards(data) {
        return '<div class="card"><p>' + data + '</p><di';
    }

    externals.renderText = function (data) {
        internals.elements.app.append('<p>' + data + '</p>');
    }

    externals.renderError = function (activityType, participants, price) {
        internals.elements.error.append();
    }

    externals.renderActivity = function (activity, src) {
        data =
            'Activity: ' + activity.activity +
            '<br> Participants: ' + activity.participants +
            '<br> Price: ' + activity.price +
            '<br> Type: ' + activity.type + 
            '<br><img src="'+src+'"/>';

        internals.elements.app.append('<p>' + data + '</p>');
    }

    

    function setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(function () {

            callback();

            if (++x === repetitions) {
                window.clearInterval(intervalID);
            }
        }, delay);
    }

    function bindButtonPushHandler(handler) {
        $('#magic-button').click(function (event) {
            handler()
        });
    };

    function bindFormChangeHandler(handler) {
        $('#ajax-form').on('change', function(event) {
            event.preventDefault();
            var activitiesVal = $('#activities-sel').find(':selected').val();
            var participantsVal = $('#participants-sel').find(':selected').val();
            var priceVal = $('#price-sel').find(':selected').val();
            console.log(activitiesVal,participantsVal,priceVal);
            handler(activitiesVal,participantsVal,priceVal);
            
        }); 
    };


    function loadListHandler(handler) {
            //setIntervalX(handler, 600, 10);
    }


    return externals;
});