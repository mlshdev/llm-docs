> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_walltime_now](https://developer.apple.com/documentation/dispatch/dispatch_walltime_now)

# DISPATCH_WALLTIME_NOW (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The current time.

## Declaration

```swift
var DISPATCH_WALLTIME_NOW: UInt { get }
```

## See Also

### Time Constructs

- [DispatchTime](dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchWallTime](dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.
- [DispatchTimeInterval](dispatchtimeinterval.md): A number of seconds, millisconds, microseconds, or nanoseconds.
- [DispatchTimeoutResult](dispatchtimeoutresult.md): A result value indicating whether a dispatch operation finished before a specified time.
- [dispatch_time_t](dispatch_time_t.md): An abstract representation of time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.

# DISPATCH_WALLTIME_NOW (Objective-C)

**Framework:** Dispatch  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The current time.

## Declaration

```objectivec
DISPATCH_WALLTIME_NOW
```

## See Also

### Time Constructs

- [dispatch_time](dispatch_time.md): Creates a `dispatch_time_t` relative to the default clock or modifies an existing `dispatch_time_t`.
- [dispatch_walltime](dispatch_walltime.md): Creates a `dispatch_time_t` using an absolute time according to the wall clock.
- [dispatch_time_t](dispatch_time_t.md): An abstract representation of time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.
