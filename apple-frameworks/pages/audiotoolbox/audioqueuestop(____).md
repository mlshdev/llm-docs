> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuestop(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuestop(_:_:))

# AudioQueueStop(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Stops playing or recording audio.

## Declaration

```swift
func AudioQueueStop(_ inAQ: AudioQueueRef, _ inImmediate: Bool) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue to stop.
- `inImmediate`: If you pass `true`, stopping occurs immediately (that is, *synchronously*). If you pass `false`, the function returns immediately, but the audio queue does not stop until its queued buffers are played or recorded (that is, the stop occurs *asynchronously*). Audio queue callbacks are invoked as necessary until the queue actually stops.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function resets an audio queue, stops the audio hardware associated with the queue if it is not in use by other audio services, and stops the audio queue. When recording, this function is typically invoked by a user. When playing back, a playback audio queue callback should call this function when there is no more audio to play.

## See Also

### Controlling Audio Queues

- [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush(\_:)](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueuePause(\_:)](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset(\_:)](audioqueuereset%28__%29.md): Resets an audio queue.

# AudioQueueStop (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Stops playing or recording audio.

## Declaration

```objectivec
extern OSStatus AudioQueueStop(AudioQueueRef inAQ, Boolean inImmediate);
```

## Parameters

- `inAQ`: The audio queue to stop.
- `inImmediate`: If you pass `true`, stopping occurs immediately (that is, *synchronously*). If you pass `false`, the function returns immediately, but the audio queue does not stop until its queued buffers are played or recorded (that is, the stop occurs *asynchronously*). Audio queue callbacks are invoked as necessary until the queue actually stops.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function resets an audio queue, stops the audio hardware associated with the queue if it is not in use by other audio services, and stops the audio queue. When recording, this function is typically invoked by a user. When playing back, a playback audio queue callback should call this function when there is no more audio to play.

## See Also

### Controlling Audio Queues

- [AudioQueueStart](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueuePause](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset](audioqueuereset%28__%29.md): Resets an audio queue.
