import { AsyncLocalStorage } from "node:async_hooks";

interface RequestCounter {
  attempts: number;
}

const storage = new AsyncLocalStorage<RequestCounter>();

export async function withRequestMetrics<T>(
  operation: () => Promise<T>,
): Promise<{ value: T; requestAttempts: number }> {
  const counter: RequestCounter = { attempts: 0 };
  const value = await storage.run(counter, operation);
  return { value, requestAttempts: counter.attempts };
}

export function recordRequestAttempt(): void {
  const counter = storage.getStore();
  if (counter) counter.attempts += 1;
}
