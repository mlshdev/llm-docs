> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/schedulertimetype](https://developer.apple.com/documentation/dispatch/dispatchqueue/schedulertimetype)

# DispatchQueue.SchedulerTimeType

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The scheduler time type used by the dispatch queue.

## Declaration

```swift
struct SchedulerTimeType
```

## Topics

### Creating Scheduler Times

- [init(\_:)](schedulertimetype/init%28__%29.md): Creates a dispatch queue time type instance.

### Working with Scheduler Time Intervals

- [advanced(by:)](schedulertimetype/advanced%28by_%29.md)
- [distance(to:)](schedulertimetype/distance%28to_%29.md)

### Inspecting Scheduler Time Properties

- [dispatchTime](schedulertimetype/dispatchtime.md): The dispatch time represented by this type.

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

- [DispatchQueue.SchedulerOptions](scheduleroptions.md): A set of options that affect the operation of the dispatch queue scheduler.
