> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/immediatescheduler/schedulertimetype](https://developer.apple.com/documentation/combine/immediatescheduler/schedulertimetype)

# ImmediateScheduler.SchedulerTimeType

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The time type used by the immediate scheduler.

## Declaration

```swift
struct SchedulerTimeType
```

## Topics

### Declaring a scheduler timekeeping system

- [ImmediateScheduler.SchedulerTimeType.Stride](schedulertimetype/stride.md): The increment by which the immediate scheduler counts time.

### Calculating time offsets

- [advanced(by:)](schedulertimetype/advanced%28by_%29.md): Advances the time by the specified amount; this is meaningless in the context of an immediate scheduler.
- [distance(to:)](schedulertimetype/distance%28to_%29.md): Returns the distance to another immediate scheduler time; this distance is always `0` in the context of an immediate scheduler.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Strideable](https://developer.apple.com/documentation/swift/strideable)

## See Also

### Declaring scheduler timekeeping and options

- [ImmediateScheduler.SchedulerOptions](scheduleroptions.md): A type that defines options accepted by the immediate scheduler.
