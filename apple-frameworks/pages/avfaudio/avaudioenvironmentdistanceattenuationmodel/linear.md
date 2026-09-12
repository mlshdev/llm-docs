> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel/linear](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel/linear)

# AVAudioEnvironmentDistanceAttenuationModel.linear (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A linear model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```swift
case linear
```

<a id="Discussion"></a>

## Discussion

The framework calculates this value as `distanceGain = (1 – rolloffFactor * (distance – referenceDistance) / (maximumDistance – referenceDistance))`.

## See Also

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModel.exponential](exponential.md): An exponential model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModel.inverse](inverse.md): An inverse model that describes the drop-off in gain as the source moves away from the listener.

# AVAudioEnvironmentDistanceAttenuationModelLinear (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A linear model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```objectivec
AVAudioEnvironmentDistanceAttenuationModelLinear
```

<a id="Discussion"></a>

## Discussion

The framework calculates this value as `distanceGain = (1 – rolloffFactor * (distance – referenceDistance) / (maximumDistance – referenceDistance))`.

## See Also

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModelExponential](exponential.md): An exponential model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModelInverse](inverse.md): An inverse model that describes the drop-off in gain as the source moves away from the listener.
