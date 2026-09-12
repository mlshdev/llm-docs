> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixing/position](https://developer.apple.com/documentation/avfaudio/avaudio3dmixing/position)

# position (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The location of the source in the 3D environment.

## Declaration

```swift
var position: AVAudio3DPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The system specifies the coordinates in meters. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [obstruction](obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [rate](rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.

# position (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The location of the source in the 3D environment.

## Declaration

```objectivec
@property (nonatomic) AVAudio3DPoint position;
```

<a id="Discussion"></a>

## Discussion

The system specifies the coordinates in meters. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting the 3D Mixing Parameters

- [obstruction](obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [rate](rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](sourcemode.md): The source mode for the input bus of the audio environment node.
