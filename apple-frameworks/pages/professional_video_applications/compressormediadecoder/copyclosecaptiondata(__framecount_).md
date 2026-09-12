> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoder/copyclosecaptiondata(_:framecount:)](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoder/copyclosecaptiondata(_:framecount:))

# copyCloseCaptionData(\_:frameCount:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns a list of closed-caption tracks associated with the specified video frames.

## Declaration

```swift
func copyCloseCaptionData(_ startFrame: Int64, frameCount: Int64) -> [AnyHashable : Any]!
```

## Parameters

- `startFrame`: The frame number at which to start collecting the closed-caption data.
- `frameCount`: The number of frames to retrieve the closed-caption data from.

<a id="return-value"></a>

## Return Value

`nil` if closed-caption data is not available. Otherwise, it returns a dictionary with a frame number as the key, and a value that’s an array of 16-bit integers representing the closed-caption data.

<a id="discussion"></a>

## Discussion

> **Note**

>  The decoder object supports only CEA-608 closed-caption format.

## See Also

### Getting Decoded Frames and Samples

- [copyAudio(atStart:count:)](copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyFrame(\_:)](copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame(\_:)](releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.

# copyCloseCaptionData:frameCount: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns a list of closed-caption tracks associated with the specified video frames.

## Declaration

```objectivec
- (NSDictionary *) copyCloseCaptionData:(int64_t) startFrame frameCount:(int64_t) frameCount;
```

## Parameters

- `startFrame`: The frame number at which to start collecting the closed-caption data.
- `frameCount`: The number of frames to retrieve the closed-caption data from.

<a id="return-value"></a>

## Return Value

`nil` if closed-caption data is not available. Otherwise, it returns a dictionary with a frame number as the key, and a value that’s an array of 16-bit integers representing the closed-caption data.

<a id="discussion"></a>

## Discussion

> **Note**

>  The decoder object supports only CEA-608 closed-caption format.

## See Also

### Getting Decoded Frames and Samples

- [copyAudioAtStart:count:](copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyFrame:](copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame:](releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.
