> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_time_t](https://developer.apple.com/documentation/dispatch/dispatch_time_t)

# dispatch_time_t (Swift)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An abstract representation of time.

## Declaration

```swift
typealias dispatch_time_t = UInt64
```

## Topics

### Well-Defined Times

- [DISPATCH_TIME_NOW](dispatch_time_now.md)
- [DISPATCH_TIME_FOREVER](dispatch_time_forever.md)

### Time Multiplier Constants

- [USEC_PER_SEC](usec_per_sec.md)
- [NSEC_PER_SEC](nsec_per_sec.md)
- [NSEC_PER_MSEC](nsec_per_msec.md)
- [NSEC_PER_USEC](nsec_per_usec.md)

## See Also

### Time Constructs

- [DispatchTime](dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchWallTime](dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.
- [DispatchTimeInterval](dispatchtimeinterval.md): A number of seconds, millisconds, microseconds, or nanoseconds.
- [DispatchTimeoutResult](dispatchtimeoutresult.md): A result value indicating whether a dispatch operation finished before a specified time.
- [DISPATCH_WALLTIME_NOW](dispatch_walltime_now.md): The current time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.

# dispatch_time_t (Objective-C)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An abstract representation of time.

## Declaration

```objectivec
typedef uint64_t dispatch_time_t;
```

## Topics

### Well-Defined Times

- [DISPATCH_TIME_NOW](dispatch_time_now.md)
- [DISPATCH_TIME_FOREVER](dispatch_time_forever.md)

### Time Multiplier Constants

- [USEC_PER_SEC](usec_per_sec.md)
- [NSEC_PER_SEC](nsec_per_sec.md)
- [NSEC_PER_MSEC](nsec_per_msec.md)
- [NSEC_PER_USEC](nsec_per_usec.md)

## See Also

### Time Constructs

- [dispatch_time](dispatch_time.md): Creates a `dispatch_time_t` relative to the default clock or modifies an existing `dispatch_time_t`.
- [dispatch_walltime](dispatch_walltime.md): Creates a `dispatch_time_t` using an absolute time according to the wall clock.
- [DISPATCH_WALLTIME_NOW](dispatch_walltime_now.md): The current time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.
