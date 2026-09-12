> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/immediatescheduler](https://developer.apple.com/documentation/combine/immediatescheduler)

# ImmediateScheduler

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A scheduler for performing synchronous actions.

## Declaration

```swift
struct ImmediateScheduler
```

<a id="overview"></a>

## Overview

You can only use this scheduler for immediate actions. If you attempt to schedule actions after a specific date, this scheduler ignores the date and performs them immediately.

## Topics

### Declaring scheduler timekeeping and options

- [ImmediateScheduler.SchedulerTimeType](immediatescheduler/schedulertimetype.md): The time type used by the immediate scheduler.
- [ImmediateScheduler.SchedulerOptions](immediatescheduler/scheduleroptions.md): A type that defines options accepted by the immediate scheduler.

### Accessing scheduler time properties

- [minimumTolerance](immediatescheduler/minimumtolerance.md): The minimum tolerance allowed by the immediate scheduler.
- [now](immediatescheduler/now.md): The immediate scheduler’s definition of the current moment in time.

### Using the shared scheduler

- [shared](immediatescheduler/shared.md): The shared instance of the immediate scheduler.

### Scheduling actions

- [schedule(after:interval:tolerance:options:\_:)](immediatescheduler/schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.
- [schedule(after:tolerance:options:\_:)](immediatescheduler/schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date.
- [schedule(options:\_:)](immediatescheduler/schedule%28options___%29.md): Performs the action at the next possible opportunity.

## Relationships

### Conforms To

- [Scheduler](scheduler.md)

## See Also

### Schedulers

- [Scheduler](scheduler.md): A protocol that defines when and how to execute a closure.
- [SchedulerTimeIntervalConvertible](schedulertimeintervalconvertible.md): A protocol that provides a scheduler with an expression for relative time.
