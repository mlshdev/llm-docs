> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/referencedistance](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/referencedistance)

# referenceDistance (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum distance at which the node applies attenuation, in meters.

## Declaration

```swift
var referenceDistance: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0` meter.

This property is relevant for [AVAudioEnvironmentDistanceAttenuationModel.inverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md) and [AVAudioEnvironmentDistanceAttenuationModel.linear](../avaudioenvironmentdistanceattenuationmodel/linear.md).

## See Also

### Getting and Setting the Attenuation Values

- [maximumDistance](maximumdistance.md): The distance beyond which the node applies no further attenuation, in meters.
- [rolloffFactor](rollofffactor.md): A factor that determines the attenuation curve.

# referenceDistance (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum distance at which the node applies attenuation, in meters.

## Declaration

```objectivec
@property (nonatomic) float referenceDistance;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0` meter.

This property is relevant for [AVAudioEnvironmentDistanceAttenuationModelInverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md) and [AVAudioEnvironmentDistanceAttenuationModelLinear](../avaudioenvironmentdistanceattenuationmodel/linear.md).

## See Also

### Getting and Setting the Attenuation Values

- [maximumDistance](maximumdistance.md): The distance beyond which the node applies no further attenuation, in meters.
- [rolloffFactor](rollofffactor.md): A factor that determines the attenuation curve.
