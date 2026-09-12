> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueflush(_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueflush(_:))

# AudioQueueFlush(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio queue’s decoder state.

## Declaration

```swift
func AudioQueueFlush(_ inAQ: AudioQueueRef) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue to flush.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Call [AudioQueueFlush(\_:)](audioqueueflush%28__%29.md) after enqueuing the last audio queue buffer to ensure that all buffered data, as well as all audio data in the midst of processing, gets recorded or played. If you do not call this function, stale data in the audio queue’s decoder may interfere with playback or recording of the next set of buffers.

Call this function before calling [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md) if you want to ensure that all enqueued data reaches the destination. If you call [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md) with the `inImmediate` parameter set to `false`, calling this function does nothing; under those conditions, [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md) calls this function.

## See Also

### Related Documentation

- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.

### Controlling Audio Queues

- [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause(\_:)](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset(\_:)](audioqueuereset%28__%29.md): Resets an audio queue.

# AudioQueueFlush (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio queue’s decoder state.

## Declaration

```objectivec
extern OSStatus AudioQueueFlush(AudioQueueRef inAQ);
```

## Parameters

- `inAQ`: The audio queue to flush.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Call [AudioQueueFlush](audioqueueflush%28__%29.md) after enqueuing the last audio queue buffer to ensure that all buffered data, as well as all audio data in the midst of processing, gets recorded or played. If you do not call this function, stale data in the audio queue’s decoder may interfere with playback or recording of the next set of buffers.

Call this function before calling [AudioQueueStop](audioqueuestop%28____%29.md) if you want to ensure that all enqueued data reaches the destination. If you call [AudioQueueStop](audioqueuestop%28____%29.md) with the `inImmediate` parameter set to `false`, calling this function does nothing; under those conditions, [AudioQueueStop](audioqueuestop%28____%29.md) calls this function.

## See Also

### Related Documentation

- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.

### Controlling Audio Queues

- [AudioQueueStart](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueStop](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset](audioqueuereset%28__%29.md): Resets an audio queue.
