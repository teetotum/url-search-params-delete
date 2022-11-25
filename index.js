(function () {
  if (window.URLSearchParams) {
    const deleteWithKey = URLSearchParams.prototype.delete;

    const deleteWithKeyAndValue = function (key, value) {
      const entriesIterator = URLSearchParams.prototype.entries.call(this);
      const entries = [...entriesIterator];
      const toBeRestored = entries.filter(
        ([k, v]) => !(k === key && v === value)
      );
      const keysIterator = URLSearchParams.prototype.keys.call(this);
      const keys = [...keysIterator];
      keys.forEach((k) => deleteWithKey.call(this, k));
      toBeRestored.forEach(([k, v]) =>
        URLSearchParams.prototype.append.call(this, k, v)
      );
    };

    URLSearchParams.prototype.delete = function (key, value) {
      if (arguments.length > 1) {
        deleteWithKeyAndValue.call(this, key, value);
      } else {
        deleteWithKey.call(this, key);
      }
    };
  }
})();
