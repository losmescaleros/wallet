var app = angular.module('app', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');
    $locationProvider.html5Mode(true);
    var states = [
        {name: 'wallet', component: 'wallet'},
        {name: 'wallet.list', url: '/list', component: 'list'},
        {name: 'wallet.add', url: '/add', component: 'add'},
        {name: 'wallet.manage', url: '/manage', component: 'manage'}
    ]
    states.forEach(function(state) {
        $stateProvider.state(state);
    })
});

app.component('wallet', {
    templateUrl: '/app/wallet/wallet.html',
    controller: 'WalletCtrl'
});

app.component('list', {
    templateUrl: '/app/wallet/list.html',
    controller: function($scope) {
        $scope.cards = [
            {
                name: 'CITIBANK FSB',
                type: 'bank',
                number: 'x-1234'
            },
            {
                name: 'MasterCard',
                number: 'x-4321'
            } 
        ];
        
    }
});

app.component('add', {
    templateUrl: '/app/wallet/add.html',
    controller: function($scope) {

    }
});

app.component('manage', {
    templateUrl: '/app/wallet/manage.html',
    controller: function($scope) {
        $scope.cards = [
            {
                name: 'CITIBANK FSB',
                type: 'bank',
                number: 'x-1234'
            },
            {
                name: 'MasterCard',
                number: 'x-4321'
            } 
        ];
    }
});