> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/scheduler](https://developer.apple.com/documentation/combine/scheduler)

# Scheduler

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that defines when and how to execute a closure.

## Declaration

```swift
protocol Scheduler<SchedulerTimeType>
```

## Mentioned In

- [Receiving and Handling Events with Combine](receiving-and-handling-events-with-combine.md)

<a id="overview"></a>

## Overview

You can use a scheduler to execute code as soon as possible, or after a future date. Individual scheduler implementations use whatever time-keeping system makes sense for them. Schedulers express this as their `SchedulerTimeType`. Since this type conforms to [SchedulerTimeIntervalConvertible](schedulertimeintervalconvertible.md), you can always express these times with the convenience functions like `.milliseconds(500)`. Schedulers can accept options to control how they execute the actions passed to them. These options may control factors like which threads or dispatch queues execute the actions.

## Topics

### Declaring scheduler timekeeping and options

- [SchedulerTimeType](scheduler/schedulertimetype.md): Describes an instant in time for this scheduler.
- [SchedulerOptions](scheduler/scheduleroptions.md): A type that defines options accepted by the scheduler.

### Accessing scheduler time properties

- [minimumTolerance](scheduler/minimumtolerance.md): The minimum tolerance allowed by the scheduler.
- [now](scheduler/now.md): This scheduler’s definition of the current moment in time.

### Scheduling actions

- [schedule(\_:)](scheduler/schedule%28__%29.md): Performs the action at the next possible opportunity, without options.
- [schedule(after:\_:)](scheduler/schedule%28after___%29.md): Performs the action at some time after the specified date, using the scheduler’s minimum tolerance.
- [schedule(after:interval:\_:)](scheduler/schedule%28after_interval___%29.md): Performs the action at some time after the specified date, at the specified frequency, using minimum tolerance possible for this Scheduler.
- [schedule(after:interval:tolerance:\_:)](scheduler/schedule%28after_interval_tolerance___%29.md): Performs the action at some time after the specified date, at the specified frequency, taking into account tolerance if possible.
- [schedule(after:interval:tolerance:options:\_:)](scheduler/schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.
- [schedule(after:tolerance:\_:)](scheduler/schedule%28after_tolerance___%29.md): Performs the action at some time after the specified date.
- [schedule(after:tolerance:options:\_:)](scheduler/schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date.
- [schedule(options:\_:)](scheduler/schedule%28options___%29.md): Performs the action at the next possible opportunity.

## Relationships

### Conforming Types

- [ImmediateScheduler](immediatescheduler.md)

## See Also

### Schedulers

- [ImmediateScheduler](immediatescheduler.md): A scheduler for performing synchronous actions.
- [SchedulerTimeIntervalConvertible](schedulertimeintervalconvertible.md): A protocol that provides a scheduler with an expression for relative time.
