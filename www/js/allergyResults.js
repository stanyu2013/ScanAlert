angular.module("scanAlert").factory("resultsFactory", function($q){
	var resultsFactory = {};
	var results = myNavigator.getCurrentPage().options.result.data;

	//var allergies;
	
	console.log(results);
	resultsFactory.populate = function(){
		var deferred = $q.defer();
		var results = myNavigator.getCurrentPage().options.result.data;
		//delete allergies;
		//console.log(allergies);
		var allergies = {
			productName: results.product_name,
			allergy:[],
			isSafe: "SAFE!!!",
			mood: "happy"
		};
		console.log(allergies);
		getAllergies(function(results){
			console.log("inside get Allergies");
			console.log(results);
			for(var i = 0; i < results.rows.length;i++){
				var allergyName = results.rows.item(i).allergy;
				console.log(allergyName);
				allergies.allergy.push({name:allergyName, ingridients:""});
				console.log("about to switch");
				switch(allergyName){
					case "Cereals":
						getIngridients(0, i);
						break;
					case "Shellfish":
						getIngridients(1, i);
						break;
					case "Egg":
						getIngridients(2, i);
						break;
					case "Fish":
						getIngridients(3, i);
						break;
					case "Milk":
						getIngridients(4, i);
						break;
					case "Peanuts":
						getIngridients(5, i);
						break;
					case "Sulfites":
						getIngridients(6, i);
						break;
					case "Tree Nuts":
						getIngridients(7, i);
						break;
					case "Soybean":
						getIngridients(8, i);
						break;
					case "Sesame Seeds":
						getIngridients(9, i);
						break;
					case "Gluten":
						getIngridients(10, i);
						break;
					case "Lactose":
						getIngridients(11, i);
						break;
					case "Corn":
						getIngridients(12, i);
						break;
					case "Wheat":
						getIngridients(13, i);
						break;
					case "Coconut":
						getIngridients(14, i);
						break;
				}
			}
			console.log(allergies);
			function getPhoneGapPath() { var path = window.location.pathname; var sizefilename = path.length - (path.lastIndexOf("/")+1); path = path.substr( path, path.length - sizefilename ); return path; }
			console.log(allergies.mod);
			if(allergies.mood=="happy"){
				playAudio(getPhoneGapPath() + 'res/happy.mp3');
			}else{
				console.log("sadSong");
				playAudio(getPhoneGapPath() + 'res/sad.mp3');
			}
			deferred.resolve(allergies);
		});
		
		
		return deferred.promise;

		function getIngridients(j, i){
			console.log("inside getIngridients");
			var ingri = "";
			if(results.allergens[j].allergen_value != 0){
				allergies.isSafe = "DANGER!!!";
				allergies.mood = "sad";
				
				if(results.allergens[j].allergen_red_ingredients !=""){
					ingri += results.allergens[j].allergen_red_ingredients;
					if(results.allergens[j].allergen_yellow_ingredients !=""){
					ingri +=", " + results.allergens[j].allergen_yellow_ingredients;
					}
				}else if(results.allergens[j].allergen_yellow_ingredients !=""){
					ingri +=results.allergens[j].allergen_yellow_ingredients;
				}
				console.log(ingri);
				console.log(i);
			}else{
				ingri +="Safe";
			}
			allergies.allergy[i].ingridients = ingri;
		}
	};
	return resultsFactory
})

	
	
.controller("resultsController",function($scope, resultsFactory){
	console.log("inside controller");
	resultsFactory.populate().then(function(deferredResult){
		$scope.allergies = deferredResult;
		console.log(deferredResult);
		
	})
	


});


 /*function getPhoneGapPath() { var path = window.location.pathname; var sizefilename = path.length - (path.lastIndexOf("/")+1); path = path.substr( path, path.length - sizefilename ); return path; }


        // device APIs are available
        //
       
        playAudio(getPhoneGapPath() + allergies.mood+'.mp3');
        

        // Audio player*/
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            // Create Media object from src
            my_media = new Media(src, onSuccess, onError);

            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                //setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            //setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        //
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        //
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }