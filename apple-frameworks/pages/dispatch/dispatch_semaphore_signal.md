> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatch_semaphore_signal

# dispatch_semaphore_signal

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Signals (increments) a semaphore.

## Declaration

```objectivec
extern intptr_t dispatch_semaphore_signal(dispatch_semaphore_t dsema);
```

<a id="return-value"></a>

## Return Value

If the previous value was less than zero, this function wakes a process currently waiting.

<a id="Discussion"></a>

## Discussion

Increment the counting semaphore. If the previous value was less than zero, this function wakes a thread currently waiting in [dispatch_semaphore_wait](dispatch_semaphore_wait.md).
