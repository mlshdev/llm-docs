> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristdetection](https://developer.apple.com/documentation/sensorkit/srwristdetection)

# SRWristDetection (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration of a watch on the wearer’s wrist.

## Declaration

```swift
class SRWristDetection
```

<a id="overview"></a>

## Overview

The [onWristState](srsensor/onwriststate.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Inspecting Watch Configuration

- [crownOrientation](srwristdetection/crownorientation-swift.property.md): A value that indicates the direction the Digital Crown faces with respect to the user.
- [SRWristDetection.CrownOrientation](srwristdetection/crownorientation-swift.enum.md): Directions the Digital Crown can face with respect to the wearer.
- [onWrist](srwristdetection/onwrist.md): A value that indicates whether the watch is on the user’s wrist.
- [onWristDate](srwristdetection/onwristdate.md): The date and time that the user puts their Apple Watch on their wrist.
- [offWristDate](srwristdetection/offwristdate.md): The date and time that the user takes their Apple Watch off their wrist.
- [wristLocation](srwristdetection/wristlocation-swift.property.md): A value that indicates the wrist where the user wears the watch.
- [SRWristDetection.WristLocation](srwristdetection/wristlocation-swift.enum.md): Preferences for where a user wears a watch.

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
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.

# SRWristDetection (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration of a watch on the wearer’s wrist.

## Declaration

```objectivec
@interface SRWristDetection : NSObject
```

<a id="overview"></a>

## Overview

The [SRSensorOnWristState](srsensor/onwriststate.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Inspecting Watch Configuration

- [crownOrientation](srwristdetection/crownorientation-swift.property.md): A value that indicates the direction the Digital Crown faces with respect to the user.
- [SRCrownOrientation](srwristdetection/crownorientation-swift.enum.md): Directions the Digital Crown can face with respect to the wearer.
- [onWrist](srwristdetection/onwrist.md): A value that indicates whether the watch is on the user’s wrist.
- [onWristDate](srwristdetection/onwristdate.md): The date and time that the user puts their Apple Watch on their wrist.
- [offWristDate](srwristdetection/offwristdate.md): The date and time that the user takes their Apple Watch off their wrist.
- [wristLocation](srwristdetection/wristlocation-swift.property.md): A value that indicates the wrist where the user wears the watch.
- [SRWristLocation](srwristdetection/wristlocation-swift.enum.md): Preferences for where a user wears a watch.

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
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
