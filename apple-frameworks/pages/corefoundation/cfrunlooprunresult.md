> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooprunresult](https://developer.apple.com/documentation/corefoundation/cfrunlooprunresult)

# CFRunLoopRunResult (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
enum CFRunLoopRunResult
```

## Topics

### Constants

- [CFRunLoopRunResult.finished](cfrunlooprunresult/finished.md): The running run loop mode has no sources or timers to process.
- [CFRunLoopRunResult.handledSource](cfrunlooprunresult/handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.
- [CFRunLoopRunResult.stopped](cfrunlooprunresult/stopped.md): [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md) was called on the run loop.
- [CFRunLoopRunResult.timedOut](cfrunlooprunresult/timedout.md): The specified time interval for running the run loop has passed.

### Initializers

- [init(rawValue:)](cfrunlooprunresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CFFileSecurityClearOptions](cffilesecurityclearoptions.md)
- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.
- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CGRectEdge](cgrectedge.md)

# CFRunLoopRunResult (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
enum CFRunLoopRunResult : SInt32;
```

## Topics

### Constants

- [kCFRunLoopRunFinished](cfrunlooprunresult/finished.md): The running run loop mode has no sources or timers to process.
- [kCFRunLoopRunHandledSource](cfrunlooprunresult/handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.
- [kCFRunLoopRunStopped](cfrunlooprunresult/stopped.md): [CFRunLoopStop](cfrunloopstop%28__%29.md) was called on the run loop.
- [kCFRunLoopRunTimedOut](cfrunlooprunresult/timedout.md): The specified time interval for running the run loop has passed.

## See Also

### Enumerations

- [CFFileSecurityClearOptions](cffilesecurityclearoptions.md)
- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.
- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CGRectEdge](cgrectedge.md)
