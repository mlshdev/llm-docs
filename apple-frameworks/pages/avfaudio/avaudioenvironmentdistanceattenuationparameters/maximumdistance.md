> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/maximumdistance](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/maximumdistance)

# maximumDistance (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The distance beyond which the node applies no further attenuation, in meters.

## Declaration

```swift
var maximumDistance: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `100000.0` meters.

This property is relevant for [AVAudioEnvironmentDistanceAttenuationModel.inverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md).

## See Also

### Getting and Setting the Attenuation Values

- [referenceDistance](referencedistance.md): The minimum distance at which the node applies attenuation, in meters.
- [rolloffFactor](rollofffactor.md): A factor that determines the attenuation curve.

# maximumDistance (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The distance beyond which the node applies no further attenuation, in meters.

## Declaration

```objectivec
@property (nonatomic) float maximumDistance;
```

<a id="Discussion"></a>

## Discussion

The default value is `100000.0` meters.

This property is relevant for [AVAudioEnvironmentDistanceAttenuationModelInverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md).

## See Also

### Getting and Setting the Attenuation Values

- [referenceDistance](referencedistance.md): The minimum distance at which the node applies attenuation, in meters.
- [rolloffFactor](rollofffactor.md): A factor that determines the attenuation curve.
