> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/schedulebuffer(_:completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/schedulebuffer(_:completionhandler:))

# scheduleBuffer(\_:completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules the playing samples from an audio buffer.

## Declaration

```swift
func scheduleBuffer(_ buffer: AVAudioPCMBuffer, completionHandler: (@Sendable () -> Void)? = nil)
```

```swift
func scheduleBuffer(_ buffer: AVAudioPCMBuffer) async
```

## Parameters

- `buffer`: The buffer to play.
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
- [scheduleBuffer(\_:at:options:completionCallbackType:completionHandler:)](schedulebuffer%28__at_options_completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the playback options you specify.
- [scheduleBuffer(\_:completionCallbackType:completionHandler:)](schedulebuffer%28__completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the callback option you specify.
- [AVAudioPlayerNodeBufferOptions](../avaudioplayernodebufferoptions.md): The buffer options that control the playback scheduling.
- [AVAudioPlayerNodeCompletionCallbackType](../avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](../avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.

# scheduleBuffer:completionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Schedules the playing samples from an audio buffer.

## Declaration

```objectivec
- (void) scheduleBuffer:(AVAudioPCMBuffer *) buffer completionHandler:(AVAudioNodeCompletionHandler) completionHandler;
```

## Parameters

- `buffer`: The buffer to play.
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
- [scheduleBuffer:atTime:options:completionCallbackType:completionHandler:](schedulebuffer%28__at_options_completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the playback options you specify.
- [scheduleBuffer:completionCallbackType:completionHandler:](schedulebuffer%28__completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the callback option you specify.
- [AVAudioPlayerNodeBufferOptions](../avaudioplayernodebufferoptions.md): The buffer options that control the playback scheduling.
- [AVAudioPlayerNodeCompletionCallbackType](../avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](../avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.
