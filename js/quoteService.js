angular.module('quoteApp').service('quoteService', function ($window) {
    var quotes = [
        { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
        { text: ' the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
        { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
        { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
        { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
        { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
        { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
    ];

    this.options = ['text','author'];

    this.storeQuote = function (index, text) {
        $window.localStorage[index] = JSON.stringify(text);
    };
    this.getQuotes = function(){
        return quotes;
    };
    this.getQuote = function(index){
        return quotes[index];
    };

    this.addQuote = function(text, auth){
        var quote = {
            text: text,
            author: auth
        };
      quotes.push(quote);
    };

    this.removeQuote = function (index) {
        quotes.splice(index, 1);
    };

    // for (var i in $window.localStorage){
    //     if($window.localStorage.hasOwnProperty(i)) {
    //         quotes.push(JSON.parse($window.localStorage[i]));
    //     }
    // }
});