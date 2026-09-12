> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseplaybackmode](https://developer.apple.com/documentation/phase/phaseplaybackmode)

# PHASEPlaybackMode (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Loop options for audio playback.

## Declaration

```swift
enum PHASEPlaybackMode
```

<a id="overview"></a>

## Overview

This class defines the options for a sampler node’s [playbackMode](phasesamplernodedefinition/playbackmode.md). These options control whether the node’s sound event automatically plays back its audio asset from the beginning after finishing.

## Topics

### Playback Modes

- [PHASEPlaybackMode.oneShot](phaseplaybackmode/oneshot.md): An option that plays a sound only once.
- [PHASEPlaybackMode.looping](phaseplaybackmode/looping.md): An option that restarts a sound from the begining after it finishes.

### Initializers

- [init(rawValue:)](phaseplaybackmode/init%28rawvalue_%29.md)

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
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

# PHASEPlaybackMode (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Loop options for audio playback.

## Declaration

```objectivec
enum PHASEPlaybackMode : NSInteger;
```

<a id="overview"></a>

## Overview

This class defines the options for a sampler node’s [playbackMode](phasesamplernodedefinition/playbackmode.md). These options control whether the node’s sound event automatically plays back its audio asset from the beginning after finishing.

## Topics

### Playback Modes

- [PHASEPlaybackModeOneShot](phaseplaybackmode/oneshot.md): An option that plays a sound only once.
- [PHASEPlaybackModeLooping](phaseplaybackmode/looping.md): An option that restarts a sound from the begining after it finishes.

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.
