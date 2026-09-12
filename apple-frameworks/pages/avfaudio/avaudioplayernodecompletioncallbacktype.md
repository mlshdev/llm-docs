> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernodecompletioncallbacktype](https://developer.apple.com/documentation/avfaudio/avaudioplayernodecompletioncallbacktype)

# AVAudioPlayerNodeCompletionCallbackType (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify when the framework must invoke the completion handler.

## Declaration

```swift
enum AVAudioPlayerNodeCompletionCallbackType
```

## Topics

### Completion Handler Cases

- [AVAudioPlayerNodeCompletionCallbackType.dataConsumed](avaudioplayernodecompletioncallbacktype/dataconsumed.md): A completion handler that indicates the player consumes the buffer or file data.
- [AVAudioPlayerNodeCompletionCallbackType.dataRendered](avaudioplayernodecompletioncallbacktype/datarendered.md): A completion handler that indicates the player renders the buffer or file data.
- [AVAudioPlayerNodeCompletionCallbackType.dataPlayedBack](avaudioplayernodecompletioncallbacktype/dataplayedback.md): A completion handler that indicates the player finishes the buffer or file data.

### Initializers

- [init(rawValue:)](avaudioplayernodecompletioncallbacktype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [AVAudioPlayerNodeCompletionHandler](avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.

# AVAudioPlayerNodeCompletionCallbackType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify when the framework must invoke the completion handler.

## Declaration

```objectivec
enum AVAudioPlayerNodeCompletionCallbackType : NSInteger;
```

## Topics

### Completion Handler Cases

- [AVAudioPlayerNodeCompletionDataConsumed](avaudioplayernodecompletioncallbacktype/dataconsumed.md): A completion handler that indicates the player consumes the buffer or file data.
- [AVAudioPlayerNodeCompletionDataRendered](avaudioplayernodecompletioncallbacktype/datarendered.md): A completion handler that indicates the player renders the buffer or file data.
- [AVAudioPlayerNodeCompletionDataPlayedBack](avaudioplayernodecompletioncallbacktype/dataplayedback.md): A completion handler that indicates the player finishes the buffer or file data.

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
- [AVAudioPlayerNodeCompletionHandler](avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.
