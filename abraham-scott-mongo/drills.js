'use strict';

use tempTestDb;
db.restaurants.count();

// db.restaurants.find(
//   {
//   cuisine: {$ne: "Not Listed/Not Applicable"},
//   borough: {$ne: "Missing"},
//   $where: "this.grades.length > 0",
//   grades: { $ne: "Not Yet Graded"},
//   "grades.score": {$gte: 0}
//   });

// db.restaurants.count({ cuisine: { $ne: "Not Listed/Not Applicable"}});

// db.restaurants.count({ borough: { $ne: "Missing" }});
// db.restaurants.count({ $where: "this.grades.length === 0" });
// db.restaurants.count({ grades: { $ne: "Not Yet Graded" }});
// db.restaurants.count({ "grades.score": {$exists: false}});
// db.restaurants.count({grades: {$exists: true}});
// db.restaurants.count({ $where: "this.grades.length >= 0" });  
  
  
