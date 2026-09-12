> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchtime](https://developer.apple.com/documentation/dispatch/dispatchtime)

# DispatchTime

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A point in time relative to the default clock, with nanosecond precision.

## Declaration

```swift
struct DispatchTime
```

<a id="overview"></a>

## Overview

On Apple platforms, the default clock is based on the Mach absolute time unit.

## Topics

### Getting Well-Known Times

- [now()](dispatchtime/now%28%29.md): Returns the current time.
- [distantFuture](dispatchtime/distantfuture.md): A time in the distant future.

### Creating a Dispatch Time Object

- [init(uptimeNanoseconds:)](dispatchtime/init%28uptimenanoseconds_%29.md): Creates a time relative to the amount of time the system has been running.

### Getting the Time

- [rawValue](dispatchtime/rawvalue.md): Returns the underlying time value.
- [uptimeNanoseconds](dispatchtime/uptimenanoseconds.md): Returns the number of nanoseconds since boot, excluding any time the system spent asleep.

### Modifying the Value

- [advanced(by:)](dispatchtime/advanced%28by_%29.md)
- [distance(to:)](dispatchtime/distance%28to_%29.md)

### Operator Functions

- [+(\_:\_:)](+%28____%29-6fmcc.md)
- [+(\_:\_:)](+%28____%29-2dcrq.md)
- [-(\_:\_:)](-%28____%29-5l4yh.md)
- [-(\_:\_:)](-%28____%29-8usj3.md)

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Time Constructs

- [DispatchWallTime](dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.
- [DispatchTimeInterval](dispatchtimeinterval.md): A number of seconds, millisconds, microseconds, or nanoseconds.
- [DispatchTimeoutResult](dispatchtimeoutresult.md): A result value indicating whether a dispatch operation finished before a specified time.
- [dispatch_time_t](dispatch_time_t.md): An abstract representation of time.
- [DISPATCH_WALLTIME_NOW](dispatch_walltime_now.md): The current time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.
