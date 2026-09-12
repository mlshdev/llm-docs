> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventavailability](https://developer.apple.com/documentation/eventkit/ekeventavailability)

# EKEventAvailability (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The event’s availability setting for scheduling purposes.

## Declaration

```swift
enum EKEventAvailability
```

## Topics

### Constants

- [EKEventAvailability.notSupported](ekeventavailability/notsupported.md): Availability settings are not supported by the event’s calendar.
- [EKEventAvailability.busy](ekeventavailability/busy.md): The event has a busy availability setting.
- [EKEventAvailability.free](ekeventavailability/free.md): The event has a free availability setting.
- [EKEventAvailability.tentative](ekeventavailability/tentative.md): The event has a tentative availability setting.
- [EKEventAvailability.unavailable](ekeventavailability/unavailable.md): The event has an unavailable availability setting.

### Initializers

- [init(rawValue:)](ekeventavailability/init%28rawvalue_%29.md)

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

- [EKEventStatus](ekeventstatus.md): The event’s status.

# EKEventAvailability (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The event’s availability setting for scheduling purposes.

## Declaration

```objectivec
enum EKEventAvailability : NSInteger;
```

## Topics

### Constants

- [EKEventAvailabilityNotSupported](ekeventavailability/notsupported.md): Availability settings are not supported by the event’s calendar.
- [EKEventAvailabilityBusy](ekeventavailability/busy.md): The event has a busy availability setting.
- [EKEventAvailabilityFree](ekeventavailability/free.md): The event has a free availability setting.
- [EKEventAvailabilityTentative](ekeventavailability/tentative.md): The event has a tentative availability setting.
- [EKEventAvailabilityUnavailable](ekeventavailability/unavailable.md): The event has an unavailable availability setting.

## See Also

### Scheduling Events

- [EKEventStatus](ekeventstatus.md): The event’s status.
