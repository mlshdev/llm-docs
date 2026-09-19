> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srmediaeventtype

# SRMediaEventType (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The types of user interaction with media that the sensor tracks.

## Declaration

```swift
enum SRMediaEventType
```

## Topics

### Event types

- [SRMediaEventType.onScreen](srmediaeventtype/onscreen.md): An event that occurs when the media appears on the screen.
- [SRMediaEventType.offScreen](srmediaeventtype/offscreen.md): An event that occurs when the media disappears from the screen.

### Initializers

- [init(rawValue:)](srmediaeventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tracking Media Events

- [eventType](srmediaevent/eventtype.md): The type of user interaction with the media.

# SRMediaEventType (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The types of user interaction with media that the sensor tracks.

## Declaration

```objectivec
enum SRMediaEventType : NSInteger;
```

## Topics

### Event types

- [SRMediaEventOnScreen](srmediaeventtype/onscreen.md): An event that occurs when the media appears on the screen.
- [SRMediaEventOffScreen](srmediaeventtype/offscreen.md): An event that occurs when the media disappears from the screen.

## See Also

### Tracking Media Events

- [eventType](srmediaevent/eventtype.md): The type of user interaction with the media.
