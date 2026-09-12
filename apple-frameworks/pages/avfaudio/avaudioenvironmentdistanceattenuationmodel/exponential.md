> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel/exponential](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel/exponential)

# AVAudioEnvironmentDistanceAttenuationModel.exponential (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An exponential model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```swift
case exponential
```

<a id="Discussion"></a>

## Discussion

The framework calculates this value as `distanceGain = (distance / referenceDistance) ^ (-rolloffFactor)`.

## See Also

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModel.inverse](inverse.md): An inverse model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModel.linear](linear.md): A linear model that describes the drop-off in gain as the source moves away from the listener.

# AVAudioEnvironmentDistanceAttenuationModelExponential (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An exponential model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```objectivec
AVAudioEnvironmentDistanceAttenuationModelExponential
```

<a id="Discussion"></a>

## Discussion

The framework calculates this value as `distanceGain = (distance / referenceDistance) ^ (-rolloffFactor)`.

## See Also

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModelInverse](inverse.md): An inverse model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModelLinear](linear.md): A linear model that describes the drop-off in gain as the source moves away from the listener.
