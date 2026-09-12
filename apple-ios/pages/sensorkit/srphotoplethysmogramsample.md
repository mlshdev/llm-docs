> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramsample](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramsample)

# SRPhotoplethysmogramSample (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The sample photoplethysmogram (PPG) sensor data.

## Declaration

```swift
class SRPhotoplethysmogramSample
```

<a id="overview"></a>

## Overview

The PPG sensor provides an array of these objects as its [sample](srfetchresult/sample.md) type.

Apple Watch uses LED lights, paired with light-sensitive photodiodes (PD), to track the heartbeat-induced pulsations. Different Apple Watch models can have different numbers of LEDs and PDs. For more information, see [SRPhotoplethysmogramOpticalSample](srphotoplethysmogramopticalsample.md).

For more details, see:

- [Monitor your heart rate with Apple Watch](https://support.apple.com/en-us/HT204666)
- [Using Apple Watch for Arrhythmia Detection](https://www.apple.com/healthcare/docs/site/Apple_Watch_Arrhythmia_Detection.pdf)
- [How to use the Blood Oxygen app on Apple Watch](https://support.apple.com/en-us/HT211027)
- [Blood Oxygen app on Apple Watch](https://www.apple.com/healthcare/docs/site/Blood_Oxygen_app_on_Apple_Watch_October_2022.pdf)

## Topics

### Accessing PPG data

- [startDate](srphotoplethysmogramsample/startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](srphotoplethysmogramsample/nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](srphotoplethysmogramsample/usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSample.Usage](srphotoplethysmogramsample/usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](srphotoplethysmogramsample/opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](srphotoplethysmogramsample/accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](srphotoplethysmogramsample/temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.

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

# SRPhotoplethysmogramSample (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The sample photoplethysmogram (PPG) sensor data.

## Declaration

```objectivec
@interface SRPhotoplethysmogramSample : NSObject
```

<a id="overview"></a>

## Overview

The PPG sensor provides an array of these objects as its [sample](srfetchresult/sample.md) type.

Apple Watch uses LED lights, paired with light-sensitive photodiodes (PD), to track the heartbeat-induced pulsations. Different Apple Watch models can have different numbers of LEDs and PDs. For more information, see [SRPhotoplethysmogramOpticalSample](srphotoplethysmogramopticalsample.md).

For more details, see:

- [Monitor your heart rate with Apple Watch](https://support.apple.com/en-us/HT204666)
- [Using Apple Watch for Arrhythmia Detection](https://www.apple.com/healthcare/docs/site/Apple_Watch_Arrhythmia_Detection.pdf)
- [How to use the Blood Oxygen app on Apple Watch](https://support.apple.com/en-us/HT211027)
- [Blood Oxygen app on Apple Watch](https://www.apple.com/healthcare/docs/site/Blood_Oxygen_app_on_Apple_Watch_October_2022.pdf)

## Topics

### Accessing PPG data

- [startDate](srphotoplethysmogramsample/startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](srphotoplethysmogramsample/nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](srphotoplethysmogramsample/usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSampleUsage](srphotoplethysmogramsample/usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](srphotoplethysmogramsample/opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](srphotoplethysmogramsample/accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](srphotoplethysmogramsample/temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
