> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/schedulertimetype](https://developer.apple.com/documentation/foundation/operationqueue/schedulertimetype)

# OperationQueue.SchedulerTimeType

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The scheduler time type the operation queue uses.

## Declaration

```swift
struct SchedulerTimeType
```

## Topics

### Creating Scheduler Time Types

- [init(\_:)](schedulertimetype/init%28__%29.md): Creates an operation queue scheduler time with the given date.

### Managing Scheduler Time Type Properties

- [date](schedulertimetype/date.md): The date this type represents.
- [advanced(by:)](schedulertimetype/advanced%28by_%29.md): Calculates an operation queue scheduler time by advancing the scheduler time type’s date by the given interval.
- [distance(to:)](schedulertimetype/distance%28to_%29.md): The distance to another operation queue scheduler time.
- [OperationQueue.SchedulerTimeType.Stride](schedulertimetype/stride.md): The interval by which operation queue times advance.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Strideable](https://developer.apple.com/documentation/swift/strideable)

## See Also

### Scheduling Operations

- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, optionally taking into account tolerance if possible.
- [schedule(after:interval:tolerance:options:\_:)](schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.
- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at the next possible opportunity.
- [now](now.md): The operation queue’s definition of the current moment in time.
- [minimumTolerance](minimumtolerance.md): The minimum tolerance the dispatch queue scheduler allows.
- [OperationQueue.SchedulerOptions](scheduleroptions.md): A type that defines options the operation queue accepts.
