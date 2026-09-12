> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphoneusagereport](https://developer.apple.com/documentation/sensorkit/srphoneusagereport)

# SRPhoneUsageReport (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the user’s phone activity over a period of time.

## Declaration

```swift
class SRPhoneUsageReport
```

<a id="overview"></a>

## Overview

This object describes the frequency that a device makes or receives phone calls, and the relative amount of time the user is on a call.

The [phoneUsageReport](srsensor/phoneusagereport.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Analyzing Phone Use

- [duration](srphoneusagereport/duration.md): The duration that the report spans.
- [totalIncomingCalls](srphoneusagereport/totalincomingcalls.md): The number of calls the user receives.
- [totalOutgoingCalls](srphoneusagereport/totaloutgoingcalls.md): The number of calls the user makes.
- [totalPhoneCallDuration](srphoneusagereport/totalphonecallduration.md): The total duration of all calls.
- [totalUniqueContacts](srphoneusagereport/totaluniquecontacts.md): The user’s number of contacts.

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
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.

# SRPhoneUsageReport (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the user’s phone activity over a period of time.

## Declaration

```objectivec
@interface SRPhoneUsageReport : NSObject
```

<a id="overview"></a>

## Overview

This object describes the frequency that a device makes or receives phone calls, and the relative amount of time the user is on a call.

The [SRSensorPhoneUsageReport](srsensor/phoneusagereport.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Analyzing Phone Use

- [duration](srphoneusagereport/duration.md): The duration that the report spans.
- [totalIncomingCalls](srphoneusagereport/totalincomingcalls.md): The number of calls the user receives.
- [totalOutgoingCalls](srphoneusagereport/totaloutgoingcalls.md): The number of calls the user makes.
- [totalPhoneCallDuration](srphoneusagereport/totalphonecallduration.md): The total duration of all calls.
- [totalUniqueContacts](srphoneusagereport/totaluniquecontacts.md): The user’s number of contacts.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.
