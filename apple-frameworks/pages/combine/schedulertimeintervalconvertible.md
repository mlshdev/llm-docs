> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/schedulertimeintervalconvertible](https://developer.apple.com/documentation/combine/schedulertimeintervalconvertible)

# SchedulerTimeIntervalConvertible

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that provides a scheduler with an expression for relative time.

## Declaration

```swift
protocol SchedulerTimeIntervalConvertible
```

## Topics

### Converting seconds to scheduler time intervals

- [microseconds(\_:)](schedulertimeintervalconvertible/microseconds%28__%29.md): Converts the specified number of microseconds into an instance of this scheduler time type.
- [milliseconds(\_:)](schedulertimeintervalconvertible/milliseconds%28__%29.md): Converts the specified number of milliseconds into an instance of this scheduler time type.
- [nanoseconds(\_:)](schedulertimeintervalconvertible/nanoseconds%28__%29.md): Converts the specified number of nanoseconds into an instance of this scheduler time type.
- [seconds(\_:)](schedulertimeintervalconvertible/seconds%28__%29-2cv8t.md): Converts the specified number of seconds, as a floating-point value, into an instance of this scheduler time type.
- [seconds(\_:)](schedulertimeintervalconvertible/seconds%28__%29-3g8ay.md): Converts the specified number of seconds into an instance of this scheduler time type.

## Relationships

### Conforming Types

- [ImmediateScheduler.SchedulerTimeType.Stride](immediatescheduler/schedulertimetype/stride.md)

## See Also

### Schedulers

- [Scheduler](scheduler.md): A protocol that defines when and how to execute a closure.
- [ImmediateScheduler](immediatescheduler.md): A scheduler for performing synchronous actions.
