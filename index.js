(function () {
  if (window.URLSearchParams) {
    const originalDeleteFunction = URLSearchParams.prototype.delete;

    URLSearchParams.prototype.delete = function (key, value) {
      const entriesIterator = URLSearchParams.prototype.entries.call(this);
      const entries = [...entriesIterator];
      const toBeRestored = entries.filter(
        ([k, v]) => !(k === key && v === value)
      );
      const keysIterator = URLSearchParams.prototype.keys.call(this);
      const keys = [...keysIterator];
      keys.forEach((k) => originalDeleteFunction.call(this, k));
      toBeRestored.forEach(([k, v]) =>
        URLSearchParams.prototype.append.call(this, k, v)
      );
    };
  }
})();
