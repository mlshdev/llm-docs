> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristtemperaturesession](https://developer.apple.com/documentation/sensorkit/srwristtemperaturesession)

# SRWristTemperatureSession (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents wrist temperatures that a device records during a period of time.

## Declaration

```swift
class SRWristTemperatureSession
```

<a id="overview"></a>

## Overview

Use the [startDate](srwristtemperaturesession/startdate.md) and [duration](srwristtemperaturesession/duration.md) properties to get the range of time of the measurements. Use the [temperatures](srwristtemperaturesession/temperatures-8bqrl.md) property to get the sequence of measurements.

## Topics

### Getting session information

- [startDate](srwristtemperaturesession/startdate.md): The time that the device records the wrist temperature.
- [duration](srwristtemperaturesession/duration.md): The number of seconds that the device records the temperature.
- [version](srwristtemperaturesession/version.md): The version of the algorithm that analyzes the temperature.

### Getting recorded temperatures

- [temperatures](srwristtemperaturesession/temperatures-8bqrl.md): The wrist temperatures and their accuracies.

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

### Recording wrist temperatures

- [SRWristTemperature](srwristtemperature.md): The temperature of the user’s wrist while the user sleeps.

# SRWristTemperatureSession (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents wrist temperatures that a device records during a period of time.

## Declaration

```objectivec
@interface SRWristTemperatureSession : NSObject
```

<a id="overview"></a>

## Overview

Use the [startDate](srwristtemperaturesession/startdate.md) and [duration](srwristtemperaturesession/duration.md) properties to get the range of time of the measurements. Use the [temperatures](srwristtemperaturesession/temperatures-8bqrl.md) property to get the sequence of measurements.

## Topics

### Getting session information

- [startDate](srwristtemperaturesession/startdate.md): The time that the device records the wrist temperature.
- [duration](srwristtemperaturesession/duration.md): The number of seconds that the device records the temperature.
- [version](srwristtemperaturesession/version.md): The version of the algorithm that analyzes the temperature.

### Getting recorded temperatures

- [temperatures](srwristtemperaturesession/temperatures-7p7du.md): An enumerator that you use to get the wrist temperatures and their accuracies.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Recording wrist temperatures

- [SRWristTemperature](srwristtemperature.md): The temperature of the user’s wrist while the user sleeps.
