angular.module('app').controller('MainCtrl', function($scope, mainSvc){
    // $scope.test = "testing 123";
    // $scope.test2 = mainSvc.test;

    $scope.saveNote = function(newNote) {
      // console.log(newNote);
      $scope.note = {};
      mainSvc.addNote(newNote);
      getNotes();
    };



    function getNotes() {
      mainSvc.getNotes().then(function(response){
        $scope.notes = response;
        console.log($scope.notes);
      });
    }

    getNotes();
});
