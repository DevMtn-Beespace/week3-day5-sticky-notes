angular.module('app').service('mainSvc', function($http, $q){
  // this.test = "test me";

  this.addNote = function(note) {
    // console.log(note);
    var existingEntries = JSON.parse(localStorage.getItem('notes')); // to get this as an array, not a string
    // console.log(existingEntries);
    if (!existingEntries) {
      existingEntries = [];
    }
    existingEntries.push(note);
    localStorage.setItem('notes', JSON.stringify(existingEntries));
  };

  this.getNotes = function(){
    var deferred = $q.defer();
    deferred.resolve(JSON.parse(localStorage.getItem('notes')));
    // console.log(deferred);
    return deferred.promise;
  };

  });
