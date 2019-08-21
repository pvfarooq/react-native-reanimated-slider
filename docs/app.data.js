module.exports = [
  {"filepath":"src\\Ballon.js","title":"Ballon","description":"","link":"ballon","data":{"description":"","displayName":"Ballon","methods":[{"name":"setText","docblock":null,"modifiers":[],"params":[{"name":"text","type":null}],"returns":null}],"statics":[],"props":{"color":{"required":false,"flowType":{"name":"string"},"description":"","defaultValue":{"value":"\"#f3f\"","computed":false}},"text":{"required":true,"flowType":{"name":"string"},"description":""}}},"type":"component","dependencies":["./src/Ballon.js"],"group":"s"},{"filepath":"src\\Slider.js","title":"Slider","description":"","link":"slider","data":{"description":"","displayName":"Slider","methods":[{"name":"onLayout","docblock":null,"modifiers":[],"params":[{"name":"{ nativeEvent }","type":null}],"returns":null},{"name":"renderBallon","docblock":null,"modifiers":[],"params":[{"name":"{ text }","type":null}],"returns":null}],"statics":[],"props":{"renderBallon":{"required":true,"flowType":{"name":"signature","type":"function","raw":"() => any","signature":{"arguments":[],"return":{"name":"any"}}},"description":"renders the ballon"},"minimumTrackTintColor":{"required":false,"flowType":{"name":"string"},"description":"","defaultValue":{"value":"\"#f3f\"","computed":false}},"maximumTrackTintColor":{"required":false,"flowType":{"name":"string"},"description":"","defaultValue":{"value":"\"transparent\"","computed":false}},"cacheTrackTintColor":{"required":false,"flowType":{"name":"string"},"description":"","defaultValue":{"value":"\"#777\"","computed":false}}}},"type":"component","dependencies":["./src/Slider.js"],"group":"s"}
]