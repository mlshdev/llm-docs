> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode/schedulebuffer(buffer:time:options:completioncallbacktype:completionhandler:)](https://developer.apple.com/documentation/phase/phasepushstreamnode/schedulebuffer(buffer:time:options:completioncallbacktype:completionhandler:))

# scheduleBuffer(buffer:time:options:completionCallbackType:completionHandler:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Schedules audio data playback at a specific time with a completion handler.

## Declaration

```swift
func scheduleBuffer(buffer: AVAudioPCMBuffer, time when: AVAudioTime?, options: PHASEPushStreamBufferOptions = [], completionCallbackType: PHASEPushStreamCompletionCallbackCondition, completionHandler: @escaping @Sendable (PHASEPushStreamCompletionCallbackCondition) -> Void)
```

```swift
func scheduleBuffer(buffer: AVAudioPCMBuffer, time when: AVAudioTime?, options: PHASEPushStreamBufferOptions = [], completionCallbackType: PHASEPushStreamCompletionCallbackCondition) async -> PHASEPushStreamCompletionCallbackCondition
```

## Parameters

- `buffer`: Data that represents one portion of a contiguous audio stream.
- `when`: The time to play the buffer.
- `options`: The options for looping and buffer interruption.
- `completionCallbackType`: The specific event on which to handle completion.
- `completionHandler`: Code the framework runs on completion or when the player stops.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func scheduleBuffer(buffer: AVAudioPCMBuffer, time when: AVAudioTime?, options: PHASEPushStreamBufferOptions = [], completionCallbackType: PHASEPushStreamCompletionCallbackCondition) async -> PHASEPushStreamCompletionCallbackCondition
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Providing Audio Data

- [scheduleBuffer(buffer:)](schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer(buffer:time:options:)](schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer(buffer:completionCallbackType:completionHandler:)](schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](../phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.

# scheduleBuffer:atTime:options:completionCallbackType:completionHandler: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Schedules audio data playback at a specific time with a completion handler.

## Declaration

```objectivec
- (void) scheduleBuffer:(AVAudioPCMBuffer *) buffer atTime:(AVAudioTime *) when options:(PHASEPushStreamBufferOptions) options completionCallbackType:(PHASEPushStreamCompletionCallbackCondition) completionCallbackType completionHandler:(void (^)(PHASEPushStreamCompletionCallbackCondition callbackType)) completionHandler;
```

## Parameters

- `buffer`: Data that represents one portion of a contiguous audio stream.
- `when`: The time to play the buffer.
- `options`: The options for looping and buffer interruption.
- `completionCallbackType`: The specific event on which to handle completion.
- `completionHandler`: Code the framework runs on completion or when the player stops.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func scheduleBuffer(buffer: AVAudioPCMBuffer, time when: AVAudioTime?, options: PHASEPushStreamBufferOptions = [], completionCallbackType: PHASEPushStreamCompletionCallbackCondition) async -> PHASEPushStreamCompletionCallbackCondition
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Providing Audio Data

- [scheduleBuffer:](schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer:atTime:options:](schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer:completionCallbackType:completionHandler:](schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
- [PHASEPushStreamCompletionCallbackCondition](../phasepushstreamcompletioncallbackcondition.md): A status that describes the results after the app schedules a push-stream buffer.
