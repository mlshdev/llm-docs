> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialevent](https://developer.apple.com/documentation/intents/inspatialevent)

# INSpatialEvent (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating when to deliver location-related events.

## Declaration

```swift
enum INSpatialEvent
```

## Topics

### Constants

- [INSpatialEvent.unknown](inspatialevent/unknown.md): A constant indicating an unknown trigger condition.
- [INSpatialEvent.arrive](inspatialevent/arrive.md): A constant indicating to deliver events upon arriving at the specified location.
- [INSpatialEvent.depart](inspatialevent/depart.md): A constant indicating to deliver events upon leaving the specified location.

### Initializers

- [init(rawValue:)](inspatialevent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Trigger Condition

- [placemark](inspatialeventtrigger/placemark.md): The location that triggers an event.
- [event](inspatialeventtrigger/event.md): The conditions which trigger an event for the specified location.

# INSpatialEvent (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating when to deliver location-related events.

## Declaration

```objectivec
enum INSpatialEvent : NSInteger;
```

## Topics

### Constants

- [INSpatialEventUnknown](inspatialevent/unknown.md): A constant indicating an unknown trigger condition.
- [INSpatialEventArrive](inspatialevent/arrive.md): A constant indicating to deliver events upon arriving at the specified location.
- [INSpatialEventDepart](inspatialevent/depart.md): A constant indicating to deliver events upon leaving the specified location.

## See Also

### Getting the Trigger Condition

- [placemark](inspatialeventtrigger/placemark.md): The location that triggers an event.
- [event](inspatialeventtrigger/event.md): The conditions which trigger an event for the specified location.
