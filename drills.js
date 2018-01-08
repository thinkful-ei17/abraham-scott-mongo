'use strict';

// Find the command that retrieves all restaurants
const output = db.restaurants.find({});

while (output.hasNext()) {
  printjson(output.next());
}
