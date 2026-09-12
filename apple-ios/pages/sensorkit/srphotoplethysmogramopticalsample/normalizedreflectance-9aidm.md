> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample/normalizedreflectance-9aidm](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample/normalizedreflectance-9aidm)

# normalizedReflectance

**Interface language:** Objective-C

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The photoplethysmogram waveform in normalized units.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * normalizedReflectance;
```

<a id="Discussion"></a>

## Discussion

The scale of the normalized signal may vary. For more information on how Apple Watch uses photoplethysmography, see the “How Apple Watch measures your heart rate” section in [Monitor your heart rate with Apple Watch](https://support.apple.com/en-us/120277).

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
- [SRPhotoplethysmogramOpticalSampleCondition](condition.md): The conditions that may occur when recording photoplethysmogram optical data.
- [whiteNoise](whitenoise.md): An estimate of the white noise of the sensor.
- [pinkNoise](pinknoise.md): An estimate of the pink noise of the sensor.
- [backgroundNoise](backgroundnoise.md): An estimated timeseries of ambient noise intrusion.
- [backgroundNoiseOffset](backgroundnoiseoffset.md): The white noise variance estimate in the background noise signal.
