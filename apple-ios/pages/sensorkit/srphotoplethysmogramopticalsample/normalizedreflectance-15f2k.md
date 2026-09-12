> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample/normalizedreflectance-15f2k](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample/normalizedreflectance-15f2k)

# normalizedReflectance

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

## Declaration

```swift
var normalizedReflectance: Double? { get }
```

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
- [SRPhotoplethysmogramOpticalSample.Condition](condition.md): The conditions that may occur when recording photoplethysmogram optical data.
- [noiseTerms](noiseterms-swift.property.md): The mathematical terms for computing the noise in this sample.
- [SRPhotoplethysmogramOpticalSample.NoiseTerms](noiseterms-swift.struct.md): The mathematical terms that you use to compute the photoplethysmogram (PPG) noise.
