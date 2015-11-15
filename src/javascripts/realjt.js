$(document).ready(function() {


    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'realjt',
        clientId: '9797d07c675f4d84b674ed422dcbaf1b',
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        template: '<div id="image__{{id}}" class="instafeed__image"><a href="{{image}}" class="fancybox" rel="realjt" title="{{caption}} - {{model.location.name}} <strong>Posted by: @{{model.user.username}}</strong>"><img src="{{image}}" class="img-responsive"/></a></div>',
        // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                loadButton.setAttribute('disabled', 'disabled');
            }

            $('#image__1075448899598557870_30177567, #image__1051056813680108376_30177567, #image__1031425313021921611_432585289, #image__1022762952161717498_1342295474, #image__1021150399159608276_30177567, #image__1000206508841420344_179125432, #image__911546067070791965_477537603, #image__861267179546617462_10956288, #image__839412798955463591_30177567, #image__783428174189506503_1423336610, #image__779119154264810277_30177567, #image__773441336927330410_30177567, #image__764723802749134237_439972424, #image__757241771922366489_824795327, #image__711037486421435657_621172232, #image__710380190222001105_30177567, #image__420550748733792164_183384950, #image__398365433281609265_36320734').remove();
        }
    });
    feed.run();

    // bind the load more button
    loadButton.addEventListener('click', function() {
        feed.next();
    });

    $('.fancybox').fancybox({
        helpers : {
            title: {
                type: 'inside'
            }
        }
    });

});
