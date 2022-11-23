(function () {
  if (window.URLSearchParams) {
    const originalDeleteFunction = URLSearchParams.prototype.delete;

    URLSearchParams.prototype.delete = function (key, value) {
      const iterator = URLSearchParams.prototype.entries.call(this);
      const entries = [...iterator];
      const toBeRestored = entries.filter(([k, v]) => k === key && v !== value);
      originalDeleteFunction.call(this, key);
      toBeRestored.forEach(([k, v]) =>
        URLSearchParams.prototype.append.call(this, k, v)
      );
    };
  }
})();
