> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernodecompletionhandler](https://developer.apple.com/documentation/avfaudio/avaudioplayernodecompletionhandler)

# AVAudioPlayerNodeCompletionHandler (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The callback handler for buffer or file completion.

## Declaration

```swift
typealias AVAudioPlayerNodeCompletionHandler = (AVAudioPlayerNodeCompletionCallbackType) -> Void
```

## Parameters

- `callbackType`: The option to specify when the system must call the completion handler.

## See Also

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

# AVAudioPlayerNodeCompletionHandler (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The callback handler for buffer or file completion.

## Declaration

```objectivec
typedef void (^)(enum AVAudioPlayerNodeCompletionCallbackType) AVAudioPlayerNodeCompletionHandler;
```

## Parameters

- `callbackType`: The option to specify when the system must call the completion handler.

## See Also

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
