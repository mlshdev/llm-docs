> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srmessagesusagereport](https://developer.apple.com/documentation/sensorkit/srmessagesusagereport)

# SRMessagesUsageReport (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the user’s Messages app activity over a period of time.

## Declaration

```swift
class SRMessagesUsageReport
```

<a id="overview"></a>

## Overview

This object describes the frequency that the user sends or receives messages, and the relative amount of time the user uses the Messages app.

The [messagesUsageReport](srsensor/messagesusagereport.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Analyzing Message Use

- [duration](srmessagesusagereport/duration.md): The duration that the report spans.
- [totalIncomingMessages](srmessagesusagereport/totalincomingmessages.md): The number of messages the user receives.
- [totalOutgoingMessages](srmessagesusagereport/totaloutgoingmessages.md): The number of messages the user sends.
- [totalUniqueContacts](srmessagesusagereport/totaluniquecontacts.md): The user’s number of contacts.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.

# SRMessagesUsageReport (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the user’s Messages app activity over a period of time.

## Declaration

```objectivec
@interface SRMessagesUsageReport : NSObject
```

<a id="overview"></a>

## Overview

This object describes the frequency that the user sends or receives messages, and the relative amount of time the user uses the Messages app.

The [SRSensorMessagesUsageReport](srsensor/messagesusagereport.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Analyzing Message Use

- [duration](srmessagesusagereport/duration.md): The duration that the report spans.
- [totalIncomingMessages](srmessagesusagereport/totalincomingmessages.md): The number of messages the user receives.
- [totalOutgoingMessages](srmessagesusagereport/totaloutgoingmessages.md): The number of messages the user sends.
- [totalUniqueContacts](srmessagesusagereport/totaluniquecontacts.md): The user’s number of contacts.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.
