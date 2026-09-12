> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/scheduler/schedulertimetype](https://developer.apple.com/documentation/combine/scheduler/schedulertimetype)

# SchedulerTimeType

**Framework:** Combine  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Describes an instant in time for this scheduler.

## Declaration

```swift
associatedtype SchedulerTimeType : Strideable where Self.SchedulerTimeType.Stride : SchedulerTimeIntervalConvertible
```

## See Also

### Declaring scheduler timekeeping and options

- [SchedulerOptions](scheduleroptions.md): A type that defines options accepted by the scheduler.
