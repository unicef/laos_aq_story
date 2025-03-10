var config = {
  style: 'mapbox://styles/toolsforradicals/clwombqxd010301rda0hd8hd5',
  accessToken: 'pk.eyJ1IjoidG9vbHNmb3JyYWRpY2FscyIsImEiOiJjamdweWU5cXIxNGswMnJwbWRhaDFsbzh6In0.gFiZVOrpOhFaGkxQpzKjEQ',
  showMarkers: false,
  theme: 'light',
  title: 'UNICEF Laos',
  subtitle: 'Frontier Data for Facility Location',
  byline: '',
  footer: '',
  use3dTerrain: false,
  rotateAnimation: true,
  chapters: [
    {
      id: 'intro',
      alignment: 'left',
      title: 'Arm - AI for Social Good -  Frontier Data for Air Quality in Laos',
      description: '',
      
      location: {
        center: [102.495496, 19.85627], // Longitude and Latitude for Laos
        zoom: 7, // This zoom level should give a good view of the entire country
        pitch: 45, // This pitch level should provide a nice perspective
        bearing: 18.00, // Keeping the original bearing value
    },
      rotateAnimation: true,
      callback: 'disableFreetime',
      onChapterEnter: [{
          layer: 'all_schools',
          opacity: 1.0,
          duration: 1000
        },
      ],
      onChapterExit: [
            ]
    },
    {
      id: "assumptions",
      alignment: "left",
      title: "Assumptions",
      description: '<ul><li>150 sensors are available for deployment.</li><li>$500 per site budget</li></ul>',
      comment: "none",
      location: {
        center: [102.495496, 19.85627], 
        zoom: 10.7,
        pitch: 52.5,
        bearing: 36,
        speed: 0.1
      },
      mapAnimation: "flyTo",
      onChapterEnter: [        
        {
        layer: 'all_schools',
        opacity: 1.0,
        duration: 1,
      },
      {
        layer: 'electrified_schools',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'ookla_speeds',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'secondary_preferred',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'enrolment_total',
        opacity: 0.0,
        duration: 1,
      }],
      onChapterExit: []
    },
    {
      id: "constraints",
      alignment: "right",
      title: "Constraints",
      description: '<ul><li>One sensor in every district.</li><li>Sensors cannot be deployed to schools without electricity.</li><li>Prefer secondary schools for deployment.</li><li>Where there are multiple candidates, prefer larger schools?</li></ul>',
      comment: "none",
      location: {
        center: [102.495496, 19.85627], // Approximate center point of Laos
        zoom: 9.5,
        pitch: 52.5,
        bearing: 36,
        speed: 0.1
      },
      mapAnimation: "flyTo",
      onChapterEnter: [        
        {
        layer: 'all_schools',
        opacity: 1.0,
        duration: 1,
      },
      {
        layer: 'electrified_schools',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'ookla_speeds',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'secondary_preferred',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'enrolment_total',
        opacity: 0.0,
        duration: 1,
      }],
      onChapterExit: [
      ]
    },
    {
      id: "Example",
      alignment: "left",
      title: "Example",
      description: "Selecting electrified schools",
      comment: "none",
      location: {
        center: [102.495496, 19.85627], // Approximate center point of Laos
        zoom: 9.5,
        pitch: 52.5,
        bearing: 36,
        speed: 0.1
      },
      mapAnimation: "flyTo",
      onChapterEnter: [        
        {
        layer: 'all_schools',
        opacity: 0.0,
        duration: 5000,
      },
      {
        layer: 'electrified_schools',
        opacity: 1.0,
        duration: 1000,
      },
      {
        layer: 'ookla_speeds',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'secondary_preferred',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'enrolment_total',
        opacity: 0.0,
        duration: 1,
      }],
      onChapterExit: [
      ],
    },
    {
      id: "prioritising",
      alignment: "left",
      title: "Prioritising schools with low or no internet connectivity",
      description: "Prioritising schools with low or no internet connectivity",
      comment: "none",
      location: {
        center: [102.495496, 19.85627], // Approximate center point of Laos
        zoom: 9.5,
        pitch: 52.5,
        bearing: 36,
        speed: 0.1
      },
      mapAnimation: "flyTo",
      onChapterEnter: [        
        {
        layer: 'all_schools',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'electrified_schools',
        opacity: 0.0,
        duration: 1000,
      },
      {
        layer: 'ookla_speeds',
        opacity: 1.0,
        duration: 3000,
      },
      {
        layer: 'secondary_preferred',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'enrolment_total',
        opacity: 0.0,
        duration: 1,
      }],
      onChapterExit: [
      ]
    },
    {
      id: "secondary",
      alignment: "left",
      title: "Preferring secondary schools",
      description: "Preferring secondary schools",
      comment: "none",
      location: {
        center: [102.495496, 19.85627], // Approximate center point of Laos
        zoom: 9.5,
        pitch: 52.5,
        bearing: 36,
        speed: 0.1
      },
      mapAnimation: "flyTo",
      onChapterEnter: [        
        {
        layer: 'all_schools',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'electrified_schools',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'ookla_speeds',
        opacity: 0.0,
        duration: 1000,
      },
      {
        layer: 'secondary_preferred',
        opacity: 1.0,
        duration: 1,
      },
      {
        layer: 'enrolment_total',
        opacity: 0.0,
        duration: 1,
      }],
      onChapterExit: [
      ]
    },
    {
      id: "enrolment",
      alignment: "left",
      title: "Selecting for larger enrolments",
      description: "Selecting for larger enrolments",
      comment: "none",
      location: {
        center: [102.495496, 19.85627], // Approximate center point of Laos
        zoom: 9.5,
        pitch: 52.5,
        bearing: 36,
        speed: 0.1
      },
      mapAnimation: "flyTo",
      onChapterEnter: [        
        {
        layer: 'all_schools',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'electrified_schools',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'ookla_speeds',
        opacity: 0.0,
        duration: 1,
      },
      {
        layer: 'secondary_preferred',
        opacity: 0.0,
        duration: 1000,
      },
      {
        layer: 'enrolment_total',
        opacity: 0.4,
        duration: 2000,
      }],
    },
    {
      id: "selected",
      alignment: "left",
      title: "School selected",
      description: '<table style="width:100%"><tr><th>School name</th><td>ມັດທະຍົມສົມບູນເມືອງໂພນໄຊ (ມັດທະຍົມ)</td></tr><tr><th>Total enrolment</th><td>989</td></tr><tr><th>Has electricity?</th><td>✔️</td></tr><tr><th>Number of connections detected</th><td>Low</td></tr><tr><th>Average internet speed (surrounding area)</th><td>1800kbps⬇️ <br>900kbps⬆️</td></tr></table>',
      comment: "none",
      location: {
        center: [102.495496, 19.85627], // Approximate center point of Laos
        zoom: 9.5,
        pitch: 52.5,
        bearing: 36,
        speed: 0.1
      },
      mapAnimation: "flyTo",
      onChapterEnter: [
        {
          layer: 'enrolment_total',
          opacity: 0.0,
          duration: 5000,
        },
        {
          layer: 'selected_school',
          opacity: 0.54,
          duration: 2000,
        },
      ],
      onChapterExit: [
  
      ]
    }
  ]
}
