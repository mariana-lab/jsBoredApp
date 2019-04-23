define(function () {
    internals = {};
    externals = {};

    internals.elements = {};
    internals.handlers = {};

    internals.events = {
        changeForms: bindFormSubmitHandler,
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

    function renderButton() {
        return '<button id="little-button">button</button>';
    }

    function renderForm() {
        form =
            '<form id="ajax-form" method="post">' +
            '<select id = "myList">' +
            '<option value = "diy">DIY</option>' +
            '<option value = "social">Social</option>' +
            '<option value = "charity">Charity</option>' +
            '<option value = "education">Educational</option>' +
            '<option value = "cooking">Cooking</option>' +
            '<option value = "relaxation">Relax</option>' +
            '<option value = "music">Music</option>' +
            '<option value = "busywork">Busy</option>' +
            '<option value = "recreational">Recreational</option>' +
            '<option value = "">Any</option>' +
            '</select>' +
            '<input type="submit" value="Submit"></input>' +
            '</form>';

        return form;

    }

    externals.renderText = function (data) {
        internals.elements.app.append('<p>' + data + '</p>');
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

    function renderCards(data) {
        return '<div class="card"><p>' + data + '</p><di';
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
        $('#little-button').click(function (event) {
            handler()
        });
    };

    function bindFormSubmitHandler(handler) {
        $('#ajax-form').on('change', function() {
            var selectedVal = $('#myList').find(':selected').val();
            console.log(selectedVal);
            
        }); 
        $('#ajax-form').submit(function (event) {
            event.preventDefault();
            var activityType = $('#myList').children("option:selected").val();

            /*var $inputs = $('#ajax-form :option');
            var values = {};
            $inputs.each(function() {
                values[this.name] = $(this).val();
            });
            console.log(values);*/
            handler(activityType);
        });
    };


    function loadListHandler(handler) {
            //setIntervalX(handler, 600, 10);
    }


    return externals;
});