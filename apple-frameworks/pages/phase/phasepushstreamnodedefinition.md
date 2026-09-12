> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnodedefinition](https://developer.apple.com/documentation/phase/phasepushstreamnodedefinition)

# PHASEPushStreamNodeDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that plays a sequence of audio buffers.

## Declaration

```swift
class PHASEPushStreamNodeDefinition
```

<a id="overview"></a>

## Overview

Use this node to create sound events for a piecemeal audio source, for example, an audio stream that your app accesses over the network or loads from a memory-mapped file on disk.

> **Note**

>  To create a sound event for fully-loaded audio data instead, use [PHASESamplerNodeDefinition](phasesamplernodedefinition.md).

## Topics

### Creating a Node

- [init(mixerDefinition:format:)](phasepushstreamnodedefinition/init%28mixerdefinition_format_%29.md): Creates a node definition for audio streams.
- [init(mixerDefinition:format:identifier:)](phasepushstreamnodedefinition/init%28mixerdefinition_format_identifier_%29.md): Creates a named node definition for audio streams.

### Observing the Format

- [format](phasepushstreamnodedefinition/format.md): The format of the audio stream data.

### Shaping Loudness

- [normalize](phasepushstreamnodedefinition/normalize.md): An option that resizes loudness of the audio stream for consistency.

## Relationships

### Inherits From

- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md)

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
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

# PHASEPushStreamNodeDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that plays a sequence of audio buffers.

## Declaration

```objectivec
@interface PHASEPushStreamNodeDefinition : PHASEGeneratorNodeDefinition
```

<a id="overview"></a>

## Overview

Use this node to create sound events for a piecemeal audio source, for example, an audio stream that your app accesses over the network or loads from a memory-mapped file on disk.

> **Note**

>  To create a sound event for fully-loaded audio data instead, use [PHASESamplerNodeDefinition](phasesamplernodedefinition.md).

## Topics

### Creating a Node

- [initWithMixerDefinition:format:](phasepushstreamnodedefinition/init%28mixerdefinition_format_%29.md): Creates a node definition for audio streams.
- [initWithMixerDefinition:format:identifier:](phasepushstreamnodedefinition/init%28mixerdefinition_format_identifier_%29.md): Creates a named node definition for audio streams.

### Observing the Format

- [format](phasepushstreamnodedefinition/format.md): The format of the audio stream data.

### Shaping Loudness

- [normalize](phasepushstreamnodedefinition/normalize.md): An option that resizes loudness of the audio stream for consistency.

## Relationships

### Inherits From

- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md)

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.
