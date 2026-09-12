> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueofflinerender(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueofflinerender(_:_:_:_:))

# AudioQueueOfflineRender(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Exports audio to a buffer, instead of to a device, using a playback audio queue.

## Declaration

```swift
func AudioQueueOfflineRender(_ inAQ: AudioQueueRef, _ inTimestamp: UnsafePointer<AudioTimeStamp>, _ ioBuffer: AudioQueueBufferRef, _ inNumberFrames: UInt32) -> OSStatus
```

## Parameters

- `inAQ`: The playback audio queue.
- `inTimestamp`: The time corresponding to the beginning of the current audio queue buffer. This function uses the `mSampleTime` field of the [AudioTimeStamp](../coreaudiotypes/audiotimestamp.md) data structure.
- `ioBuffer`: On input, a buffer you supply to hold rendered audio data. On output, the rendered audio data, which you can then write to a file.
- `inNumberFrames`: The number of frames of audio to render.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

When you change a playback audio queue’s rendering mode to offline, using the [AudioQueueSetOfflineRenderFormat(\_:\_:\_:)](audioqueuesetofflinerenderformat%28______%29.md) function, you gain access to the rendered audio. You can then write the audio to a file, rather than have it play to external hardware such as a loudspeaker.

## See Also

### Related Documentation

- [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md): Begins playing or recording audio.

### Performing Offline Rendering

- [AudioQueueSetOfflineRenderFormat(\_:\_:\_:)](audioqueuesetofflinerenderformat%28______%29.md): Sets the rendering mode and audio format for a playback audio queue.

# AudioQueueOfflineRender (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Exports audio to a buffer, instead of to a device, using a playback audio queue.

## Declaration

```objectivec
extern OSStatus AudioQueueOfflineRender(AudioQueueRef inAQ, const AudioTimeStamp *inTimestamp, AudioQueueBufferRef ioBuffer, UInt32 inNumberFrames);
```

## Parameters

- `inAQ`: The playback audio queue.
- `inTimestamp`: The time corresponding to the beginning of the current audio queue buffer. This function uses the `mSampleTime` field of the [AudioTimeStamp](../coreaudiotypes/audiotimestamp.md) data structure.
- `ioBuffer`: On input, a buffer you supply to hold rendered audio data. On output, the rendered audio data, which you can then write to a file.
- `inNumberFrames`: The number of frames of audio to render.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

When you change a playback audio queue’s rendering mode to offline, using the [AudioQueueSetOfflineRenderFormat](audioqueuesetofflinerenderformat%28______%29.md) function, you gain access to the rendered audio. You can then write the audio to a file, rather than have it play to external hardware such as a loudspeaker.

## See Also

### Related Documentation

- [AudioQueueStart](audioqueuestart%28____%29.md): Begins playing or recording audio.

### Performing Offline Rendering

- [AudioQueueSetOfflineRenderFormat](audioqueuesetofflinerenderformat%28______%29.md): Sets the rendering mode and audio format for a playback audio queue.
