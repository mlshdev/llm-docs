> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixing/reverbblend](https://developer.apple.com/documentation/avfaudio/avaudio3dmixing/reverbblend)

# reverbBlend (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that controls the blend of dry and reverb processed audio.

## Declaration

```swift
var reverbBlend: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls the amount of the source’s audio that the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) instance processes. A value of `0.5` results in an equal blend of dry and processed (wet) audio.

The default is `0.0`, and the range of valid values is `0.0` (completely dry) to `1.0` (completely wet). Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [obstruction](obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](position.md): The location of the source in the 3D environment.
- [rate](rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.

# reverbBlend (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that controls the blend of dry and reverb processed audio.

## Declaration

```objectivec
@property (nonatomic) float reverbBlend;
```

<a id="Discussion"></a>

## Discussion

This property controls the amount of the source’s audio that the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) instance processes. A value of `0.5` results in an equal blend of dry and processed (wet) audio.

The default is `0.0`, and the range of valid values is `0.0` (completely dry) to `1.0` (completely wet). Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [obstruction](obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](position.md): The location of the source in the 3D environment.
- [rate](rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.
