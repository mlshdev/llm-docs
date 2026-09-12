> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchtime/init(uptimenanoseconds:)](https://developer.apple.com/documentation/dispatch/dispatchtime/init(uptimenanoseconds:))

# init(uptimeNanoseconds:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a time relative to the amount of time the system has been running.

## Declaration

```swift
init(uptimeNanoseconds: UInt64)
```

## Parameters

- `uptimeNanoseconds`: The number of nanoseconds since boot, excluding any time the system spent asleep.

<a id="Discussion"></a>

## Discussion

On Apple platforms, this clock is the same as the value returned by [mach_absolute_time](https://developer.apple.com/documentation/kernel/1462446-mach_absolute_time) when converted into nanoseconds.
