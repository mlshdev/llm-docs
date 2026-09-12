> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srambientlightsample](https://developer.apple.com/documentation/sensorkit/srambientlightsample)

# SRAmbientLightSample (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The amount of ambient light in the user’s environment.

## Declaration

```swift
class SRAmbientLightSample
```

<a id="overview"></a>

## Overview

The [ambientLightSensor](srsensor/ambientlightsensor.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Measuring light level

- [chromaticity](srambientlightsample/chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [SRAmbientLightSample.Chromaticity](srambientlightsample/chromaticity-swift.struct.md): A coordinate pair that describes light brightness and tint.
- [lux](srambientlightsample/lux.md): An object that describes the sample’s luminous flux.
- [placement](srambientlightsample/placement.md): The light’s location relative to the sensor.
- [SRAmbientLightSample.SensorPlacement](srambientlightsample/sensorplacement.md): Directional values that describe light-source location with respect to the sensor.

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

- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.

# SRAmbientLightSample (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The amount of ambient light in the user’s environment.

## Declaration

```objectivec
@interface SRAmbientLightSample : NSObject
```

<a id="overview"></a>

## Overview

The [SRSensorAmbientLightSensor](srsensor/ambientlightsensor.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Measuring light level

- [chromaticity](srambientlightsample/chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [SRAmbientLightChromaticity](srambientlightsample/chromaticity-swift.struct.md): A coordinate pair that describes light brightness and tint.
- [lux](srambientlightsample/lux.md): An object that describes the sample’s luminous flux.
- [placement](srambientlightsample/placement.md): The light’s location relative to the sensor.
- [SRAmbientLightSensorPlacement](srambientlightsample/sensorplacement.md): Directional values that describe light-source location with respect to the sensor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Interpreting data

- [SRDeviceUsageReport](srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.
