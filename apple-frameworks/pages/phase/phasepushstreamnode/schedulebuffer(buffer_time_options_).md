> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode/schedulebuffer(buffer:time:options:)](https://developer.apple.com/documentation/phase/phasepushstreamnode/schedulebuffer(buffer:time:options:))

# scheduleBuffer(buffer:time:options:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Schedules audio data playback at a specific time.

## Declaration

```swift
func scheduleBuffer(buffer: AVAudioPCMBuffer, time when: AVAudioTime?, options: PHASEPushStreamBufferOptions = [])
```

## Parameters

- `buffer`: Data that represents one portion of a contiguous audio stream.
- `when`: The time to play the buffer.
- `options`: The options for looping and buffer interruption.

## See Also

### Providing Audio Data

- [scheduleBuffer(buffer:)](schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer(buffer:time:options:completionCallbackType:completionHandler:)](schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer(buffer:completionCallbackType:completionHandler:)](schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](../phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.

# scheduleBuffer:atTime:options: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Schedules audio data playback at a specific time.

## Declaration

```objectivec
- (void) scheduleBuffer:(AVAudioPCMBuffer *) buffer atTime:(AVAudioTime *) when options:(PHASEPushStreamBufferOptions) options;
```

## Parameters

- `buffer`: Data that represents one portion of a contiguous audio stream.
- `when`: The time to play the buffer.
- `options`: The options for looping and buffer interruption.

## See Also

### Providing Audio Data

- [scheduleBuffer:](schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer:atTime:options:completionCallbackType:completionHandler:](schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer:completionCallbackType:completionHandler:](schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](../phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.
