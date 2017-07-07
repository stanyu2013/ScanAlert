/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 
// On Windows, the alert function doesn't exist, so we add it.
    var appModule = angular.module("scanAlert",['onsen']);
    appModule.controller('appController',function($scope, $http){
        $http({
            method: 'GET',
            url: 'http://api.foodessentials.com/createsession?uid=demoUID_01&devid=demoDev_01&appid=demoApp_01&f=json&api_key=yp5dzqpncpbnc7y6z6vbkgk2'
        }).then(function(response){
            $scope.sessionId = response.session_id;
        }, function(error){
            console.log("failed to get the session id");
            $http({
                method: 'GET',
                url: 'http://api.foodessentials.com/createsession?uid=demoUID_01&devid=demoDev_01&appid=demoApp_01&f=json&api_key=yp5dzqpncpbnc7y6z6vbkgk2'
            }).then(function(response){
                $scope.sessionId = response.session_id;
            }, function(error){
                console.log("failed to get the session id");
                
            });
        });
        $scope.getByUPC = function(upc){
                $http({
                    method: 'GET',
                    url: 'http://api.foodessentials.com/label?u='+upc+'&sid='+$scope.sessionId+'&appid=demoApp_01&f=json&long=38.6300&lat=90.2000&api_key=yp5dzqpncpbnc7y6z6vbkgk2'
                }).then(function(response){
                    console.log(response);
                    myNavigator.pushPage("allergy-result.html",{animation:'none', result: response});
                },function(error){
                    console.log("Failed to get data by UPC: "+ error);
                });
            };
        $scope.scan= function(){
             console.log("about to scan");
                Scandit.License.setAppKey("E0kbjKgYeB+jURdnA51z9oo8Xw/0MvVYJRqH+crkPnA");
                var settings = new Scandit.ScanSettings();
                settings.setSymbologyEnabled(Scandit.Barcode.Symbology.EAN13, true);
                settings.setSymbologyEnabled(Scandit.Barcode.Symbology.UPC12, true);
                settings.setSymbologyEnabled(Scandit.Barcode.Symbology.EAN8, true);
                var picker = new Scandit.BarcodePicker(settings);
                picker.show(function(session){
                    console.log("Scanned " + session.newlyRecognizedCodes[0].symbology 
                        + " code: " + session.newlyRecognizedCodes[0].data);
                    $scope.getByUPC(session.newlyRecognizedCodes[0].data.substring(1));
                }, null, function(error){
                    console.log("Failed: " + error);
            });
                picker.startScanning();
        }
    });
 document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    databaseInit();
    if(!window.localStorage.getItem('hasRun')){
        window.localStorage.setItem('hasRun', 1);
        myNavigator.pushPage('user-registry.html',{animation: 'none'});
    }
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
