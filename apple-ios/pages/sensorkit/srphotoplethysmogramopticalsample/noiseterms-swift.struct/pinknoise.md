> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample/noiseterms-swift.struct/pinknoise](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample/noiseterms-swift.struct/pinknoise)

# pinkNoise

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An estimate of the pink noise of the sensor.

## Declaration

```swift
let pinkNoise: Double
```

<a id="Discussion"></a>

## Discussion

The total pink noise variance estimate in the [normalizedReflectance](../normalizedreflectance-15f2k.md) signal (Normalized Units²).

## See Also

### Accessing noise terms

- [whiteNoise](whitenoise.md): An estimate of the white noise of the sensor.
- [backgroundNoise](backgroundnoise.md): An estimated timeseries of ambient noise intrusion.
- [backgroundNoiseOffset](backgroundnoiseoffset.md): The white noise variance estimate in the background noise signal.
