> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/schedule(after:interval:tolerance:options:_:)](https://developer.apple.com/documentation/foundation/runloop/schedule(after:interval:tolerance:options:_:))

# schedule(after:interval:tolerance:options:\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Performs the action at some time after the specified date, at the specified frequency, using the specified tolerance and options.

## Declaration

```swift
func schedule(after date: RunLoop.SchedulerTimeType, interval: RunLoop.SchedulerTimeType.Stride, tolerance: RunLoop.SchedulerTimeType.Stride, options: RunLoop.SchedulerOptions?, _ action: @escaping () -> Void) -> any Cancellable
```

## See Also

### Scheduling Combine Publishers

- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at some time after the specified date, using the scheduler’s minimum tolerance.
- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, using the specified tolerance and options.
- [minimumTolerance](minimumtolerance.md): The minimum tolerance the run loop scheduler allows.
- [now](now.md): The run loop scheduler’s definition of the current moment in time.
- [RunLoop.SchedulerTimeType](schedulertimetype.md): The scheduler time type that the run loop uses.
- [RunLoop.SchedulerOptions](scheduleroptions.md): A set of options that affect the operation of the run loop scheduler.
