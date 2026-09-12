> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode/schedulebuffer(buffer:)](https://developer.apple.com/documentation/phase/phasepushstreamnode/schedulebuffer(buffer:))

# scheduleBuffer(buffer:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Schedules audio data for playback.

## Declaration

```swift
func scheduleBuffer(buffer: AVAudioPCMBuffer)
```

## Parameters

- `buffer`: Data that represents one portion of a contiguous audio stream.

<a id="Discussion"></a>

## Discussion

The framework processes this buffer after completing previously scheduled buffers. The buffer’s data format needs to match [format](format.md).

## See Also

### Providing Audio Data

- [scheduleBuffer(buffer:time:options:)](schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer(buffer:time:options:completionCallbackType:completionHandler:)](schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer(buffer:completionCallbackType:completionHandler:)](schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](../phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.

# scheduleBuffer: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Schedules audio data for playback.

## Declaration

```objectivec
- (void) scheduleBuffer:(AVAudioPCMBuffer *) buffer;
```

## Parameters

- `buffer`: Data that represents one portion of a contiguous audio stream.

<a id="Discussion"></a>

## Discussion

The framework processes this buffer after completing previously scheduled buffers. The buffer’s data format needs to match [format](format.md).

## See Also

### Providing Audio Data

- [scheduleBuffer:atTime:options:](schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer:atTime:options:completionCallbackType:completionHandler:](schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer:completionCallbackType:completionHandler:](schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](../phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.
