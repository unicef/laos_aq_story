var config = {
  style: 'mapbox://styles/toolsforradicals/cl87zlbr7000014n241fwyue1',
  accessToken: 'pk.eyJ1IjoidG9vbHNmb3JyYWRpY2FscyIsImEiOiJjamdweWU5cXIxNGswMnJwbWRhaDFsbzh6In0.gFiZVOrpOhFaGkxQpzKjEQ',
  showMarkers: false,
  theme: 'dark',
  title: 'UNICEF PNG',
  subtitle: 'Frontier Data for Facility Location',
  byline: '',
  footer: '',
  use3dTerrain: false,
  rotateAnimation: true,
  chapters: [
    {
      id: 'intro',
      alignment: 'left',
      title: 'UNICEF Papua New Guinea  -  Frontier Data for Facility Location',
      description: '',
      
      location: {
        center: [145.232,-6.674],
        zoom: 7.5,
        pitch: 52.50,
        bearing: 18.00,
      },
      rotateAnimation: true,
      callback: 'disableFreetime',
      onChapterEnter: [{
          layer: 'satellite',
          opacity: 1.0,
          duration: 1
        },
        {
          layer: 'school-locations',
          opacity: 0.0,
          duration: 1,
        }
      ],
      onChapterExit: []
    },
    {
      id: 'baseline-overview',
      alignment: 'left',
      title: 'Background',
      description: '<li>Internet and mobile connectivity <b>Low</b></li><li>Physical access <b>challenging</b></li><li>Digital Literacy <b>low</b></li><li>WASH data is <b>sparse</b>',
      comment : 'With low levels of internet and mobile connectivity, and a predominantly rural population, field data collection in PNG is expensive, time consuming and difficult. <br> <br> Basic facility location data for WASH, Education and Health are sparse, incomplete and scattered in multiple <i>"data silos"</i>.<br>',
      location: {
        center: [145.232,-6.674],
        zoom: 9.5,
        pitch: 52.50,
        bearing: 36.00,
        speed: 0.1,
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
        {
          layer: 'school-locations',
          opacity: 1.0,
          duration: 15000,
          easing: 'easeInQuad',
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'savanakhet-focus',
      alignment: 'left',
      title: 'Challenges for WASH',
      image: '',
      description: '<li>We collect data with <b>mWater</b></li><li>mWater doesn\'t know where all the WASH facilities are</li><li>Neither do we</li>',
      comment: 'Collate data from different initiative/sections e.g. mWater, mSupply, Education sector initiatives Augment current data w frontier data fast, cheap, scalable, proven',
      location: {
        center: { lon: 147.20482, lat: -9.45778 },
      zoom: 11.35,
      pitch: 60.00,
      bearing: 9.60,
      speed: 0.5,
      },
      onChapterEnter: [
      ],
      onChapterExit: []
    },

    {
      id: 'savnakhet-focus-3',
      alignment: 'left',
      title: 'Frontier Data Technologies can help',
      image: '',
      description: "We can:<br><li>Validate and clean existing WASH facility location data</li><li>Identify unmapped WASH facilities with Open Data</li><li>Complete the picture with High Res Satellite + Machine Learning</li><li>Make reliable per-school population + catchment estimates using frontier data</li>",
      location: {
        center: { lon: 147.20482, lat: -9.45778 },
      zoom: 5.35,
      pitch: 60.00,
      bearing: 9.60,
      speed: 0.1,
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [
        {
          layer: 'satellite',
          opacity: 0.0,
          duration: 10000,
          easing: 'easeInOut',
        },
      ],
      onChapterExit: []
    },



    {
      id: 'savnakhet-focus-5',
      alignment: 'left',
      title: 'Our Approach',
      image: '',
      description: '<li>Compile existing open & closed datasets</li><li>Work with Government, expert validators and volunteers to clean and combine</li><li>Complete the picture with High Res Satellite + ML</li>',
      location: {
        center: [145.6504982,-6.5597483],
        zoom: 16,
        pitch: 0,
        bearing: 0,
        speed: 1.0
      },
      mapAnimation: 'flyTo',
      //callback: 'enableFreetime',
      onChapterEnter: [{
          layer: 'redbox',
          opacity: 0.7,
          duration: 11000,
          easing: 'easeInQuint',
        },
        {
          layer: 'greenbox',
          opacity: 0.7,
          duration: 14000,
          easing: 'easeInQuint',
        },
        {
          layer: 'satellite',
          opacity: 1.0,
          duration: 1000,
          easing: 'easeInOut',
        },
        
      ],
      onChapterExit: []
    },

    {
      id: 'approach-2',
      alignment: 'left',
      title: '',
      image: '',
      description: '<li>Estimate per-facility catchment and vulnerable population (children, youth, women of childbearing age)</li><li>Create a new, open, comprehensive dataset of WASH facilities, their location, population they serve</li><li>Get this data on to mWater</li>',
      location: {
        center: [145.232,-6.674],
        zoom: 9.5,
        pitch: 52.50,
        bearing: 18.00,
      },
      rotateAnimation: true,
      // callback: 'enableFreetime',
      onChapterEnter: [
        {
          layer: 'png-voronoi',
          opacity: 0.7,
          duration: 5000,
          easing: 'easeInQuant',
        },
      ],
      onChapterExit: []
    },
    {
      id: 'savnakhet-focus-4',
      alignment: 'left',
      title: 'Where we\'ll be',
      image: '',
      description: 'Comprehensive view of: <ul><li>Where WASH facilities are</li><li>Who they serve</li><li>Who is missing out</li><li>Where support is needed most</li></ul><br>A solid foundation for data-driven decision making and microplanning.<br>Self-sustaining and automated data updates.',
      location: {
        center: { lon: 147.20482, lat: -9.45778 },
      zoom: 7.35,
      pitch: 60.00,
      bearing: 9.60,
      speed: 0.3,
      },
      mapAnimation: 'flyTo',
      callback: 'enableFreetime',
      onChapterEnter: [
        {
          layer: 'satellite',
          opacity: 0.0,
          duration: 10000,
          easing: 'easeInOut',
        }
      ],
      onChapterExit: []
    },
    {
      id: 'outro',
      alignment: 'left',
      title: 'Let\'s talk',
      description: '',
      
      location: {
        center: { lon: 147.20482, lat: -9.45778 },
      zoom: 5.35,
      pitch: 60.00,
      bearing: 9.60,
      speed: 1,
      },
      rotateAnimation: true,
      callback: 'disableFreetime',
      onChapterEnter: [{
          layer: 'satellite',
          opacity: 1.0,
          duration: 1
        },
        {
          layer: 'png-voronoi',
          opacity: 0.0,
          duration: 1,
        }
      ],
      onChapterExit: []
    },

  ]
};
