$(document).ready(function() {


    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'realjt',
        clientId: '9797d07c675f4d84b674ed422dcbaf1b',
        resolution: 'standard_resolution',
        template: '<div class="col-sm-3"><a href="{{link}}"><img src="{{image}}" class="img-responsive"/></a></div>',
        // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                loadButton.setAttribute('disabled', 'disabled');
            }
        },
    });
    feed.run();

    // bind the load more button
    loadButton.addEventListener('click', function() {
        feed.next();
    });
});
