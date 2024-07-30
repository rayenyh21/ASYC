
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await delay(1000);
}
}

iterateWithAsyncAwait();
