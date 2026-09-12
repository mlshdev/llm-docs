> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srmediaevent](https://developer.apple.com/documentation/sensorkit/srmediaevent)

# SRMediaEvent (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A user interaction with a media object, such as an image or a video.

## Declaration

```swift
class SRMediaEvent
```

## Topics

### Identifying Media Objects

- [mediaIdentifier](srmediaevent/mediaidentifier.md): A unique identifier for the media object.

### Tracking Media Events

- [eventType](srmediaevent/eventtype.md): The type of user interaction with the media.
- [SRMediaEventType](srmediaeventtype.md): The types of user interaction with media that the sensor tracks.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.

# SRMediaEvent (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A user interaction with a media object, such as an image or a video.

## Declaration

```objectivec
@interface SRMediaEvent : NSObject
```

## Topics

### Identifying Media Objects

- [mediaIdentifier](srmediaevent/mediaidentifier.md): A unique identifier for the media object.

### Tracking Media Events

- [eventType](srmediaevent/eventtype.md): The type of user interaction with the media.
- [SRMediaEventType](srmediaeventtype.md): The types of user interaction with media that the sensor tracks.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.
