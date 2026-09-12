> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel/inverse](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel/inverse)

# AVAudioEnvironmentDistanceAttenuationModel.inverse (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An inverse model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```swift
case inverse
```

<a id="Discussion"></a>

## Discussion

The framework calculates this value as `distanceGain = referenceDistance / (referenceDistance + rolloffFactor * (distance – referenceDistance))`.

## See Also

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModel.exponential](exponential.md): An exponential model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModel.linear](linear.md): A linear model that describes the drop-off in gain as the source moves away from the listener.

# AVAudioEnvironmentDistanceAttenuationModelInverse (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An inverse model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```objectivec
AVAudioEnvironmentDistanceAttenuationModelInverse
```

<a id="Discussion"></a>

## Discussion

The framework calculates this value as `distanceGain = referenceDistance / (referenceDistance + rolloffFactor * (distance – referenceDistance))`.

## See Also

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModelExponential](exponential.md): An exponential model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModelLinear](linear.md): A linear model that describes the drop-off in gain as the source moves away from the listener.
