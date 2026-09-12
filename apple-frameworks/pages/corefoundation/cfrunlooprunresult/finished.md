> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooprunresult/finished](https://developer.apple.com/documentation/corefoundation/cfrunlooprunresult/finished)

# CFRunLoopRunResult.finished (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The running run loop mode has no sources or timers to process.

## Declaration

```swift
case finished
```

## See Also

### Constants

- [CFRunLoopRunResult.stopped](stopped.md): [CFRunLoopStop(\_:)](../cfrunloopstop%28__%29.md) was called on the run loop.
- [CFRunLoopRunResult.timedOut](timedout.md): The specified time interval for running the run loop has passed.
- [CFRunLoopRunResult.handledSource](handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.

# kCFRunLoopRunFinished (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The running run loop mode has no sources or timers to process.

## Declaration

```objectivec
kCFRunLoopRunFinished
```

## See Also

### Constants

- [kCFRunLoopRunStopped](stopped.md): [CFRunLoopStop](../cfrunloopstop%28__%29.md) was called on the run loop.
- [kCFRunLoopRunTimedOut](timedout.md): The specified time interval for running the run loop has passed.
- [kCFRunLoopRunHandledSource](handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.
