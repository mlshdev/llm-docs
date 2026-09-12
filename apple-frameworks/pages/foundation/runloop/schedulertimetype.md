> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/schedulertimetype](https://developer.apple.com/documentation/foundation/runloop/schedulertimetype)

# RunLoop.SchedulerTimeType

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The scheduler time type that the run loop uses.

## Declaration

```swift
struct SchedulerTimeType
```

## Topics

### Creating Scheduler Times

- [init(\_:)](schedulertimetype/init%28__%29.md): Initializes a run loop scheduler time with the given date.

### Working with Scheduler Time Intervals

- [RunLoop.SchedulerTimeType.Stride](schedulertimetype/stride.md): The interval by which run loop times advance.
- [advanced(by:)](schedulertimetype/advanced%28by_%29.md): Returns a run loop scheduler time calculated by advancing this instance’s time by the given interval.
- [distance(to:)](schedulertimetype/distance%28to_%29.md): Returns the distance to another run loop scheduler time.

### Inspecting Properties

- [date](schedulertimetype/date.md): The date this type represents.

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

### Scheduling Combine Publishers

- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at some time after the specified date, using the scheduler’s minimum tolerance.
- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, using the specified tolerance and options.
- [schedule(after:interval:tolerance:options:\_:)](schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, using the specified tolerance and options.
- [minimumTolerance](minimumtolerance.md): The minimum tolerance the run loop scheduler allows.
- [now](now.md): The run loop scheduler’s definition of the current moment in time.
- [RunLoop.SchedulerOptions](scheduleroptions.md): A set of options that affect the operation of the run loop scheduler.
