> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecalibrationmode](https://developer.apple.com/documentation/phase/phasecalibrationmode)

# PHASECalibrationMode (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Calibration options for sound pressure level.

## Declaration

```swift
enum PHASECalibrationMode
```

## Topics

### Modes

- [PHASECalibrationMode.absoluteSpl](phasecalibrationmode/absolutespl.md): A sound pressure level based on the current output device.
- [PHASECalibrationMode.none](phasecalibrationmode/none.md): An option that specifies no loudness calibration.
- [PHASECalibrationMode.relativeSpl](phasecalibrationmode/relativespl.md): A sound pressure level that’s tuned for the device.

### Initializers

- [init(rawValue:)](phasecalibrationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

# PHASECalibrationMode (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Calibration options for sound pressure level.

## Declaration

```objectivec
enum PHASECalibrationMode : NSInteger;
```

## Topics

### Modes

- [PHASECalibrationModeAbsoluteSpl](phasecalibrationmode/absolutespl.md): A sound pressure level based on the current output device.
- [PHASECalibrationModeNone](phasecalibrationmode/none.md): An option that specifies no loudness calibration.
- [PHASECalibrationModeRelativeSpl](phasecalibrationmode/relativespl.md): A sound pressure level that’s tuned for the device.

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.
