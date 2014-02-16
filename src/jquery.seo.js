(function($) {
    $.fn.pageRank = function(cb) {
        $.ajax({
            url: 'http://api.camcimcumcem.com/page_rank/?url=' + encodeURIComponent($(this).text()) + '&output=js',
            dataType: 'jsonp',
            success: function(results) {
                cb(results.page_rank);
            }
        });
    };
    $.fn.alexaRank = function(cb) {
        $.ajax({
            url: 'http://api.camcimcumcem.com/alexa/rank/?domain=' + encodeURIComponent($(this).text()) + '&output=js',
            dataType: 'jsonp',
            success: function(results) {
                cb(results.rank);
            }
        });
    };
    $.fn.density = function(cb) {
        var text = $(this).text();
        var word_list = text.split(/\W+/);
        var counts = {};
        var word;
        for (var i = 0; i < word_list.length; ++i) {
            word = word_list[i];
            counts[word] = (counts[word] || 0) + 1;
        }
        var densities = {};
        for (word in counts) {
            densities[word] = counts[word] / word_list.length;
        }
        cb(densities[word]);
    };
    $.fn.wordCount = function(cb) {
        var text = $(this).text();
        var word_list = text.split(/\W+/);
        cb(word_list.length);
    };
    $.fn.h1Count = function(cb) {
        var word_list = $(this).find('h1');
        cb(word_list.length);
    };
    $.fn.h2Count = function(cb) {
        var word_list = $(this).find('h2');
        cb(word_list.length);
    };
    $.fn.h3Count = function(cb) {
        var word_list = $(this).find('h3');
        cb(word_list.length);
    };
    $.fn.h4Count = function(cb) {
        var word_list = $(this).find('h4');
        cb(word_list.length);
    };
    $.fn.h5Count = function(cb) {
        var word_list = $(this).find('h5');
        cb(word_list.length);
    };
    $.fn.h6Count = function(cb) {
        var word_list = $(this).find('h6');
        cb(word_list.length);
    };
    $.fn.linkCount = function(cb) {
        cb($('[href]').size());
    };
}(jQuery));
