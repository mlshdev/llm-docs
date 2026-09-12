> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuesetofflinerenderformat(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuesetofflinerenderformat(_:_:_:))

# AudioQueueSetOfflineRenderFormat(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the rendering mode and audio format for a playback audio queue.

## Declaration

```swift
func AudioQueueSetOfflineRenderFormat(_ inAQ: AudioQueueRef, _ inFormat: UnsafePointer<AudioStreamBasicDescription>?, _ inLayout: UnsafePointer<AudioChannelLayout>?) -> OSStatus
```

## Parameters

- `inAQ`: The playback audio queue whose rendering mode and audio format you want to set.
- `inFormat`: The audio format for offline rendering. The format must be some sort of linear PCM. If the format has more than one channel, it must be interleaved. For more information on the [AudioStreamBasicDescription](../coreaudiotypes/audiostreambasicdescription.md) structure, see [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

  Pass `NULL` to disable offline rendering and return the audio queue to normal output to an audio device.
- `inLayout`: The channel layout for offline rendering.  For more information on the [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) structure, see [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

  Pass `NULL` when using this function to disable offline rendering.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Use this function to set a playback audio queue to perform offline rendering, such as for export to an audio file. In offline rendering mode, a playback audio queue does not connect to external hardware.

You can also use this function to restore an audio queue to normal rendering mode by passing `NULL` in the `inFormat` and `inLayout` parameters.

## See Also

### Performing Offline Rendering

- [AudioQueueOfflineRender(\_:\_:\_:\_:)](audioqueueofflinerender%28________%29.md): Exports audio to a buffer, instead of to a device, using a playback audio queue.

# AudioQueueSetOfflineRenderFormat (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the rendering mode and audio format for a playback audio queue.

## Declaration

```objectivec
extern OSStatus AudioQueueSetOfflineRenderFormat(AudioQueueRef inAQ, const AudioStreamBasicDescription *inFormat, const AudioChannelLayout *inLayout);
```

## Parameters

- `inAQ`: The playback audio queue whose rendering mode and audio format you want to set.
- `inFormat`: The audio format for offline rendering. The format must be some sort of linear PCM. If the format has more than one channel, it must be interleaved. For more information on the [AudioStreamBasicDescription](../coreaudiotypes/audiostreambasicdescription.md) structure, see [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

  Pass `NULL` to disable offline rendering and return the audio queue to normal output to an audio device.
- `inLayout`: The channel layout for offline rendering.  For more information on the [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) structure, see [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

  Pass `NULL` when using this function to disable offline rendering.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Use this function to set a playback audio queue to perform offline rendering, such as for export to an audio file. In offline rendering mode, a playback audio queue does not connect to external hardware.

You can also use this function to restore an audio queue to normal rendering mode by passing `NULL` in the `inFormat` and `inLayout` parameters.

## See Also

### Performing Offline Rendering

- [AudioQueueOfflineRender](audioqueueofflinerender%28________%29.md): Exports audio to a buffer, instead of to a device, using a playback audio queue.
