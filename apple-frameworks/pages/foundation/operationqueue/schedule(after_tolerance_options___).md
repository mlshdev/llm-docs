> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/schedule(after:tolerance:options:_:)](https://developer.apple.com/documentation/foundation/operationqueue/schedule(after:tolerance:options:_:))

# schedule(after:tolerance:options:\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Performs the action at some time after the specified date, optionally taking into account tolerance if possible.

## Declaration

```swift
func schedule(after date: OperationQueue.SchedulerTimeType, tolerance: OperationQueue.SchedulerTimeType.Stride, options: OperationQueue.SchedulerOptions?, _ action: @escaping () -> Void)
```

## See Also

### Scheduling Operations

- [schedule(after:interval:tolerance:options:\_:)](schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.
- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at the next possible opportunity.
- [now](now.md): The operation queue’s definition of the current moment in time.
- [minimumTolerance](minimumtolerance.md): The minimum tolerance the dispatch queue scheduler allows.
- [OperationQueue.SchedulerTimeType](schedulertimetype.md): The scheduler time type the operation queue uses.
- [OperationQueue.SchedulerOptions](scheduleroptions.md): A type that defines options the operation queue accepts.
