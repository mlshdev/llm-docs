> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode](https://developer.apple.com/documentation/phase/phasepushstreamnode)

# PHASEPushStreamNode (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio stream you manage to provide a sound buffer data.

## Declaration

```swift
class PHASEPushStreamNode
```

<a id="overview"></a>

## Overview

A sound event’s [pushStreamNodes](phasesoundevent/pushstreamnodes.md) dictionary populates with an instance of this class when PHASE invokes a  [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md) in your event node tree.

Your app provides the audio data that the sound event plays by calling one or more of this class’s buffer-scheduling functions, for example, [scheduleBuffer(buffer:)](phasepushstreamnode/schedulebuffer%28buffer_%29.md).

## Topics

### Inspecting Stream Properties

- [mixer](phasepushstreamnode/mixer.md): The audio stream’s output pipeline.
- [format](phasepushstreamnode/format.md): The format of the audio stream data.

### Providing Audio Data

- [scheduleBuffer(buffer:)](phasepushstreamnode/schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer(buffer:time:options:)](phasepushstreamnode/schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer(buffer:time:options:completionCallbackType:completionHandler:)](phasepushstreamnode/schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer(buffer:completionCallbackType:completionHandler:)](phasepushstreamnode/schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.

### Controlling Playback

- [gainMetaParameter](phasepushstreamnode/gainmetaparameter.md): A meta parameter for dynamic loudness control.
- [rateMetaParameter](phasepushstreamnode/ratemetaparameter.md): A meta parameter for dynamic rate control.

## Relationships

### Inherits From

- [PHASEStreamNode](phasestreamnode.md)

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
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

# PHASEPushStreamNode (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio stream you manage to provide a sound buffer data.

## Declaration

```objectivec
@interface PHASEPushStreamNode : PHASEStreamNode
```

<a id="overview"></a>

## Overview

A sound event’s [pushStreamNodes](phasesoundevent/pushstreamnodes.md) dictionary populates with an instance of this class when PHASE invokes a  [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md) in your event node tree.

Your app provides the audio data that the sound event plays by calling one or more of this class’s buffer-scheduling functions, for example, [scheduleBuffer:](phasepushstreamnode/schedulebuffer%28buffer_%29.md).

## Topics

### Inspecting Stream Properties

- [mixer](phasepushstreamnode/mixer.md): The audio stream’s output pipeline.
- [format](phasepushstreamnode/format.md): The format of the audio stream data.

### Providing Audio Data

- [scheduleBuffer:](phasepushstreamnode/schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer:atTime:options:](phasepushstreamnode/schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer:atTime:options:completionCallbackType:completionHandler:](phasepushstreamnode/schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer:completionCallbackType:completionHandler:](phasepushstreamnode/schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.

### Controlling Playback

- [gainMetaParameter](phasepushstreamnode/gainmetaparameter.md): A meta parameter for dynamic loudness control.
- [rateMetaParameter](phasepushstreamnode/ratemetaparameter.md): A meta parameter for dynamic rate control.

## Relationships

### Inherits From

- [PHASEStreamNode](phasestreamnode.md)

## See Also

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.
