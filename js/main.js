var apiURL = 'http://private-44f6d-timeline6.apiary-mock.com/timeline';
var timelines;

$.getJSON(apiURL).success(function(data){
  timelineObject = data.timelines.map(function(timeline){
    var entryObject = {};

    var date = moment(timeline.timestamp);
    entryObject.date = date.format('MM/DD/YY');

    var time = moment(timeline.timestamp);
    entryObject.time = date.format('hh:mm');

    entryObject.icon = timeline.icon;

    entryObject.title = timeline.title;

    entryObject.content = timeline.content;

    return entryObject;
  });

  timelines = {objects: timelineObject};

  $('.container').html(template.ipsum(timelines));

});

// var obj = { values: [1,2,3,4,5,6,7] };

// var newValues = obj.values.map(function(value) {
//   // var newObb = {
//   //   original: value,
//   //   twice: (value * 2)
//   };
//   return newObj;

//   var newObj = {};
//   newObj.original = value;
//   newObj.twice = value * 2;
//   return newObj;

//   var newObj = {};
//   newObj['original'] = value;
//   newObj['twice'] = value * 2;
//   return newObj;
// });
