extend = function(name, protoProps, staticProps) {
  var parent = this;
  var child;

  if (protoProps && _.has(protoProps, 'constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  _.extend(child, parent, staticProps);

  child.prototype = _.create(parent.prototype, protoProps);
  child.prototype.constructor = child;

  child.__super__ = parent.prototype;

  Object.defineProperty(child, 'name', {
    enumerable: false,
    configurable: true,
    writable: false,
    value: name
  });

  return child;
};
