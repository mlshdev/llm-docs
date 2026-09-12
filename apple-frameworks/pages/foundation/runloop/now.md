> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/now](https://developer.apple.com/documentation/foundation/runloop/now)

# now

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The run loop scheduler’s definition of the current moment in time.

## Declaration

```swift
var now: RunLoop.SchedulerTimeType { get }
```

## See Also

### Scheduling Combine Publishers

- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at some time after the specified date, using the scheduler’s minimum tolerance.
- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, using the specified tolerance and options.
- [schedule(after:interval:tolerance:options:\_:)](schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, using the specified tolerance and options.
- [minimumTolerance](minimumtolerance.md): The minimum tolerance the run loop scheduler allows.
- [RunLoop.SchedulerTimeType](schedulertimetype.md): The scheduler time type that the run loop uses.
- [RunLoop.SchedulerOptions](scheduleroptions.md): A set of options that affect the operation of the run loop scheduler.
