> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample/nanosecondssincestart](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample/nanosecondssincestart)

# nanosecondsSinceStart (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The time in nanoseconds since the system turns on the sensor.

## Declaration

```swift
var nanosecondsSinceStart: Int64 { get }
```

## See Also

### Accessing optical data

- [emitter](emitter.md): The index of the LED in use during the sample.
- [activePhotodiodeIndexes](activephotodiodeindexes.md): The set of photodiodes in use during the sample.
- [signalIdentifier](signalidentifier.md): The identifier for a signal that photodiodes and emitters produce.
- [nominalWavelength](nominalwavelength.md): The wavelength in nanometers that the emitter produces while operating at a specific temperature.
- [effectiveWavelength](effectivewavelength.md): A temperature-compensated wavelength estimate in nanometers that the emitter produces.
- [samplingFrequency](samplingfrequency.md): The sampling frequency of the photoplethysmogram (PPG) data in hertz.
- [conditions](conditions.md): The sensor context or conditions that may affect the sample.
- [SRPhotoplethysmogramOpticalSample.Condition](condition.md): The conditions that may occur when recording photoplethysmogram optical data.
- [noiseTerms](noiseterms-swift.property.md): The mathematical terms for computing the noise in this sample.
- [SRPhotoplethysmogramOpticalSample.NoiseTerms](noiseterms-swift.struct.md): The mathematical terms that you use to compute the photoplethysmogram (PPG) noise.
- [normalizedReflectance](normalizedreflectance-15f2k.md)

# nanosecondsSinceStart (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The time in nanoseconds since the system turns on the sensor.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) int64_t nanosecondsSinceStart;
```

## See Also

### Accessing optical data

- [emitter](emitter.md): The index of the LED in use during the sample.
- [activePhotodiodeIndexes](activephotodiodeindexes.md): The set of photodiodes in use during the sample.
- [signalIdentifier](signalidentifier.md): The identifier for a signal that photodiodes and emitters produce.
- [nominalWavelength](nominalwavelength.md): The wavelength in nanometers that the emitter produces while operating at a specific temperature.
- [effectiveWavelength](effectivewavelength.md): A temperature-compensated wavelength estimate in nanometers that the emitter produces.
- [samplingFrequency](samplingfrequency.md): The sampling frequency of the photoplethysmogram (PPG) data in hertz.
- [conditions](conditions.md): The sensor context or conditions that may affect the sample.
- [SRPhotoplethysmogramOpticalSampleCondition](condition.md): The conditions that may occur when recording photoplethysmogram optical data.
- [whiteNoise](whitenoise.md): An estimate of the white noise of the sensor.
- [pinkNoise](pinknoise.md): An estimate of the pink noise of the sensor.
- [backgroundNoise](backgroundnoise.md): An estimated timeseries of ambient noise intrusion.
- [backgroundNoiseOffset](backgroundnoiseoffset.md): The white noise variance estimate in the background noise signal.
- [normalizedReflectance](normalizedreflectance-9aidm.md): The photoplethysmogram waveform in normalized units.
