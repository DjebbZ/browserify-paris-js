define(function() {
    var x = 3;

    return {
        getX: function() {
            return x;
        },
        setX: function(nx) {
            x = nx;
        }
    }
});
