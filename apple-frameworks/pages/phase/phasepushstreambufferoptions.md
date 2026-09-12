> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreambufferoptions](https://developer.apple.com/documentation/phase/phasepushstreambufferoptions)

# PHASEPushStreamBufferOptions (Swift)

**Framework:** PHASE  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that inform PHASE of an audio-stream buffer’s playback priority.

## Declaration

```swift
struct PHASEPushStreamBufferOptions
```

<a id="overview"></a>

## Overview

When your app provides audio buffers that PHASE plays through a [PHASEPushStreamNode](phasepushstreamnode.md), use this structure to inform PHASE of a particular buffer’s priority.

Associate an option to a particular buffer by passing it in to the [scheduleBuffer(buffer:time:options:)](phasepushstreamnode/schedulebuffer%28buffer_time_options_%29.md) function of a [PHASEPushStreamNode](phasepushstreamnode.md).

## Topics

### Creating an Option

- [init(rawValue:)](phasepushstreambufferoptions/init%28rawvalue_%29.md): Creates a push stream buffer option with the given raw value.

### Options

- [default](phasepushstreambufferoptions/default.md): Indicates a buffer processes after existing buffers in the queue.
- [interrupts](phasepushstreambufferoptions/interrupts.md): Indicates a buffer begins processing immediately.
- [interruptsAtLoop](phasepushstreambufferoptions/interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.
- [loops](phasepushstreambufferoptions/loops.md): Indicates a buffer restarts after it finishes processing.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

# PHASEPushStreamBufferOptions (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that inform PHASE of an audio-stream buffer’s playback priority.

## Declaration

```objectivec
enum PHASEPushStreamBufferOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

When your app provides audio buffers that PHASE plays through a [PHASEPushStreamNode](phasepushstreamnode.md), use this structure to inform PHASE of a particular buffer’s priority.

Associate an option to a particular buffer by passing it in to the [scheduleBuffer:atTime:options:](phasepushstreamnode/schedulebuffer%28buffer_time_options_%29.md) function of a [PHASEPushStreamNode](phasepushstreamnode.md).

## Topics

### Options

- [PHASEPushStreamBufferDefault](phasepushstreambufferoptions/default.md): Indicates a buffer processes after existing buffers in the queue.
- [PHASEPushStreamBufferInterrupts](phasepushstreambufferoptions/interrupts.md): Indicates a buffer begins processing immediately.
- [PHASEPushStreamBufferInterruptsAtLoop](phasepushstreambufferoptions/interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.
- [PHASEPushStreamBufferLoops](phasepushstreambufferoptions/loops.md): Indicates a buffer restarts after it finishes processing.

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.
