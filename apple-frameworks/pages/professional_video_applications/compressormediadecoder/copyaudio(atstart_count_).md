> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoder/copyaudio(atstart:count:)](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoder/copyaudio(atstart:count:))

# copyAudio(atStart:count:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns decoded audio samples starting from the specified temporal position.

## Declaration

```swift
func copyAudio(atStart start: Int64, count: UnsafeMutablePointer<Int64>!) -> Data!
```

## Parameters

- `start`: The temporal position of the audio sample.
- `count`: On input, the number of audio samples to return; on output, the actual number of samples returned.

<a id="return-value"></a>

## Return Value

A data buffer with decoded audio samples at the sample rate and channel layout specified in the encoder settings.

<a id="discussion"></a>

## Discussion

If the decoder does not have enough samples to return as specified in the `count` parameter, it updates the `count` parameter with the actual number of samples in the returned audio data buffer.

> **Note**

>  It’s recommended that you call the decoder for audio samples of 1 second per call, in temporal order.

## See Also

### Getting Decoded Frames and Samples

- [copyCloseCaptionData(\_:frameCount:)](copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame(\_:)](copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame(\_:)](releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.

# copyAudioAtStart:count: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns decoded audio samples starting from the specified temporal position.

## Declaration

```objectivec
- (NSData *) copyAudioAtStart:(int64_t) start count:(int64_t *) count;
```

## Parameters

- `start`: The temporal position of the audio sample.
- `count`: On input, the number of audio samples to return; on output, the actual number of samples returned.

<a id="return-value"></a>

## Return Value

A data buffer with decoded audio samples at the sample rate and channel layout specified in the encoder settings.

<a id="discussion"></a>

## Discussion

If the decoder does not have enough samples to return as specified in the `count` parameter, it updates the `count` parameter with the actual number of samples in the returned audio data buffer.

> **Note**

>  It’s recommended that you call the decoder for audio samples of 1 second per call, in temporal order.

## See Also

### Getting Decoded Frames and Samples

- [copyCloseCaptionData:frameCount:](copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame:](copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame:](releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.
