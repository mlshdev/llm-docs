> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample)

# SRPhotoplethysmogramOpticalSample (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A data sample from the photoplethysmogram (PPG) optical sensor.

## Declaration

```swift
class SRPhotoplethysmogramOpticalSample
```

<a id="overview"></a>

## Overview

To get the PPG waveform, use the [normalizedReflectance](srphotoplethysmogramopticalsample/normalizedreflectance-9aidm.md) property. Apple Watch uses an arrangement of emitters and photodiodes to measure the PPG waveform.

<a id="Interpret-second-generation-PPG-sensors-data"></a>

### Interpret second-generation PPG sensors data

Second-generation optical heart sensors, in Apple Watch 4, 5, SE 3 and SE models, use green or infrared (IR) LED lights paired with light-sensitive photodiodes.

![LED setup for Apple Watch 4, 5, SE 3, and SE models showing the location of the infrared LED lights.](https://developer.apple.com/images/com.apple.sensorkit/ppg-sensros-2@2x.png)

The active photodiode’s indices show which photodiode or combination of photodiodes the Apple Watch uses. The light-sensitive photodiodes have different arrangements between the Apple Watch models:

![The photodiode layouts for the Apple Watch 4, 5, and SE models.](https://developer.apple.com/images/com.apple.sensorkit/ppg-sensros-1b@2x.png)

![The photodiode layout for the Apple Watch SE 3 Model](https://developer.apple.com/images/com.apple.sensorkit/ppg-sensros-1a@2x.png)

For the second-generation sensors, the mapping of the optical heart sensor (SE, Series 4 and 5) emitter is:

| Emitter index | LED arrangement |
| --- | --- |
| 0 | 0, Infrared (940 nm) |
| 1 | 1, Infrared (940 nm) |
| 2 | 2, Green (525 nm) |
| 3 | 3, Green (525 nm) |
| 4 | 4, Green (525 nm) |
| 5 | 5, Green (525 nm) |

<a id="Interpret-third-generation-PPG-sensors"></a>

### Interpret third-generation PPG sensors

Third-generation optical heart sensor, in Apple Watch Series 6 and later, plus Apple Watch Ultra and Ultra 2, use an additional red LED with a different arrangement of emitters and photodiodes than the second-generation PPG sensors. The active photodiodes indices show which photodiode or combination of photodiodes the Apple Watch uses.

![Two diagrams of Apple Series 6 and later, plus Apple Watch Ultra and Ultra 2, that show the location of the emitters and photodiodes.](https://developer.apple.com/images/com.apple.sensorkit/media-4403033@2x.png)

For the third-generation sensors, the mapping of the optical heart sensor (Series 6, 7, 8, 9, Ultra, and Ultra 2) emitter is:

| Emitter index | LED arrangement |
| --- | --- |
| 0 | 0, Infrared (850 nm) |
| 1 | 1, Infrared (850 nm) |
| 2 | 2, Infrared (850 nm) |
| 3 | 3, Infrared (850 nm) |
| 4 | 4, Infrared (940 nm) |
| 5 | 5, Red (660 nm) |
| 6 | 6, Red (660 nm) |
| 7 | 7, Red (660 nm) |
| 8 | 8, Red (660 nm) |
| 9 | 9, Green (525 nm) |
| 10 | 10, Green (525 nm) |
| 11 | 11, Green (525 nm) |
| 12 | 12, Green (525 nm) |

## Topics

### Accessing optical data

- [emitter](srphotoplethysmogramopticalsample/emitter.md): The index of the LED in use during the sample.
- [activePhotodiodeIndexes](srphotoplethysmogramopticalsample/activephotodiodeindexes.md): The set of photodiodes in use during the sample.
- [signalIdentifier](srphotoplethysmogramopticalsample/signalidentifier.md): The identifier for a signal that photodiodes and emitters produce.
- [nominalWavelength](srphotoplethysmogramopticalsample/nominalwavelength.md): The wavelength in nanometers that the emitter produces while operating at a specific temperature.
- [effectiveWavelength](srphotoplethysmogramopticalsample/effectivewavelength.md): A temperature-compensated wavelength estimate in nanometers that the emitter produces.
- [samplingFrequency](srphotoplethysmogramopticalsample/samplingfrequency.md): The sampling frequency of the photoplethysmogram (PPG) data in hertz.
- [nanosecondsSinceStart](srphotoplethysmogramopticalsample/nanosecondssincestart.md): The time in nanoseconds since the system turns on the sensor.
- [conditions](srphotoplethysmogramopticalsample/conditions.md): The sensor context or conditions that may affect the sample.
- [SRPhotoplethysmogramOpticalSample.Condition](srphotoplethysmogramopticalsample/condition.md): The conditions that may occur when recording photoplethysmogram optical data.
- [noiseTerms](srphotoplethysmogramopticalsample/noiseterms-swift.property.md): The mathematical terms for computing the noise in this sample.
- [SRPhotoplethysmogramOpticalSample.NoiseTerms](srphotoplethysmogramopticalsample/noiseterms-swift.struct.md): The mathematical terms that you use to compute the photoplethysmogram (PPG) noise.
- [normalizedReflectance](srphotoplethysmogramopticalsample/normalizedreflectance-15f2k.md)

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

### Accessing PPG data

- [startDate](srphotoplethysmogramsample/startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](srphotoplethysmogramsample/nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](srphotoplethysmogramsample/usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSample.Usage](srphotoplethysmogramsample/usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](srphotoplethysmogramsample/opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](srphotoplethysmogramsample/accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](srphotoplethysmogramsample/temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.

# SRPhotoplethysmogramOpticalSample (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A data sample from the photoplethysmogram (PPG) optical sensor.

## Declaration

```objectivec
@interface SRPhotoplethysmogramOpticalSample : NSObject
```

<a id="overview"></a>

## Overview

To get the PPG waveform, use the [normalizedReflectance](srphotoplethysmogramopticalsample/normalizedreflectance-9aidm.md) property. Apple Watch uses an arrangement of emitters and photodiodes to measure the PPG waveform.

<a id="Interpret-second-generation-PPG-sensors-data"></a>

### Interpret second-generation PPG sensors data

Second-generation optical heart sensors, in Apple Watch 4, 5, SE 3 and SE models, use green or infrared (IR) LED lights paired with light-sensitive photodiodes.

![LED setup for Apple Watch 4, 5, SE 3, and SE models showing the location of the infrared LED lights.](https://developer.apple.com/images/com.apple.sensorkit/ppg-sensros-2@2x.png)

The active photodiode’s indices show which photodiode or combination of photodiodes the Apple Watch uses. The light-sensitive photodiodes have different arrangements between the Apple Watch models:

![The photodiode layouts for the Apple Watch 4, 5, and SE models.](https://developer.apple.com/images/com.apple.sensorkit/ppg-sensros-1b@2x.png)

![The photodiode layout for the Apple Watch SE 3 Model](https://developer.apple.com/images/com.apple.sensorkit/ppg-sensros-1a@2x.png)

For the second-generation sensors, the mapping of the optical heart sensor (SE, Series 4 and 5) emitter is:

| Emitter index | LED arrangement |
| --- | --- |
| 0 | 0, Infrared (940 nm) |
| 1 | 1, Infrared (940 nm) |
| 2 | 2, Green (525 nm) |
| 3 | 3, Green (525 nm) |
| 4 | 4, Green (525 nm) |
| 5 | 5, Green (525 nm) |

<a id="Interpret-third-generation-PPG-sensors"></a>

### Interpret third-generation PPG sensors

Third-generation optical heart sensor, in Apple Watch Series 6 and later, plus Apple Watch Ultra and Ultra 2, use an additional red LED with a different arrangement of emitters and photodiodes than the second-generation PPG sensors. The active photodiodes indices show which photodiode or combination of photodiodes the Apple Watch uses.

![Two diagrams of Apple Series 6 and later, plus Apple Watch Ultra and Ultra 2, that show the location of the emitters and photodiodes.](https://developer.apple.com/images/com.apple.sensorkit/media-4403033@2x.png)

For the third-generation sensors, the mapping of the optical heart sensor (Series 6, 7, 8, 9, Ultra, and Ultra 2) emitter is:

| Emitter index | LED arrangement |
| --- | --- |
| 0 | 0, Infrared (850 nm) |
| 1 | 1, Infrared (850 nm) |
| 2 | 2, Infrared (850 nm) |
| 3 | 3, Infrared (850 nm) |
| 4 | 4, Infrared (940 nm) |
| 5 | 5, Red (660 nm) |
| 6 | 6, Red (660 nm) |
| 7 | 7, Red (660 nm) |
| 8 | 8, Red (660 nm) |
| 9 | 9, Green (525 nm) |
| 10 | 10, Green (525 nm) |
| 11 | 11, Green (525 nm) |
| 12 | 12, Green (525 nm) |

## Topics

### Accessing optical data

- [emitter](srphotoplethysmogramopticalsample/emitter.md): The index of the LED in use during the sample.
- [activePhotodiodeIndexes](srphotoplethysmogramopticalsample/activephotodiodeindexes.md): The set of photodiodes in use during the sample.
- [signalIdentifier](srphotoplethysmogramopticalsample/signalidentifier.md): The identifier for a signal that photodiodes and emitters produce.
- [nominalWavelength](srphotoplethysmogramopticalsample/nominalwavelength.md): The wavelength in nanometers that the emitter produces while operating at a specific temperature.
- [effectiveWavelength](srphotoplethysmogramopticalsample/effectivewavelength.md): A temperature-compensated wavelength estimate in nanometers that the emitter produces.
- [samplingFrequency](srphotoplethysmogramopticalsample/samplingfrequency.md): The sampling frequency of the photoplethysmogram (PPG) data in hertz.
- [nanosecondsSinceStart](srphotoplethysmogramopticalsample/nanosecondssincestart.md): The time in nanoseconds since the system turns on the sensor.
- [conditions](srphotoplethysmogramopticalsample/conditions.md): The sensor context or conditions that may affect the sample.
- [SRPhotoplethysmogramOpticalSampleCondition](srphotoplethysmogramopticalsample/condition.md): The conditions that may occur when recording photoplethysmogram optical data.
- [whiteNoise](srphotoplethysmogramopticalsample/whitenoise.md): An estimate of the white noise of the sensor.
- [pinkNoise](srphotoplethysmogramopticalsample/pinknoise.md): An estimate of the pink noise of the sensor.
- [backgroundNoise](srphotoplethysmogramopticalsample/backgroundnoise.md): An estimated timeseries of ambient noise intrusion.
- [backgroundNoiseOffset](srphotoplethysmogramopticalsample/backgroundnoiseoffset.md): The white noise variance estimate in the background noise signal.
- [normalizedReflectance](srphotoplethysmogramopticalsample/normalizedreflectance-9aidm.md): The photoplethysmogram waveform in normalized units.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Accessing PPG data

- [startDate](srphotoplethysmogramsample/startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](srphotoplethysmogramsample/nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](srphotoplethysmogramsample/usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSampleUsage](srphotoplethysmogramsample/usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](srphotoplethysmogramsample/opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](srphotoplethysmogramsample/accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](srphotoplethysmogramsample/temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.
