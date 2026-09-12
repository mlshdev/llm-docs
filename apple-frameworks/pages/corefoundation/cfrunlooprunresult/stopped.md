> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooprunresult/stopped](https://developer.apple.com/documentation/corefoundation/cfrunlooprunresult/stopped)

# CFRunLoopRunResult.stopped (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

[CFRunLoopStop(\_:)](../cfrunloopstop%28__%29.md) was called on the run loop.

## Declaration

```swift
case stopped
```

## See Also

### Constants

- [CFRunLoopRunResult.finished](finished.md): The running run loop mode has no sources or timers to process.
- [CFRunLoopRunResult.timedOut](timedout.md): The specified time interval for running the run loop has passed.
- [CFRunLoopRunResult.handledSource](handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.

# kCFRunLoopRunStopped (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

[CFRunLoopStop](../cfrunloopstop%28__%29.md) was called on the run loop.

## Declaration

```objectivec
kCFRunLoopRunStopped
```

## See Also

### Constants

- [kCFRunLoopRunFinished](finished.md): The running run loop mode has no sources or timers to process.
- [kCFRunLoopRunTimedOut](timedout.md): The specified time interval for running the run loop has passed.
- [kCFRunLoopRunHandledSource](handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.
