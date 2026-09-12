> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesamplernodedefinition](https://developer.apple.com/documentation/phase/phasesamplernodedefinition)

# PHASESamplerNodeDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that plays complete audio data.

## Declaration

```swift
class PHASESamplerNodeDefinition
```

<a id="overview"></a>

## Overview

Generate sound events from this node to play audio data that your app loads completely, either from disk or from memory.

## Topics

### Creating a Sampler Node

- [init(soundAssetIdentifier:mixerDefinition:)](phasesamplernodedefinition/init%28soundassetidentifier_mixerdefinition_%29.md): Creates a sampler node with the given sound asset and mixer.
- [init(soundAssetIdentifier:mixerDefinition:identifier:)](phasesamplernodedefinition/init%28soundassetidentifier_mixerdefinition_identifier_%29.md): Creates a named sampler node with the given sound asset and mixer.

### Identifying the Audio

- [assetIdentifier](phasesamplernodedefinition/assetidentifier.md): The name of the audio this node plays.

### Defining Cull Behavior

- [cullOption](phasesamplernodedefinition/culloption.md): The action the engine performs after it temporarily removes the node’s sound from the audio output.
- [PHASECullOption](phaseculloption.md): The actions the engine takes when it culls sound.

### Looping the Audio

- [playbackMode](phasesamplernodedefinition/playbackmode.md): An option that determines whether the node’s audio plays in a loop.

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

- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

# PHASESamplerNodeDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A node that plays complete audio data.

## Declaration

```objectivec
@interface PHASESamplerNodeDefinition : PHASEGeneratorNodeDefinition
```

<a id="overview"></a>

## Overview

Generate sound events from this node to play audio data that your app loads completely, either from disk or from memory.

## Topics

### Creating a Sampler Node

- [initWithSoundAssetIdentifier:mixerDefinition:](phasesamplernodedefinition/init%28soundassetidentifier_mixerdefinition_%29.md): Creates a sampler node with the given sound asset and mixer.
- [initWithSoundAssetIdentifier:mixerDefinition:identifier:](phasesamplernodedefinition/init%28soundassetidentifier_mixerdefinition_identifier_%29.md): Creates a named sampler node with the given sound asset and mixer.

### Identifying the Audio

- [assetIdentifier](phasesamplernodedefinition/assetidentifier.md): The name of the audio this node plays.

### Defining Cull Behavior

- [cullOption](phasesamplernodedefinition/culloption.md): The action the engine performs after it temporarily removes the node’s sound from the audio output.
- [PHASECullOption](phaseculloption.md): The actions the engine takes when it culls sound.

### Looping the Audio

- [playbackMode](phasesamplernodedefinition/playbackmode.md): An option that determines whether the node’s audio plays in a loop.

## Relationships

### Inherits From

- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md)

## See Also

### Audio-Providing Nodes

- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.
