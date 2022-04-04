const peopleOnTheBus = (busStops) => {
    return busStops.length > 1 ? busStops[0][0] + busStops[1][0] : busStops[0][0];
};
module.exports = peopleOnTheBus;
