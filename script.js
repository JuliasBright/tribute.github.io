angular.module('app', ['ngMaterial']);

angular.module('app').controller("mainCtrl", mainCtrl);

angular.module('app').config(config);

function mainCtrl($mdSidenav){
  var vm = this;
  
  vm.openLeftMenu = openLeftMenu;
  vm.menuOpened = false;
  vm.historyTiles = [
    {
      year: 1995,
      title: "A legend is born.",
      image: "https://d3v93rzqvnwm3k.cloudfront.net/photos/images/c4f43cf93452db224a18cb51d027f22c_three_column.jpg"
    },
    {
      year: 2003,
      title: "Attends Umbwe High School.",
      image: "https://d3v93rzqvnwm3k.cloudfront.net/photos/images/f697fcc06aec128ad08a41bc0fedf325_three_column.jpg"
    },
    {
      year: 2007,
      title: "Enrolls at Tanzania Service  University [TPSC].",
      image: "https://harvardgazette.files.wordpress.com/2013/09/090913_gates_archives_019_605.jpg"
    },
    {
      year: 2010,
      title: "Enrolls at Nelson Mandela University [TPSC].",
      image:"https://d3v93rzqvnwm3k.cloudfront.net/photos/images/4a8aa7ff781018b94613c59a6def695c_three_column.jpg"
    },
 
    {
      year: 2012,
      title: "Enrolls at Carlifonia State  University [TPSC].",
      image: "https://d3v93rzqvnwm3k.cloudfront.net/photos/images/1ad4b83971a6cc72d507d50740a87771_three_column.jpg"
    },
    {
      year: 2016,
      title: "Received 5 Certificate from Solo learn.",
      image:"https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAKdAAAAJDNjNzZjYmU5LTgwMjAtNDFjZi1hZDU3LTNjYzk5ZTRmNmJiYQ.jpg"
    },

  ];
  
  // Sidenav
  function openLeftMenu() {
    $mdSidenav('left').toggle();
    // vm.menuOpened = !vm.menuOpened;
  }
}
mainCtrl.$inject = ["$mdSidenav"];

function config($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '100',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': 'A100'
    });
}

config.$inject = ["$mdThemingProvider"];