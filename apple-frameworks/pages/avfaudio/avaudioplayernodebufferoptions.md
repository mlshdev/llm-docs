> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernodebufferoptions](https://developer.apple.com/documentation/avfaudio/avaudioplayernodebufferoptions)

# AVAudioPlayerNodeBufferOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The buffer options that control the playback scheduling.

## Declaration

```swift
struct AVAudioPlayerNodeBufferOptions
```

## Topics

### Creating a Buffer Option

- [init(rawValue:)](avaudioplayernodebufferoptions/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

### Getting Standard Buffer Options

- [loops](avaudioplayernodebufferoptions/loops.md): An option that indicates the buffer loops indefinitely.
- [interrupts](avaudioplayernodebufferoptions/interrupts.md): An option that indicates the buffer interrupts any buffer in a playing state.
- [interruptsAtLoop](avaudioplayernodebufferoptions/interruptsatloop.md): An option that indicates the buffer interrupts any buffer in a playing state at its loop point.

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

### Scheduling Playback

- [scheduleFile(\_:at:completionHandler:)](avaudioplayernode/schedulefile%28__at_completionhandler_%29.md): Schedules the playing of an entire audio file.
- [scheduleFile(\_:at:completionCallbackType:completionHandler:)](avaudioplayernode/schedulefile%28__at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an entire audio file with a callback option you specify.
- [scheduleSegment(\_:startingFrame:frameCount:at:completionHandler:)](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completionhandler_%29.md): Schedules the playing of an audio file segment.
- [scheduleSegment(\_:startingFrame:frameCount:at:completionCallbackType:completionHandler:)](avaudioplayernode/schedulesegment%28__startingframe_framecount_at_completioncallbacktype_completionhandler_%29.md): Schedules the playing of an audio file segment with a callback option you specify.
- [scheduleBuffer(\_:at:options:completionHandler:)](avaudioplayernode/schedulebuffer%28__at_options_completionhandler_%29.md): Schedules the playing samples from an audio buffer at the time and playback options you specify.
- [scheduleBuffer(\_:completionHandler:)](avaudioplayernode/schedulebuffer%28__completionhandler_%29.md): Schedules the playing samples from an audio buffer.
- [scheduleBuffer(\_:at:options:completionCallbackType:completionHandler:)](avaudioplayernode/schedulebuffer%28__at_options_completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the playback options you specify.
- [scheduleBuffer(\_:completionCallbackType:completionHandler:)](avaudioplayernode/schedulebuffer%28__completioncallbacktype_completionhandler_%29.md): Schedules the playing samples from an audio buffer with the callback option you specify.
- [AVAudioPlayerNodeCompletionCallbackType](avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.

# AVAudioPlayerNodeBufferOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The buffer options that control the playback scheduling.

## Declaration

```objectivec
enum AVAudioPlayerNodeBufferOptions : NSUInteger;
```

## Topics

### Getting Standard Buffer Options

- [AVAudioPlayerNodeBufferLoops](avaudioplayernodebufferoptions/loops.md): An option that indicates the buffer loops indefinitely.
- [AVAudioPlayerNodeBufferInterrupts](avaudioplayernodebufferoptions/interrupts.md): An option that indicates the buffer interrupts any buffer in a playing state.
- [AVAudioPlayerNodeBufferInterruptsAtLoop](avaudioplayernodebufferoptions/interruptsatloop.md): An option that indicates the buffer interrupts any buffer in a playing state at its loop point.

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
- [AVAudioPlayerNodeCompletionCallbackType](avaudioplayernodecompletioncallbacktype.md): Constants that specify when the framework must invoke the completion handler.
- [AVAudioPlayerNodeCompletionHandler](avaudioplayernodecompletionhandler.md): The callback handler for buffer or file completion.
