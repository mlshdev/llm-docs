> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/scheduler/schedule(after:interval:tolerance:options:_:)](https://developer.apple.com/documentation/combine/scheduler/schedule(after:interval:tolerance:options:_:))

# schedule(after:interval:tolerance:options:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.

## Declaration

```swift
func schedule(after date: Self.SchedulerTimeType, interval: Self.SchedulerTimeType.Stride, tolerance: Self.SchedulerTimeType.Stride, options: Self.SchedulerOptions?, _ action: @escaping () -> Void) -> any Cancellable
```

## See Also

### Scheduling actions

- [schedule(\_:)](schedule%28__%29.md): Performs the action at the next possible opportunity, without options.
- [schedule(after:\_:)](schedule%28after___%29.md): Performs the action at some time after the specified date, using the scheduler’s minimum tolerance.
- [schedule(after:interval:\_:)](schedule%28after_interval___%29.md): Performs the action at some time after the specified date, at the specified frequency, using minimum tolerance possible for this Scheduler.
- [schedule(after:interval:tolerance:\_:)](schedule%28after_interval_tolerance___%29.md): Performs the action at some time after the specified date, at the specified frequency, taking into account tolerance if possible.
- [schedule(after:tolerance:\_:)](schedule%28after_tolerance___%29.md): Performs the action at some time after the specified date.
- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date.
- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at the next possible opportunity.
