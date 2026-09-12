> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srvisit](https://developer.apple.com/documentation/sensorkit/srvisit)

# SRVisit (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The user’s progress in their daily travel routine.

## Declaration

```swift
class SRVisit
```

<a id="overview"></a>

## Overview

The [visits](srsensor/visits.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Identifying a Visit

- [identifier](srvisit/identifier.md): A value that maps to a unique geographic location.

### Accessing Visit Information

- [arrivalDateInterval](srvisit/arrivaldateinterval.md): A range of time within which the user arrives at a location of interest.
- [departureDateInterval](srvisit/departuredateinterval.md): A range of time within which the user departs from a location of interest.
- [distanceFromHome](srvisit/distancefromhome.md): The location’s distance from the home-category location.
- [locationCategory](srvisit/locationcategory-swift.property.md): The location’s type.
- [SRVisit.LocationCategory](srvisit/locationcategory-swift.enum.md): Types of locations.

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
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.

# SRVisit (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The user’s progress in their daily travel routine.

## Declaration

```objectivec
@interface SRVisit : NSObject
```

<a id="overview"></a>

## Overview

The [SRSensorVisits](srsensor/visits.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Identifying a Visit

- [identifier](srvisit/identifier.md): A value that maps to a unique geographic location.

### Accessing Visit Information

- [arrivalDateInterval](srvisit/arrivaldateinterval.md): A range of time within which the user arrives at a location of interest.
- [departureDateInterval](srvisit/departuredateinterval.md): A range of time within which the user departs from a location of interest.
- [distanceFromHome](srvisit/distancefromhome.md): The location’s distance from the home-category location.
- [locationCategory](srvisit/locationcategory-swift.property.md): The location’s type.
- [SRLocationCategory](srvisit/locationcategory-swift.enum.md): Types of locations.

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
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.
