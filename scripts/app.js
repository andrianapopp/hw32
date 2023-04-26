function flat(array) {
  let arrFlat = [];
  if (arguments.length !== 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  }
  for (let foo of array) {
    arrFlat = Array.isArray(foo)
      ? arrFlat.concat(flat(foo))
      : arrFlat.concat(array);
  }
  return arrFlat;
}
flat();
