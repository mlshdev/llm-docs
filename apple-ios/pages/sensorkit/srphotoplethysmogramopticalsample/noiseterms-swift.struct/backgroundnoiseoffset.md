> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramopticalsample/noiseterms-swift.struct/backgroundnoiseoffset](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramopticalsample/noiseterms-swift.struct/backgroundnoiseoffset)

# backgroundNoiseOffset

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The white noise variance estimate in the background noise signal.

## Declaration

```swift
let backgroundNoiseOffset: Double
```

<a id="Discussion"></a>

## Discussion

This value represents the white noise variance estimate per Hz in the [backgroundNoise](backgroundnoise.md) signal (Normalized Units²/Hz). Apply the noise equivalent bandwidth factor to account for in-band noise for your setup.

## See Also

### Accessing noise terms

- [whiteNoise](whitenoise.md): An estimate of the white noise of the sensor.
- [pinkNoise](pinknoise.md): An estimate of the pink noise of the sensor.
- [backgroundNoise](backgroundnoise.md): An estimated timeseries of ambient noise intrusion.
