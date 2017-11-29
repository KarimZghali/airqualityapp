import {describe,before,after,it} from "mocha";
import {assert,expect} from "chai";
import sinon from "sinon";
import {window} from "./../../window";
import {MapController} from "./../../../src/Controller/Map/MapController";
import { Component } from "./../../../src/component/Component";


describe("map", function () {

    let mapFactory;
    
    

    //s'execute avant les tests
    before(function () {

        mapFactory = function () {
            return new MapController;
        };

    });
    
    

    
    describe("Implementation", function () {

        it("MapController is a class", function () {

            
            console.log(mapFactory() instanceof Component);
      
            
            assert(
            mapFactory() instanceof Component
            );

        });


    });
    
        describe("Method", function () {

        it("Render exist", function () {

            
            console.log(typeof mapFactory().render);
      
            
            assert.equal(
            typeof mapFactory().render, "function"
            );

        });


    });
    
        describe("Method", function () {

        it("replaceGoogleMarker exist", function () {

            assert.equal(
            typeof mapFactory().replaceGoogleMarker, "function"
            );

        });


    });
    
    
/*        describe("Interface", function () {

        it("MapController is a conctructor", function () {

            assert.equal(
            mapFactory().constructor.name,
            "Map"
            );

        });


    });*/

});


