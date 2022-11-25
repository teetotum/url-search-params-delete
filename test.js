const passed = (success) => (success ? "passed" : "failed");

const deleteWithKey = () => {
  const paramsString = "foo=1&foo=2&bar=3";
  const searchParams = new URLSearchParams(paramsString);
  searchParams.delete("foo");
  const expected = "bar=3";
  const success = searchParams.toString() === expected;
  window.testresult.append(`TEST delete(key): ${passed(success)}`);
};

const deleteWithKeyAndValue = () => {
  const paramsString = "foo=1&foo=2&bar=3";
  const searchParams = new URLSearchParams(paramsString);
  searchParams.delete("foo", "2");
  const expected = "foo=1&bar=3";
  const success = searchParams.toString() === expected;
  window.testresult.append(`TEST delete(key,value): ${passed(success)}`);
};

const hasWithKey = () => {
  const paramsString = "foo=1";
  const searchParams = new URLSearchParams(paramsString);
  const expected = true;
  const success = searchParams.has("foo") === expected;
  window.testresult.append(`TEST has(key): ${passed(success)}`);
};

const hasWithKeyAndValue = () => {
  const paramsString = "foo=1";
  const searchParams = new URLSearchParams(paramsString);
  const expected = false;
  const success = searchParams.has("foo", "2") === expected;
  window.testresult.append(`TEST has(key,value): ${passed(success)}`);
};

deleteWithKey();
deleteWithKeyAndValue();
hasWithKey();
hasWithKeyAndValue();
