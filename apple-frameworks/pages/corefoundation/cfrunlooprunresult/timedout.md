> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooprunresult/timedout](https://developer.apple.com/documentation/corefoundation/cfrunlooprunresult/timedout)

# CFRunLoopRunResult.timedOut (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The specified time interval for running the run loop has passed.

## Declaration

```swift
case timedOut
```

## See Also

### Constants

- [CFRunLoopRunResult.finished](finished.md): The running run loop mode has no sources or timers to process.
- [CFRunLoopRunResult.stopped](stopped.md): [CFRunLoopStop(\_:)](../cfrunloopstop%28__%29.md) was called on the run loop.
- [CFRunLoopRunResult.handledSource](handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.

# kCFRunLoopRunTimedOut (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The specified time interval for running the run loop has passed.

## Declaration

```objectivec
kCFRunLoopRunTimedOut
```

## See Also

### Constants

- [kCFRunLoopRunFinished](finished.md): The running run loop mode has no sources or timers to process.
- [kCFRunLoopRunStopped](stopped.md): [CFRunLoopStop](../cfrunloopstop%28__%29.md) was called on the run loop.
- [kCFRunLoopRunHandledSource](handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.
