> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/rollofffactor](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/rollofffactor)

# rolloffFactor (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A factor that determines the attenuation curve.

## Declaration

```swift
var rolloffFactor: Float { get set }
```

<a id="Discussion"></a>

## Discussion

A higher value results in a steeper attenuation curve. The default value is `1.0`, and the value must be greater than `0.0`.

This property is relevant for [AVAudioEnvironmentDistanceAttenuationModel.exponential](../avaudioenvironmentdistanceattenuationmodel/exponential.md), [AVAudioEnvironmentDistanceAttenuationModel.inverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md), and [AVAudioEnvironmentDistanceAttenuationModel.linear](../avaudioenvironmentdistanceattenuationmodel/linear.md).

## See Also

### Getting and Setting the Attenuation Values

- [maximumDistance](maximumdistance.md): The distance beyond which the node applies no further attenuation, in meters.
- [referenceDistance](referencedistance.md): The minimum distance at which the node applies attenuation, in meters.

# rolloffFactor (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A factor that determines the attenuation curve.

## Declaration

```objectivec
@property (nonatomic) float rolloffFactor;
```

<a id="Discussion"></a>

## Discussion

A higher value results in a steeper attenuation curve. The default value is `1.0`, and the value must be greater than `0.0`.

This property is relevant for [AVAudioEnvironmentDistanceAttenuationModelExponential](../avaudioenvironmentdistanceattenuationmodel/exponential.md), [AVAudioEnvironmentDistanceAttenuationModelInverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md), and [AVAudioEnvironmentDistanceAttenuationModelLinear](../avaudioenvironmentdistanceattenuationmodel/linear.md).

## See Also

### Getting and Setting the Attenuation Values

- [maximumDistance](maximumdistance.md): The distance beyond which the node applies no further attenuation, in meters.
- [referenceDistance](referencedistance.md): The minimum distance at which the node applies attenuation, in meters.
