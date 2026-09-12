> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixing/rate](https://developer.apple.com/documentation/avfaudio/avaudio3dmixing/rate)

# rate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that changes the playback rate of the input signal.

## Declaration

```swift
var rate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `2.0` results in the output audio playing one octave higher. A value of `0.5` results in the output audio playing one octave lower.

The default value is `1.0`, and the range of valid values is `0.5` to `2.0`. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [obstruction](obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](position.md): The location of the source in the 3D environment.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.

# rate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that changes the playback rate of the input signal.

## Declaration

```objectivec
@property (nonatomic) float rate;
```

<a id="Discussion"></a>

## Discussion

A value of `2.0` results in the output audio playing one octave higher. A value of `0.5` results in the output audio playing one octave lower.

The default value is `1.0`, and the range of valid values is `0.5` to `2.0`. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [obstruction](obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](position.md): The location of the source in the 3D environment.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.
