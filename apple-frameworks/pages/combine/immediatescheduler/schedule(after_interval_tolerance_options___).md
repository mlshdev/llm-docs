> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/immediatescheduler/schedule(after:interval:tolerance:options:_:)](https://developer.apple.com/documentation/combine/immediatescheduler/schedule(after:interval:tolerance:options:_:))

# schedule(after:interval:tolerance:options:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.

## Declaration

```swift
@discardableResult func schedule(after date: ImmediateScheduler.SchedulerTimeType, interval: ImmediateScheduler.SchedulerTimeType.Stride, tolerance: ImmediateScheduler.SchedulerTimeType.Stride, options: ImmediateScheduler.SchedulerOptions?, _ action: @escaping () -> Void) -> any Cancellable
```

<a id="discussion"></a>

## Discussion

The immediate scheduler ignores `date` and performs the action immediately.

## See Also

### Scheduling actions

- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date.
- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at the next possible opportunity.
