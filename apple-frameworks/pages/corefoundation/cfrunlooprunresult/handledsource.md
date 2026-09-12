> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooprunresult/handledsource](https://developer.apple.com/documentation/corefoundation/cfrunlooprunresult/handledsource)

# CFRunLoopRunResult.handledSource (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.

## Declaration

```swift
case handledSource
```

## See Also

### Constants

- [CFRunLoopRunResult.finished](finished.md): The running run loop mode has no sources or timers to process.
- [CFRunLoopRunResult.stopped](stopped.md): [CFRunLoopStop(\_:)](../cfrunloopstop%28__%29.md) was called on the run loop.
- [CFRunLoopRunResult.timedOut](timedout.md): The specified time interval for running the run loop has passed.

# kCFRunLoopRunHandledSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.

## Declaration

```objectivec
kCFRunLoopRunHandledSource
```

## See Also

### Constants

- [kCFRunLoopRunFinished](finished.md): The running run loop mode has no sources or timers to process.
- [kCFRunLoopRunStopped](stopped.md): [CFRunLoopStop](../cfrunloopstop%28__%29.md) was called on the run loop.
- [kCFRunLoopRunTimedOut](timedout.md): The specified time interval for running the run loop has passed.
