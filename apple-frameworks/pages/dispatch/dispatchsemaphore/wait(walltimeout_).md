> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchsemaphore/wait(walltimeout:)

# wait(wallTimeout:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Waits for, or decrements, a semaphore.

## Declaration

```swift
func wait(wallTimeout: DispatchWallTime) -> DispatchTimeoutResult
```

## Parameters

- `wallTimeout`: The latest time to wait for a signal.

<a id="Discussion"></a>

## Discussion

Decrement the counting semaphore. If the resulting value is less than zero, this function waits for a signal to occur before returning.

## See Also

### Blocking on the Semaphore

- [wait()](wait%28%29.md): Waits for, or decrements, a semaphore.
- [wait(timeout:)](wait%28timeout_%29.md): Waits for, or decrements, a semaphore.
