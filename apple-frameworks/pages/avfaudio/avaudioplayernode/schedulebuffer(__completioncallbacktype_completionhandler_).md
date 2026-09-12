> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/schedulebuffer(_:completioncallbacktype:completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/schedulebuffer(_:completioncallbacktype:completionhandler:))

# scheduleBuffer(\_:completionCallbackType:completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Schedules the playing samples from an audio buffer with the callback option you specify.

## Declaration

```swift
func scheduleBuffer(_ buffer: AVAudioPCMBuffer, completionCallbackType callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: (@Sendable (AVAudioPlayerNodeCompletionCallbackType) -> Void)? = nil)
```

```swift
func scheduleBuffer(_ buffer: AVAudioPCMBuffer, completionCallbackType callbackType: AVAudioPlayerNodeCompletionCallbackType) async -> AVAudioPlayerNodeCompletionCallbackType
```

## Parameters

- `buffer`: The buffer to play.
- `callbackType`: The option to specify when the system must call the completion handler.
- `completionHandler`: The handler the system calls after the player schedules the buffer for playback on the render thread, or the player stops.

<a id="Discussion"></a>

## Discussion

## See Also

### Scheduling Playback

- [scheduleFile(\_:at:completionHandler:)](schedulefile%28__at_completionhandler_%29.md): Schedules the playing of an entire audio file.
- [scheduleFile(\_:at:completionCallbackType:completionHandler:)](schedulefile%28__at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an entire audio file with a callback option you specify.
- [scheduleSegment(\_:startingFrame:frameCount:at:completionHandler:)](schedulesegment%28__startingframe_framecount_at_completionhandler_%29.md): Schedules the playing of an audio file segment.
- [scheduleSegment(\_:startingFrame:frameCount:at:completionCallbackType:completionHandler:)](schedulesegment%28__startingframe_framecount_at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an audio file segment with a callback option you specify.
- [scheduleBuffer(\_:at:options:completionHandler:)](schedulebuffer%28__at_options_completionhandler_%29.md): Schedules the playing samples from an audio buffer at the time and playback options you specify.
- [scheduleBuffer(\_:completionHandler:)](schedulebuffer%28__completionhandler_%29.md): Schedules the playing samples from an audio buffer.
- [scheduleBuffer(\_:at:options:completionCallbackType:completionHandler:)](schedulebuffer%28__at_options_completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the playback options you specify.
- [AVAudioPlayerNodeBufferOptions](../avaudioplayernodebufferoptions.md): The buffer options that control the playback scheduling.
- [AVAudioPlayerNodeCompletionCallbackType](../avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](../avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.

# scheduleBuffer:completionCallbackType:completionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Schedules the playing samples from an audio buffer with the callback option you specify.

## Declaration

```objectivec
- (void) scheduleBuffer:(AVAudioPCMBuffer *) buffer completionCallbackType:(AVAudioPlayerNodeCompletionCallbackType) callbackType completionHandler:(AVAudioPlayerNodeCompletionHandler) completionHandler;
```

## Parameters

- `buffer`: The buffer to play.
- `callbackType`: The option to specify when the system must call the completion handler.
- `completionHandler`: The handler the system calls after the player schedules the buffer for playback on the render thread, or the player stops.

<a id="Discussion"></a>

## Discussion

## See Also

### Scheduling Playback

- [scheduleFile:atTime:completionHandler:](schedulefile%28__at_completionhandler_%29.md): Schedules the playing of an entire audio file.
- [scheduleFile:atTime:completionCallbackType:completionHandler:](schedulefile%28__at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an entire audio file with a callback option you specify.
- [scheduleSegment:startingFrame:frameCount:atTime:completionHandler:](schedulesegment%28__startingframe_framecount_at_completionhandler_%29.md): Schedules the playing of an audio file segment.
- [scheduleSegment:startingFrame:frameCount:atTime:completionCallbackType:completionHandler:](schedulesegment%28__startingframe_framecount_at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an audio file segment with a callback option you specify.
- [scheduleBuffer:atTime:options:completionHandler:](schedulebuffer%28__at_options_completionhandler_%29.md): Schedules the playing samples from an audio buffer at the time and playback options you specify.
- [scheduleBuffer:completionHandler:](schedulebuffer%28__completionhandler_%29.md): Schedules the playing samples from an audio buffer.
- [scheduleBuffer:atTime:options:completionCallbackType:completionHandler:](schedulebuffer%28__at_options_completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the playback options you specify.
- [AVAudioPlayerNodeBufferOptions](../avaudioplayernodebufferoptions.md): The buffer options that control the playback scheduling.
- [AVAudioPlayerNodeCompletionCallbackType](../avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](../avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.
