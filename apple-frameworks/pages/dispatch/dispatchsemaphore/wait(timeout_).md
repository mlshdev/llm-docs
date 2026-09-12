> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsemaphore/wait(timeout:)](https://developer.apple.com/documentation/dispatch/dispatchsemaphore/wait(timeout:))

# wait(timeout:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Waits for, or decrements, a semaphore.

## Declaration

```swift
func wait(timeout: DispatchTime) -> DispatchTimeoutResult
```

## Parameters

- `timeout`: The latest time to wait for a signal.

<a id="Discussion"></a>

## Discussion

Decrement the counting semaphore. If the resulting value is less than zero, this function waits for a signal to occur before returning.

## See Also

### Blocking on the Semaphore

- [wait()](wait%28%29.md): Waits for, or decrements, a semaphore.
- [wait(wallTimeout:)](wait%28walltimeout_%29.md): Waits for, or decrements, a semaphore.
