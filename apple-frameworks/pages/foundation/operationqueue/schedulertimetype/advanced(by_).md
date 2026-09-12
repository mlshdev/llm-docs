> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/schedulertimetype/advanced(by:)](https://developer.apple.com/documentation/foundation/operationqueue/schedulertimetype/advanced(by:))

# advanced(by:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calculates an operation queue scheduler time by advancing the scheduler time type’s date by the given interval.

## Declaration

```swift
func advanced(by n: OperationQueue.SchedulerTimeType.Stride) -> OperationQueue.SchedulerTimeType
```

## Parameters

- `n`: The time interval to advance [date](date.md) by.

<a id="return-value"></a>

## Return Value

An operation queue scheduler time advanced by the given interval from [date](date.md).

## See Also

### Managing Scheduler Time Type Properties

- [date](date.md): The date this type represents.
- [distance(to:)](distance%28to_%29.md): The distance to another operation queue scheduler time.
- [OperationQueue.SchedulerTimeType.Stride](stride.md): The interval by which operation queue times advance.
