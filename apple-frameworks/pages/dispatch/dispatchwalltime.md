> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchwalltime](https://developer.apple.com/documentation/dispatch/dispatchwalltime)

# DispatchWallTime

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An absolute point in time according to the wall clock, with microsecond precision.

## Declaration

```swift
struct DispatchWallTime
```

## Topics

### Getting Well-Known Times

- [now()](dispatchwalltime/now%28%29.md): Returns the current time.
- [distantFuture](dispatchwalltime/distantfuture.md): A time in the distant future.

### Creating a Dispatch Wall Time Object

- [init(timespec:)](dispatchwalltime/init%28timespec_%29.md): Creates an absolute time for a specified value.

### Getting the Time

- [rawValue](dispatchwalltime/rawvalue.md): The underlying time value.

### Operator Functions

- [+(\_:\_:)](+%28____%29-8ylhk.md)
- [+(\_:\_:)](+%28____%29-8pe6k.md)
- [-(\_:\_:)](-%28____%29-6jk71.md)
- [-(\_:\_:)](-%28____%29-50bxr.md)

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Time Constructs

- [DispatchTime](dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchTimeInterval](dispatchtimeinterval.md): A number of seconds, millisconds, microseconds, or nanoseconds.
- [DispatchTimeoutResult](dispatchtimeoutresult.md): A result value indicating whether a dispatch operation finished before a specified time.
- [dispatch_time_t](dispatch_time_t.md): An abstract representation of time.
- [DISPATCH_WALLTIME_NOW](dispatch_walltime_now.md): The current time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.
