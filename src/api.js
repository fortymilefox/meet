/**
 * 
 * @param {*} events: 
 * The following function takes an events array, then uses map to creaet a new array with only locations
 * 
 * 
 */
export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};