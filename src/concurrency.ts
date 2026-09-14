export async function mapWithConcurrency<T, R>(
  items: readonly T[],
  limit: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;
  let failure: unknown;
  const runners = Array.from(
    { length: Math.min(Math.max(Math.floor(limit), 1), items.length) },
    async () => {
      while (cursor < items.length && failure === undefined) {
        const index = cursor;
        cursor += 1;
        const item = items[index];
        if (item === undefined) {
          continue;
        }
        try {
          results[index] = await worker(item, index);
        } catch (error) {
          failure ??= error;
        }
      }
    },
  );
  await Promise.all(runners);
  if (failure !== undefined) {
    throw failure;
  }
  return results;
}
