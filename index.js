const employee ={
    name: "Sharon",
    streetAddress:"Nairobi",
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObj = { ...object };
  
    newObj[key] = value;
  
    return newObj;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
  }
  
  function deleteFromEmployeeByKey(object, key) {
    const newObject = Object.assign({}, object);
    delete newObject[key];
    return newObject;
  }
  
  function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
  }