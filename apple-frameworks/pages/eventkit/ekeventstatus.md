> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstatus](https://developer.apple.com/documentation/eventkit/ekeventstatus)

# EKEventStatus (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The event’s status.

## Declaration

```swift
enum EKEventStatus
```

## Topics

### Constants

- [EKEventStatus.none](ekeventstatus/none.md): The event has no status.
- [EKEventStatus.confirmed](ekeventstatus/confirmed.md): The event is confirmed.
- [EKEventStatus.tentative](ekeventstatus/tentative.md): The event is tentative.
- [EKEventStatus.canceled](ekeventstatus/canceled.md): The event is canceled.

### Initializers

- [init(rawValue:)](ekeventstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scheduling Events

- [EKEventAvailability](ekeventavailability.md): The event’s availability setting for scheduling purposes.

# EKEventStatus (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The event’s status.

## Declaration

```objectivec
enum EKEventStatus : NSInteger;
```

## Topics

### Constants

- [EKEventStatusNone](ekeventstatus/none.md): The event has no status.
- [EKEventStatusConfirmed](ekeventstatus/confirmed.md): The event is confirmed.
- [EKEventStatusTentative](ekeventstatus/tentative.md): The event is tentative.
- [EKEventStatusCanceled](ekeventstatus/canceled.md): The event is canceled.

## See Also

### Scheduling Events

- [EKEventAvailability](ekeventavailability.md): The event’s availability setting for scheduling purposes.
