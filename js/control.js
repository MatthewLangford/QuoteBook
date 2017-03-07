angular.module('quoteApp').controller('quoteController', function ($scope, quoteService) {
    $scope.getQuotes = quoteService.getQuotes;
    $scope.currentQuotes = $scope.getQuotes();

    $scope.options = quoteService.options;

    $scope.getQuote = quoteService.getQuote;

    $scope.addQuote =  quoteService.addQuote;

    $scope.removeQuote = quoteService.removeQuote;

    $scope.sortProp = '';

    $scope.save = quoteService.storeQuote;

    $scope.save();

    $scope.loadLocal = quoteService.getLocalQuote;


});