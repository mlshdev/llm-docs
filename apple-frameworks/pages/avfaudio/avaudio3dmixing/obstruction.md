> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixing/obstruction](https://developer.apple.com/documentation/avfaudio/avaudio3dmixing/obstruction)

# obstruction (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that simulates filtering of the direct path of sound due to an obstacle.

## Declaration

```swift
var obstruction: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The value of `obstruction` is in decibels. The system blocks only the direct path of sound between the source and listener.

The default value is `0.0`, and the range of valid values is `-100` to `0`. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](position.md): The location of the source in the 3D environment.
- [rate](rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.

# obstruction (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that simulates filtering of the direct path of sound due to an obstacle.

## Declaration

```objectivec
@property (nonatomic) float obstruction;
```

<a id="Discussion"></a>

## Discussion

The value of `obstruction` is in decibels. The system blocks only the direct path of sound between the source and listener.

The default value is `0.0`, and the range of valid values is `-100` to `0`. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](position.md): The location of the source in the 3D environment.
- [rate](rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.
