> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/distanceattenuationmodel](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters/distanceattenuationmodel)

# distanceAttenuationModel (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The distance attenuation model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```swift
var distanceAttenuationModel: AVAudioEnvironmentDistanceAttenuationModel { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is the [AVAudioEnvironmentDistanceAttenuationModel.inverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md) attenuation model.

## See Also

### Getting and Setting the Attenuation Model

- [AVAudioEnvironmentDistanceAttenuationModel](../avaudioenvironmentdistanceattenuationmodel.md): Types of distance attenuation models.

# distanceAttenuationModel (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The distance attenuation model that describes the drop-off in gain as the source moves away from the listener.

## Declaration

```objectivec
@property (nonatomic) AVAudioEnvironmentDistanceAttenuationModel distanceAttenuationModel;
```

<a id="Discussion"></a>

## Discussion

The default value is the [AVAudioEnvironmentDistanceAttenuationModelInverse](../avaudioenvironmentdistanceattenuationmodel/inverse.md) attenuation model.

## See Also

### Getting and Setting the Attenuation Model

- [AVAudioEnvironmentDistanceAttenuationModel](../avaudioenvironmentdistanceattenuationmodel.md): Types of distance attenuation models.
