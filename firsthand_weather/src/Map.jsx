/*

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function Map() {
    const mapContainer = useRef(null);
  
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // Replace style
        center: [initialLongitude, initialLatitude], // Initial map center
        zoom: 11 // Initial zoom level
      });
  
      // Add markers or other map features here
    }, []);
  
    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
  }

  //Grabs user location
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      // Use latitude and longitude to center the map and fetch attractions
    },
    (error) => {
      console.error(error);
      // Handle location error, e.g., show a default location
    }
  );

  //Mapbox
  //https://www.youtube.com/watch?v=Ldw3mFGyjDE
  //https://www.youtube.com/watch?v=qWGkpN1GCwc

  //Google Maps
  //find a way to draw a basic map first with a search bar using google maps
  //https://www.youtube.com/watch?v=ZscHG5xY_r4     <<<Here


  //Tourism datasets
  //https://data.world/datasets/tourism

  //Weather
  //https://open-meteo.com/

  */