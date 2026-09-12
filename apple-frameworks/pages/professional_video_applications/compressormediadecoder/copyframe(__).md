> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoder/copyframe(_:)](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoder/copyframe(_:))

# copyFrame(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns the decoded video frame indicated by the frame number.

## Declaration

```swift
func copyFrame(_ frameNumber: Int64) -> IOSurface!
```

## Parameters

- `frameNumber`: The video frame to retrieve.

<a id="return-value"></a>

## Return Value

IOSurface-based video frame buffers.

<a id="discussion"></a>

## Discussion

Use the values in the [decodingAttributes()](decodingattributes%28%29.md) dictionary to find the video attributes, such as height and pixel ratio, of the decoded frame.

## See Also

### Getting Decoded Frames and Samples

- [copyAudio(atStart:count:)](copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData(\_:frameCount:)](copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [releaseFrame(\_:)](releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.

# copyFrame: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the decoded video frame indicated by the frame number.

## Declaration

```objectivec
- (IOSurface *) copyFrame:(int64_t) frameNumber;
```

## Parameters

- `frameNumber`: The video frame to retrieve.

<a id="return-value"></a>

## Return Value

IOSurface-based video frame buffers.

<a id="discussion"></a>

## Discussion

Use the values in the [decodingAttributes](decodingattributes%28%29.md) dictionary to find the video attributes, such as height and pixel ratio, of the decoded frame.

## See Also

### Getting Decoded Frames and Samples

- [copyAudioAtStart:count:](copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData:frameCount:](copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [releaseFrame:](releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.
