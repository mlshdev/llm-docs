> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample/noiseterms-swift.struct/backgroundnoise](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample/noiseterms-swift.struct/backgroundnoise)

# backgroundNoise

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

An estimated timeseries of ambient noise intrusion.

## Declaration

```swift
let backgroundNoise: Double
```

<a id="Discussion"></a>

## Discussion

The sensor’s estimate of ambient noise intrusion in the [normalizedReflectance](../normalizedreflectance-15f2k.md) signal (Normalized Units).

## See Also

### Accessing noise terms

- [whiteNoise](whitenoise.md): An estimate of the white noise of the sensor.
- [pinkNoise](pinknoise.md): An estimate of the pink noise of the sensor.
- [backgroundNoiseOffset](backgroundnoiseoffset.md): The white noise variance estimate in the background noise signal.
