> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueprime(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueprime(_:_:_:))

# AudioQueuePrime(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Decodes enqueued buffers in preparation for playback.

## Declaration

```swift
func AudioQueuePrime(_ inAQ: AudioQueueRef, _ inNumberOfFramesToPrepare: UInt32, _ outNumberOfFramesPrepared: UnsafeMutablePointer<UInt32>?) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue to be primed.
- `inNumberOfFramesToPrepare`: The number of frames to decode before returning. Pass `0` to decode all enqueued buffers.
- `outNumberOfFramesPrepared`: On output, the number of frames actually decoded and prepared for playback. Pass `NULL` on input if you you are not interested in this information.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function decodes enqueued buffers in preparation for playback. It returns when at least the number of audio sample frames specified in `inNumberOfFramesToPrepare` are decoded and ready to play, or (if you pass `0` for the `inNumberOfFramesToPrepare` parameter), when all enqueued buffers are decoded.

To make a buffer of audio data ready to play, use [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md) as follows:

1. Call [AudioQueueEnqueueBuffer(\_:\_:\_:\_:)](audioqueueenqueuebuffer%28________%29.md).
2. Call [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md).
3. Call [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md).

## See Also

### Controlling Audio Queues

- [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueueFlush(\_:)](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause(\_:)](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset(\_:)](audioqueuereset%28__%29.md): Resets an audio queue.

# AudioQueuePrime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Decodes enqueued buffers in preparation for playback.

## Declaration

```objectivec
extern OSStatus AudioQueuePrime(AudioQueueRef inAQ, UInt32 inNumberOfFramesToPrepare, UInt32 *outNumberOfFramesPrepared);
```

## Parameters

- `inAQ`: The audio queue to be primed.
- `inNumberOfFramesToPrepare`: The number of frames to decode before returning. Pass `0` to decode all enqueued buffers.
- `outNumberOfFramesPrepared`: On output, the number of frames actually decoded and prepared for playback. Pass `NULL` on input if you you are not interested in this information.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function decodes enqueued buffers in preparation for playback. It returns when at least the number of audio sample frames specified in `inNumberOfFramesToPrepare` are decoded and ready to play, or (if you pass `0` for the `inNumberOfFramesToPrepare` parameter), when all enqueued buffers are decoded.

To make a buffer of audio data ready to play, use [AudioQueuePrime](audioqueueprime%28______%29.md) as follows:

1. Call [AudioQueueEnqueueBuffer](audioqueueenqueuebuffer%28________%29.md).
2. Call [AudioQueuePrime](audioqueueprime%28______%29.md).
3. Call [AudioQueueStart](audioqueuestart%28____%29.md).

## See Also

### Controlling Audio Queues

- [AudioQueueStart](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueueFlush](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset](audioqueuereset%28__%29.md): Resets an audio queue.
