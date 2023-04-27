

function findMatching(drivers, query) {
    const queryLower = query.toLowerCase();
    return drivers.filter((driver) => driver.toLowerCase().includes(queryLower));
  }
  

  function fuzzyMatch(drivers, query) {
    const queryLower = query.toLowerCase();
    return drivers.filter((driver) => driver.toLowerCase().startsWith(queryLower));
  }
  

  function matchName(drivers, query) {
    const queryLower = query.toLowerCase();
    return drivers.filter((driver) => driver.name.toLowerCase().includes(queryLower));
  }