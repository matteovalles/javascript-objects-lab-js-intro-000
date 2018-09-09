var recipes = {eggs: 3}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj, {[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
