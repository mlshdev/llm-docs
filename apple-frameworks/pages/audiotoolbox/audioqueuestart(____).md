> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuestart(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuestart(_:_:))

# AudioQueueStart(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Begins playing or recording audio.

## Declaration

```swift
func AudioQueueStart(_ inAQ: AudioQueueRef, _ inStartTime: UnsafePointer<AudioTimeStamp>?) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue to start.
- `inStartTime`: The time at which the audio queue should start.

  To specify a start time relative to the timeline of the associated audio device, use the `mSampleTime` field of the `AudioTimeStamp` structure. Use `NULL` to indicate that the audio queue should start as soon as possible.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

If the associated audio device is not already running, this function starts it.

## See Also

### Controlling Audio Queues

- [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush(\_:)](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause(\_:)](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset(\_:)](audioqueuereset%28__%29.md): Resets an audio queue.

# AudioQueueStart (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Begins playing or recording audio.

## Declaration

```objectivec
extern OSStatus AudioQueueStart(AudioQueueRef inAQ, const AudioTimeStamp *inStartTime);
```

## Parameters

- `inAQ`: The audio queue to start.
- `inStartTime`: The time at which the audio queue should start.

  To specify a start time relative to the timeline of the associated audio device, use the `mSampleTime` field of the `AudioTimeStamp` structure. Use `NULL` to indicate that the audio queue should start as soon as possible.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

If the associated audio device is not already running, this function starts it.

## See Also

### Controlling Audio Queues

- [AudioQueuePrime](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset](audioqueuereset%28__%29.md): Resets an audio queue.
