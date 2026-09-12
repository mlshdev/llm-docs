> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuereset(_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuereset(_:))

# AudioQueueReset(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio queue.

## Declaration

```swift
func AudioQueueReset(_ inAQ: AudioQueueRef) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue to reset.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function immediately resets an audio queue, flushes any queued buffers (invoking callbacks as necessary), removes all buffers from previously scheduled use, and resets decoder and digital signal processing (DSP) state.

If you queue buffers after calling this function, processing does not begin until the decoder and DSP state of the audio queue are reset. This might create an audible discontinuity (or “glitch”).

This function is called automatically when you call [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md).

## See Also

### Controlling Audio Queues

- [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush(\_:)](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause(\_:)](audioqueuepause%28__%29.md): Pauses audio playback or recording.

# AudioQueueReset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio queue.

## Declaration

```objectivec
extern OSStatus AudioQueueReset(AudioQueueRef inAQ);
```

## Parameters

- `inAQ`: The audio queue to reset.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function immediately resets an audio queue, flushes any queued buffers (invoking callbacks as necessary), removes all buffers from previously scheduled use, and resets decoder and digital signal processing (DSP) state.

If you queue buffers after calling this function, processing does not begin until the decoder and DSP state of the audio queue are reset. This might create an audible discontinuity (or “glitch”).

This function is called automatically when you call [AudioQueueStop](audioqueuestop%28____%29.md).

## See Also

### Controlling Audio Queues

- [AudioQueueStart](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause](audioqueuepause%28__%29.md): Pauses audio playback or recording.
