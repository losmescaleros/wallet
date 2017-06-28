app.controller('WalletCtrl', function($scope) {

    $scope.firstName = 'Michael';

    $scope.price = '$26.99';
    $scope.currency = 'USD';

    $scope.selected = {
        name: 'CITIBANK FSB',
        type: 'bank',
        number: 'x-1234'
    };
});