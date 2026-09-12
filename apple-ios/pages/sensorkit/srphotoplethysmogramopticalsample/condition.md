> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample/condition](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample/condition)

# SRPhotoplethysmogramOpticalSample.Condition (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The conditions that may occur when recording photoplethysmogram optical data.

## Declaration

```swift
struct Condition
```

## Topics

### Getting the condition

- [signalSaturation](condition/signalsaturation.md): The signal exceeds the measurement capacity of the sensor.
- [unreliableNoise](condition/unreliablenoise.md): The signal noise is unreliable.

### Initializing a condition

- [init(rawValue:)](condition/init%28rawvalue_%29.md): Initializes a condition structure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing optical data

- [emitter](emitter.md): The index of the LED in use during the sample.
- [activePhotodiodeIndexes](activephotodiodeindexes.md): The set of photodiodes in use during the sample.
- [signalIdentifier](signalidentifier.md): The identifier for a signal that photodiodes and emitters produce.
- [nominalWavelength](nominalwavelength.md): The wavelength in nanometers that the emitter produces while operating at a specific temperature.
- [effectiveWavelength](effectivewavelength.md): A temperature-compensated wavelength estimate in nanometers that the emitter produces.
- [samplingFrequency](samplingfrequency.md): The sampling frequency of the photoplethysmogram (PPG) data in hertz.
- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the system turns on the sensor.
- [conditions](conditions.md): The sensor context or conditions that may affect the sample.
- [noiseTerms](noiseterms-swift.property.md): The mathematical terms for computing the noise in this sample.
- [SRPhotoplethysmogramOpticalSample.NoiseTerms](noiseterms-swift.struct.md): The mathematical terms that you use to compute the photoplethysmogram (PPG) noise.
- [normalizedReflectance](normalizedreflectance-15f2k.md)

# SRPhotoplethysmogramOpticalSampleCondition (Objective-C)

**Framework:** SensorKit  
**Kind:** Type Alias  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The conditions that may occur when recording photoplethysmogram optical data.

## Declaration

```objectivec
typedef NSString * SRPhotoplethysmogramOpticalSampleCondition;
```

## Topics

### Getting the condition

- [SRPhotoplethysmogramOpticalSampleConditionSignalSaturation](condition/signalsaturation.md): The signal exceeds the measurement capacity of the sensor.
- [SRPhotoplethysmogramOpticalSampleConditionUnreliableNoise](condition/unreliablenoise.md): The signal noise is unreliable.

## See Also

### Accessing optical data

- [emitter](emitter.md): The index of the LED in use during the sample.
- [activePhotodiodeIndexes](activephotodiodeindexes.md): The set of photodiodes in use during the sample.
- [signalIdentifier](signalidentifier.md): The identifier for a signal that photodiodes and emitters produce.
- [nominalWavelength](nominalwavelength.md): The wavelength in nanometers that the emitter produces while operating at a specific temperature.
- [effectiveWavelength](effectivewavelength.md): A temperature-compensated wavelength estimate in nanometers that the emitter produces.
- [samplingFrequency](samplingfrequency.md): The sampling frequency of the photoplethysmogram (PPG) data in hertz.
- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the system turns on the sensor.
- [conditions](conditions.md): The sensor context or conditions that may affect the sample.
- [whiteNoise](whitenoise.md): An estimate of the white noise of the sensor.
- [pinkNoise](pinknoise.md): An estimate of the pink noise of the sensor.
- [backgroundNoise](backgroundnoise.md): An estimated timeseries of ambient noise intrusion.
- [backgroundNoiseOffset](backgroundnoiseoffset.md): The white noise variance estimate in the background noise signal.
- [normalizedReflectance](normalizedreflectance-9aidm.md): The photoplethysmogram waveform in normalized units.
