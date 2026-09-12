> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarmproximity](https://developer.apple.com/documentation/eventkit/ekalarmproximity)

# EKAlarmProximity (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A value indicating whether an alarm is triggered by entering or exiting a region.

## Declaration

```swift
enum EKAlarmProximity
```

## Topics

### Constants

- [EKAlarmProximity.none](ekalarmproximity/none.md): The alarm has no proximity trigger.
- [EKAlarmProximity.enter](ekalarmproximity/enter.md): The alarm is set to fire when entering a region.
- [EKAlarmProximity.leave](ekalarmproximity/leave.md): The alarm is set to fire when leaving a region.

### Initializers

- [init(rawValue:)](ekalarmproximity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting GeoFence-based Alarms

- [proximity](ekalarm/proximity.md): A value indicating how a location-based alarm is triggered.
- [structuredLocation](ekalarm/structuredlocation.md): The location to trigger an alarm.

# EKAlarmProximity (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A value indicating whether an alarm is triggered by entering or exiting a region.

## Declaration

```objectivec
enum EKAlarmProximity : NSInteger;
```

## Topics

### Constants

- [EKAlarmProximityNone](ekalarmproximity/none.md): The alarm has no proximity trigger.
- [EKAlarmProximityEnter](ekalarmproximity/enter.md): The alarm is set to fire when entering a region.
- [EKAlarmProximityLeave](ekalarmproximity/leave.md): The alarm is set to fire when leaving a region.

## See Also

### Setting GeoFence-based Alarms

- [proximity](ekalarm/proximity.md): A value indicating how a location-based alarm is triggered.
- [structuredLocation](ekalarm/structuredlocation.md): The location to trigger an alarm.
