> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchtimeoutresult](https://developer.apple.com/documentation/dispatch/dispatchtimeoutresult)

# DispatchTimeoutResult

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A result value indicating whether a dispatch operation finished before a specified time.

## Declaration

```swift
@frozen enum DispatchTimeoutResult
```

## Topics

### Enumeration Cases

- [DispatchTimeoutResult.success](dispatchtimeoutresult/success.md): Indicates that a dispatch operation successfully finished before the specified time elapsed.
- [DispatchTimeoutResult.timedOut](dispatchtimeoutresult/timedout.md): Indicates that a dispatch operation failed to finish before the specified time elapsed.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Time Constructs

- [DispatchTime](dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchWallTime](dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.
- [DispatchTimeInterval](dispatchtimeinterval.md): A number of seconds, millisconds, microseconds, or nanoseconds.
- [dispatch_time_t](dispatch_time_t.md): An abstract representation of time.
- [DISPATCH_WALLTIME_NOW](dispatch_walltime_now.md): The current time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.
