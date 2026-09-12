> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegeneratornodedefinition](https://developer.apple.com/documentation/phase/phasegeneratornodedefinition)

# PHASEGeneratorNodeDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class for nodes that provide audio data to generate sound.

## Declaration

```swift
class PHASEGeneratorNodeDefinition
```

<a id="overview"></a>

## Overview

This class encapsulates shared logic for subclasses that provide audio data to a mixer for sound output, namely [PHASESamplerNodeDefinition](phasesamplernodedefinition.md) and [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md).

## Topics

### Calibrating Loudness

- [setCalibrationMode(calibrationMode:level:)](phasegeneratornodedefinition/setcalibrationmode%28calibrationmode_level_%29.md): Selects a loudness correction strategy and reference level.
- [calibrationMode](phasegeneratornodedefinition/calibrationmode.md): A sound pressure level strategy for loudness correction.
- [level](phasegeneratornodedefinition/level.md): The node’s loudness.

### Defining an Output Strategy

- [mixerDefinition](phasegeneratornodedefinition/mixerdefinition.md): An object that combines audio layers for the node’s output.

### Joining a Group

- [group](phasegeneratornodedefinition/group.md): A group this node conforms to for gain and rate control.

### Controlling Audio Playback

- [rate](phasegeneratornodedefinition/rate.md): A playback speed for the node’s audio.
- [rateMetaParameterDefinition](phasegeneratornodedefinition/ratemetaparameterdefinition.md): A meta parameter that dynamically changes the audio’s rate.
- [gainMetaParameterDefinition](phasegeneratornodedefinition/gainmetaparameterdefinition.md): A meta parameter that dynamically changes the audio’s loudness.

## Relationships

### Inherits From

- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

### Inherited By

- [PHASEPullStreamNodeDefinition](phasepullstreamnodedefinition.md)
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md)
- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.

# PHASEGeneratorNodeDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class for nodes that provide audio data to generate sound.

## Declaration

```objectivec
@interface PHASEGeneratorNodeDefinition : PHASESoundEventNodeDefinition
```

<a id="overview"></a>

## Overview

This class encapsulates shared logic for subclasses that provide audio data to a mixer for sound output, namely [PHASESamplerNodeDefinition](phasesamplernodedefinition.md) and [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md).

## Topics

### Calibrating Loudness

- [setCalibrationMode:level:](phasegeneratornodedefinition/setcalibrationmode%28calibrationmode_level_%29.md): Selects a loudness correction strategy and reference level.
- [calibrationMode](phasegeneratornodedefinition/calibrationmode.md): A sound pressure level strategy for loudness correction.
- [level](phasegeneratornodedefinition/level.md): The node’s loudness.

### Defining an Output Strategy

- [mixerDefinition](phasegeneratornodedefinition/mixerdefinition.md): An object that combines audio layers for the node’s output.

### Joining a Group

- [group](phasegeneratornodedefinition/group.md): A group this node conforms to for gain and rate control.

### Controlling Audio Playback

- [rate](phasegeneratornodedefinition/rate.md): A playback speed for the node’s audio.
- [rateMetaParameterDefinition](phasegeneratornodedefinition/ratemetaparameterdefinition.md): A meta parameter that dynamically changes the audio’s rate.
- [gainMetaParameterDefinition](phasegeneratornodedefinition/gainmetaparameterdefinition.md): A meta parameter that dynamically changes the audio’s loudness.

## Relationships

### Inherits From

- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

### Inherited By

- [PHASEPullStreamNodeDefinition](phasepullstreamnodedefinition.md)
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md)
- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md)

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
