> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode](https://developer.apple.com/documentation/avfaudio/avaudioplayernode)

# AVAudioPlayerNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object for scheduling the playback of buffers or segments of audio files.

## Declaration

```swift
class AVAudioPlayerNode
```

<a id="overview"></a>

## Overview

This audio node supports scheduling the playback of [AVAudioPCMBuffer](avaudiopcmbuffer.md) instances, or segments of audio files that you open through [AVAudioFile](avaudiofile.md). You can schedule buffers and segments to play at specific points in time or to play immediately following preceding segments.

Generally, you want to configure the node’s output format with the same number of channels as in the files and buffers. Otherwise, the node drops or adds channels as necessary. It’s usually preferable to use an [AVAudioMixerNode](avaudiomixernode.md) for this configuration.

Similarly, when playing file segments, the node makes sample rate conversions, if necessary. It’s preferable to configure the node’s output sample rate to match that of the files, and to use a mixer to perform the rate conversion.

When playing buffers, there’s an implicit assumption that the buffers are at the same sample rate as the node’s output format.

The [stop()](avaudioplayernode/stop%28%29.md) method unschedules all previously scheduled buffers and file segments, and returns the player timeline to sample time `0`.

> **Note**

>  The `AVAudioPlayerNode` class isn’t key-value observing compliant, and may indicate that Combine publishers are available. Don’t use them for monitoring changes.

<a id="Player-Timeline"></a>

### Player Timeline

The usual [AVAudioNode](avaudionode.md) sample times, which [lastRenderTime](avaudionode/lastrendertime.md) observes, have an arbitrary zero point. The `AVAudioPlayerNode` class superimposes a second player timeline on top of this to reflect when the player starts and intervals when it pauses. The methods [nodeTime(forPlayerTime:)](avaudioplayernode/nodetime%28forplayertime_%29.md) and [playerTime(forNodeTime:)](avaudioplayernode/playertime%28fornodetime_%29.md) convert between the two.

<a id="Scheduling-Playback-Time"></a>

### Scheduling Playback Time

The [scheduleBuffer(\_:at:options:completionHandler:)](avaudioplayernode/schedulebuffer%28__at_options_completionhandler_%29.md), [scheduleFile(\_:at:completionHandler:)](avaudioplayernode/schedulefile%28__at_completionhandler_%29.md), and [scheduleSegment(\_:startingFrame:frameCount:at:completionHandler:)](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completionhandler_%29.md) methods take an [AVAudioTime](avaudiotime.md) `when` parameter, and you interpret it as follows:

- If the `when` parameter is `nil`:
- If there are previous commands, the new one plays immediately following the last one.
- Otherwise, if the node is in a playing state, the event plays in the very near future.
- Otherwise, the command plays at sample time `0`.
- If the `when` parameter is a sample time, the parameter interprets it as such.
- If the `when` parameter is a host time, the system ignores it unless the sample time is invalid when the engine is rendering to an audio device.

The scheduling methods fail if:

- A buffer’s channel count doesn’t match that of the node’s output format.
- The system can’t access a file.
- An [AVAudioTime](avaudiotime.md) doesn’t specify a valid sample time or a host time.
- A segment’s start frame or frame count is a negative value.

<a id="Handling-Buffer-or-File-Completion"></a>

### Handling Buffer or File Completion

The buffer of file completion handlers are a means to schedule more data if available on the player node. For more information on the different completion callback types, see [AVAudioPlayerNodeCompletionCallbackType](avaudioplayernodecompletioncallbacktype.md).

> **Important**

>  Don’t stop a player within a completion handler callback because it can deadlock while trying to unschedule already scheduled buffers.

<a id="Rendering-Offline"></a>

### Rendering Offline

When you use a player node with the engine operating in manual rendering mode, you use the buffer or file completion handlers — [lastRenderTime](avaudionode/lastrendertime.md), [latency](avaudionode/latency.md), and [outputPresentationLatency](avaudionode/outputpresentationlatency.md) — to track how much data the player rendered and how much remains to render.

## Topics

### Creating a Player Node

- [init()](avaudioplayernode/init%28%29.md): Creates an initialized audio player node.

### Scheduling Playback

- [scheduleFile(\_:at:completionHandler:)](avaudioplayernode/schedulefile%28__at_completionhandler_%29.md): Schedules the playing of an entire audio file.
- [scheduleFile(\_:at:completionCallbackType:completionHandler:)](avaudioplayernode/schedulefile%28__at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an entire audio file with a callback option you specify.
- [scheduleSegment(\_:startingFrame:frameCount:at:completionHandler:)](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completionhandler_%29.md): Schedules the playing of an audio file segment.
- [scheduleSegment(\_:startingFrame:frameCount:at:completionCallbackType:completionHandler:)](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an audio file segment with a callback option you specify.
- [scheduleBuffer(\_:at:options:completionHandler:)](avaudioplayernode/schedulebuffer%28__at_options_completionhandler_%29.md): Schedules the playing samples from an audio buffer at the time and playback options you specify.
- [scheduleBuffer(\_:completionHandler:)](avaudioplayernode/schedulebuffer%28__completionhandler_%29.md): Schedules the playing samples from an audio buffer.
- [scheduleBuffer(\_:at:options:completionCallbackType:completionHandler:)](avaudioplayernode/schedulebuffer%28__at_options_completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the playback options you specify.
- [scheduleBuffer(\_:completionCallbackType:completionHandler:)](avaudioplayernode/schedulebuffer%28__completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the callback option you specify.
- [AVAudioPlayerNodeBufferOptions](avaudioplayernodebufferoptions.md): The buffer options that control the playback scheduling.
- [AVAudioPlayerNodeCompletionCallbackType](avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.

### Converting Node and Player Times

- [nodeTime(forPlayerTime:)](avaudioplayernode/nodetime%28forplayertime_%29.md): Converts from player time to node time.
- [playerTime(forNodeTime:)](avaudioplayernode/playertime%28fornodetime_%29.md): Converts from node time to player time.

### Controlling Playback

- [prepare(withFrameCount:)](avaudioplayernode/prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAudio()](avaudioplayernode/playaudio%28%29.md)
- [playAudio(at:)](avaudioplayernode/playaudio%28at_%29.md)
- [play()](avaudioplayernode/play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [play(at:)](avaudioplayernode/play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [isPlaying](avaudioplayernode/isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause()](avaudioplayernode/pause%28%29.md): Pauses the node’s playback.
- [stop()](avaudioplayernode/stop%28%29.md): Clears all of the node’s events you schedule and stops playback.

### Instance Methods

- [scheduleBuffer(\_:atTime:options:completionCallbackType:completionHandler:)](avaudioplayernode/schedulebuffer%28__attime_options_completioncallbacktype_completionhandler_%29-3ewd3.md): Schedules playing samples from an audio buffer.
- [scheduleBuffer(\_:atTime:options:completionCallbackType:completionHandler:)](avaudioplayernode/schedulebuffer%28__attime_options_completioncallbacktype_completionhandler_%29-81qje.md): Schedules playing samples from a read-only audio buffer.

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Conforms To

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioMixing](avaudiomixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback

- [Building an audio sequencer to arrange and play clips](building-an-audio-sequencer-to-arrange-and-play-clips.md): Synchronize audio loops with a main tempo by creating a real-time clip launcher.
- [Playing custom audio with your own player](playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [Using voice processing](using-voice-processing.md): Add voice-processing capabilities to your app by using audio engine.

# AVAudioPlayerNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object for scheduling the playback of buffers or segments of audio files.

## Declaration

```objectivec
@interface AVAudioPlayerNode : AVAudioNode
```

<a id="overview"></a>

## Overview

This audio node supports scheduling the playback of [AVAudioPCMBuffer](avaudiopcmbuffer.md) instances, or segments of audio files that you open through [AVAudioFile](avaudiofile.md). You can schedule buffers and segments to play at specific points in time or to play immediately following preceding segments.

Generally, you want to configure the node’s output format with the same number of channels as in the files and buffers. Otherwise, the node drops or adds channels as necessary. It’s usually preferable to use an [AVAudioMixerNode](avaudiomixernode.md) for this configuration.

Similarly, when playing file segments, the node makes sample rate conversions, if necessary. It’s preferable to configure the node’s output sample rate to match that of the files, and to use a mixer to perform the rate conversion.

When playing buffers, there’s an implicit assumption that the buffers are at the same sample rate as the node’s output format.

The [stop](avaudioplayernode/stop%28%29.md) method unschedules all previously scheduled buffers and file segments, and returns the player timeline to sample time `0`.

> **Note**

>  The `AVAudioPlayerNode` class isn’t key-value observing compliant, and may indicate that Combine publishers are available. Don’t use them for monitoring changes.

<a id="Player-Timeline"></a>

### Player Timeline

The usual [AVAudioNode](avaudionode.md) sample times, which [lastRenderTime](avaudionode/lastrendertime.md) observes, have an arbitrary zero point. The `AVAudioPlayerNode` class superimposes a second player timeline on top of this to reflect when the player starts and intervals when it pauses. The methods [nodeTimeForPlayerTime:](avaudioplayernode/nodetime%28forplayertime_%29.md) and [playerTimeForNodeTime:](avaudioplayernode/playertime%28fornodetime_%29.md) convert between the two.

<a id="Scheduling-Playback-Time"></a>

### Scheduling Playback Time

The [scheduleBuffer:atTime:options:completionHandler:](avaudioplayernode/schedulebuffer%28__at_options_completionhandler_%29.md), [scheduleFile:atTime:completionHandler:](avaudioplayernode/schedulefile%28__at_completionhandler_%29.md), and [scheduleSegment:startingFrame:frameCount:atTime:completionHandler:](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completionhandler_%29.md) methods take an [AVAudioTime](avaudiotime.md) `when` parameter, and you interpret it as follows:

- If the `when` parameter is `nil`:
- If there are previous commands, the new one plays immediately following the last one.
- Otherwise, if the node is in a playing state, the event plays in the very near future.
- Otherwise, the command plays at sample time `0`.
- If the `when` parameter is a sample time, the parameter interprets it as such.
- If the `when` parameter is a host time, the system ignores it unless the sample time is invalid when the engine is rendering to an audio device.

The scheduling methods fail if:

- A buffer’s channel count doesn’t match that of the node’s output format.
- The system can’t access a file.
- An [AVAudioTime](avaudiotime.md) doesn’t specify a valid sample time or a host time.
- A segment’s start frame or frame count is a negative value.

<a id="Handling-Buffer-or-File-Completion"></a>

### Handling Buffer or File Completion

The buffer of file completion handlers are a means to schedule more data if available on the player node. For more information on the different completion callback types, see [AVAudioPlayerNodeCompletionCallbackType](avaudioplayernodecompletioncallbacktype.md).

> **Important**

>  Don’t stop a player within a completion handler callback because it can deadlock while trying to unschedule already scheduled buffers.

<a id="Rendering-Offline"></a>

### Rendering Offline

When you use a player node with the engine operating in manual rendering mode, you use the buffer or file completion handlers — [lastRenderTime](avaudionode/lastrendertime.md), [latency](avaudionode/latency.md), and [outputPresentationLatency](avaudionode/outputpresentationlatency.md) — to track how much data the player rendered and how much remains to render.

## Topics

### Creating a Player Node

- [init](avaudioplayernode/init%28%29.md): Creates an initialized audio player node.

### Scheduling Playback

- [scheduleFile:atTime:completionHandler:](avaudioplayernode/schedulefile%28__at_completionhandler_%29.md): Schedules the playing of an entire audio file.
- [scheduleFile:atTime:completionCallbackType:completionHandler:](avaudioplayernode/schedulefile%28__at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an entire audio file with a callback option you specify.
- [scheduleSegment:startingFrame:frameCount:atTime:completionHandler:](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completionhandler_%29.md): Schedules the playing of an audio file segment.
- [scheduleSegment:startingFrame:frameCount:atTime:completionCallbackType:completionHandler:](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an audio file segment with a callback option you specify.
- [scheduleBuffer:atTime:options:completionHandler:](avaudioplayernode/schedulebuffer%28__at_options_completionhandler_%29.md): Schedules the playing samples from an audio buffer at the time and playback options you specify.
- [scheduleBuffer:completionHandler:](avaudioplayernode/schedulebuffer%28__completionhandler_%29.md): Schedules the playing samples from an audio buffer.
- [scheduleBuffer:atTime:options:completionCallbackType:completionHandler:](avaudioplayernode/schedulebuffer%28__at_options_completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the playback options you specify.
- [scheduleBuffer:completionCallbackType:completionHandler:](avaudioplayernode/schedulebuffer%28__completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the callback option you specify.
- [AVAudioPlayerNodeBufferOptions](avaudioplayernodebufferoptions.md): The buffer options that control the playback scheduling.
- [AVAudioPlayerNodeCompletionCallbackType](avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.

### Converting Node and Player Times

- [nodeTimeForPlayerTime:](avaudioplayernode/nodetime%28forplayertime_%29.md): Converts from player time to node time.
- [playerTimeForNodeTime:](avaudioplayernode/playertime%28fornodetime_%29.md): Converts from node time to player time.

### Controlling Playback

- [prepareWithFrameCount:](avaudioplayernode/prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAndReturnError:](avaudioplayernode/playaudio%28%29.md)
- [playAtTime:error:](avaudioplayernode/playaudio%28at_%29.md)
- [play](avaudioplayernode/play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [playAtTime:](avaudioplayernode/play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [playing](avaudioplayernode/isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause](avaudioplayernode/pause%28%29.md): Pauses the node’s playback.
- [stop](avaudioplayernode/stop%28%29.md): Clears all of the node’s events you schedule and stops playback.

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Playback

- [Building an audio sequencer to arrange and play clips](building-an-audio-sequencer-to-arrange-and-play-clips.md): Synchronize audio loops with a main tempo by creating a real-time clip launcher.
- [Playing custom audio with your own player](playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [Using voice processing](using-voice-processing.md): Add voice-processing capabilities to your app by using audio engine.
