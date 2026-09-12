> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuepause(_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuepause(_:))

# AudioQueuePause(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Pauses audio playback or recording.

## Declaration

```swift
func AudioQueuePause(_ inAQ: AudioQueueRef) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue to pause.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Pausing an audio queue does not affect buffers or reset the audio queue. To resume playback or recording, call [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md).

## See Also

### Controlling Audio Queues

- [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush(\_:)](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueueReset(\_:)](audioqueuereset%28__%29.md): Resets an audio queue.

# AudioQueuePause (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Pauses audio playback or recording.

## Declaration

```objectivec
extern OSStatus AudioQueuePause(AudioQueueRef inAQ);
```

## Parameters

- `inAQ`: The audio queue to pause.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Pausing an audio queue does not affect buffers or reset the audio queue. To resume playback or recording, call [AudioQueueStart](audioqueuestart%28____%29.md).

## See Also

### Controlling Audio Queues

- [AudioQueueStart](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueueReset](audioqueuereset%28__%29.md): Resets an audio queue.
