> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/scheduler/scheduleroptions](https://developer.apple.com/documentation/combine/scheduler/scheduleroptions)

# SchedulerOptions

**Framework:** Combine  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that defines options accepted by the scheduler.

## Declaration

```swift
associatedtype SchedulerOptions
```

<a id="discussion"></a>

## Discussion

This type is freely definable by each `Scheduler`. Typically, operations that take a `Scheduler` parameter will also take `SchedulerOptions`.

## See Also

### Declaring scheduler timekeeping and options

- [SchedulerTimeType](schedulertimetype.md): Describes an instant in time for this scheduler.
