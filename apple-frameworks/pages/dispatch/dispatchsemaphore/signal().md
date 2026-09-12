> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsemaphore/signal()](https://developer.apple.com/documentation/dispatch/dispatchsemaphore/signal())

# signal()

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Signals (increments) a semaphore.

## Declaration

```swift
@discardableResult func signal() -> Int
```

<a id="return-value"></a>

## Return Value

This function returns non-zero if a thread is woken. Otherwise, zero is returned.

<a id="Discussion"></a>

## Discussion

Increment the counting semaphore. If the previous value was less than zero, this function wakes a thread currently waiting in [dispatch_semaphore_wait](../dispatch_semaphore_wait.md).
