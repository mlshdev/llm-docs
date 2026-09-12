> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsemaphore/wait()](https://developer.apple.com/documentation/dispatch/dispatchsemaphore/wait())

# wait()

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Waits for, or decrements, a semaphore.

## Declaration

```swift
func wait()
```

<a id="Discussion"></a>

## Discussion

Decrement the counting semaphore. If the resulting value is less than zero, this function waits for a signal to occur before returning.

## See Also

### Blocking on the Semaphore

- [wait(timeout:)](wait%28timeout_%29.md): Waits for, or decrements, a semaphore.
- [wait(wallTimeout:)](wait%28walltimeout_%29.md): Waits for, or decrements, a semaphore.
