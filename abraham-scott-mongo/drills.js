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


// Create a list of all of the cuisines offered by the restaurants, with no duplicates
// db.restaurants.distinct("cuisine").sort();

// Find the first five restaurants with the lowest positive score in one of their gradings.

// db.restaurants.find({
//   $sort: {"grades.score": {$gt: 0}}
// }).limit(5);
  
  
// sort restaurants by the minimum score they have ever received

// db.restaurants.findOne({}, {
//   name: 1,
//   borough: 1,
//   grades: {
//     $sort: {"grades.score": 1}} 
// });

// db.restaurants.find({
//   "grades.grade":[{$sort: { "grades.grade": -1 }}]
// });

// db.restaurants.find({
//   grades: { $ne: [] }, 
//   "grades.score": { $ne: 0, $eq: 2}
//  },
// {name: true,
// "grades.score": true
// }).
//  sort({ "grades.score": 1 }).
//  limit(5).
//  pretty();

// db.restaurants.find({
//   grades: {
//     $elemMatch: { score: { $gt: 0 } }
//   }
// }, {"grades.score": 1}).sort({"grades.score": 1}).limit(5).pretty();

// db.restaurants.find({
//   grades: {
//     $elemMatch: { score: { $gt: 0 } }
//   }
// }).sort({"grades.score": 1}).pretty();

// Find the restaurants which have only been graded A.
const gradeOptions = db.restaurants.distinct("grades.grade");
gradeOptions;

const badGrades = gradeOptions.filter(opt => opt !== "A");
badGrades;

db.restaurants.count({
 "grades.grade": {$nin: badGrades}
});

db.restaurants.find({
  "grades.grade": {$nin: ["B", "C", "D", "Not Yet Graded"]}
}).pretty();

db.restaurants.find({ grades: { $not: { $elemMatch: { grade: { $nin: ["A"] } } } } });

