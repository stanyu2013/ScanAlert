var db;
var createTable = "CREATE TABLE IF NOT EXISTS allergies ("+
				"allergy TEXT NOT NULL, " +
				"id INTEGER PRIMARY KEY AUTOINCREMENT)";
function databaseInit(){
	db = window.sqlitePlugin.openDatabase({name: 'ScanAlert.db', iosDatabaseLocation: 'default'});
    db.transaction(function(tx) {

        tx.executeSql(createTable, [], null, function (error) {
            console.log("Create table error" + error.message);
        });

    });
}

function insertAllergy(x){
	
	db.executeSql("INSERT INTO allergies (allergy) VALUES (?)",[x], function(success){
		console.log("allergy inserted: " + x);
	}, function(error){
		console.log("error inserting " + x);
		console.log(error);
	});

}
function getAllergies(callback){
	db.executeSql("SELECT allergy FROM allergies",[],callback, function(error){
		console.log("error quering db");
		console.log(error);
	})
}