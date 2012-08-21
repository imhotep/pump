var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        //app.report('deviceready');
        var networkState = navigator.network.connection.type;
        if(networkState == Connection.NONE)
            onlineFailure();
        else
            onlineSuccess();
    },
    onlineSuccess: function() {
        this.onlineWatcher = navigator.geolocation.watchPosition(this.geoSuccess, this.geoFailure, {});
    },
    onlineFailure: function() {
        console.log('This failed');
    },
    geoSuccess: function(position) {
        console.log('We have a location');
        //Decide whether to send or receive
    },
    geoFailure: function() {
        //Not sure what to do here
        console.log("We failed to get a location, we should do stuff");
    }
};
