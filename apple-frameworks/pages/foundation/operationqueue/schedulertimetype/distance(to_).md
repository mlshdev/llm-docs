> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/schedulertimetype/distance(to:)](https://developer.apple.com/documentation/foundation/operationqueue/schedulertimetype/distance(to:))

# distance(to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The distance to another operation queue scheduler time.

## Declaration

```swift
func distance(to other: OperationQueue.SchedulerTimeType) -> OperationQueue.SchedulerTimeType.Stride
```

## Parameters

- `other`: Another operation queue scheduler time.

<a id="return-value"></a>

## Return Value

The time interval between this time and the other time.

## See Also

### Managing Scheduler Time Type Properties

- [date](date.md): The date this type represents.
- [advanced(by:)](advanced%28by_%29.md): Calculates an operation queue scheduler time by advancing the scheduler time type’s date by the given interval.
- [OperationQueue.SchedulerTimeType.Stride](stride.md): The interval by which operation queue times advance.
