> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristtemperature](https://developer.apple.com/documentation/sensorkit/srwristtemperature)

# SRWristTemperature (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The temperature of the user’s wrist while the user sleeps.

## Declaration

```swift
class SRWristTemperature
```

<a id="overview"></a>

## Overview

The [wristTemperature](srsensor/wristtemperature.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Getting temperature information

- [timestamp](srwristtemperature/timestamp.md): The date and time when the device records the temperature.
- [value](srwristtemperature/value.md): The temperature sensor value in celsius.
- [errorEstimate](srwristtemperature/errorestimate.md): An estimate of the amount of error in the temperature measurement.

### Determining the accuracy

- [condition](srwristtemperature/condition-swift.property.md): The condition of the measurement that impacts its accuracy.
- [SRWristTemperature.Condition](srwristtemperature/condition-swift.struct.md): The user activities with the watch that can impact the temperature measurement.

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

- [SRWristTemperatureSession](srwristtemperaturesession.md): An object that represents wrist temperatures that a device records during a period of time.

# SRWristTemperature (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The temperature of the user’s wrist while the user sleeps.

## Declaration

```objectivec
@interface SRWristTemperature : NSObject
```

<a id="overview"></a>

## Overview

The [SRSensorWristTemperature](srsensor/wristtemperature.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Getting temperature information

- [timestamp](srwristtemperature/timestamp.md): The date and time when the device records the temperature.
- [value](srwristtemperature/value.md): The temperature sensor value in celsius.
- [errorEstimate](srwristtemperature/errorestimate.md): An estimate of the amount of error in the temperature measurement.

### Determining the accuracy

- [condition](srwristtemperature/condition-swift.property.md): The condition of the measurement that impacts its accuracy.
- [SRWristTemperatureCondition](srwristtemperature/condition-swift.struct.md): The user activities with the watch that can impact the temperature measurement.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Recording wrist temperatures

- [SRWristTemperatureSession](srwristtemperaturesession.md): An object that represents wrist temperatures that a device records during a period of time.
