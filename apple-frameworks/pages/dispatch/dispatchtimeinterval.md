> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchtimeinterval](https://developer.apple.com/documentation/dispatch/dispatchtimeinterval)

# DispatchTimeInterval

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A number of seconds, millisconds, microseconds, or nanoseconds.

## Declaration

```swift
enum DispatchTimeInterval
```

<a id="overview"></a>

## Overview

Use [DispatchTimeInterval](dispatchtimeinterval.md) values to specify the interval at which a [DispatchSourceTimer](dispatchsourcetimer.md) fires or I/O handlers are invoked for a [DispatchIO](dispatchio.md) channel, as well as to increment and decrement [DispatchTime](dispatchtime.md) values.

## Topics

### Enumeration Cases

- [DispatchTimeInterval.seconds(\_:)](dispatchtimeinterval/seconds%28__%29.md): A number of seconds.
- [DispatchTimeInterval.milliseconds(\_:)](dispatchtimeinterval/milliseconds%28__%29.md): A number of milliseconds.
- [DispatchTimeInterval.microseconds(\_:)](dispatchtimeinterval/microseconds%28__%29.md): A number of microseconds.
- [DispatchTimeInterval.nanoseconds(\_:)](dispatchtimeinterval/nanoseconds%28__%29.md): A number of nanoseconds.
- [DispatchTimeInterval.never](dispatchtimeinterval/never.md): No interval.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Time Constructs

- [DispatchTime](dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchWallTime](dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.
- [DispatchTimeoutResult](dispatchtimeoutresult.md): A result value indicating whether a dispatch operation finished before a specified time.
- [dispatch_time_t](dispatch_time_t.md): An abstract representation of time.
- [DISPATCH_WALLTIME_NOW](dispatch_walltime_now.md): The current time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.
