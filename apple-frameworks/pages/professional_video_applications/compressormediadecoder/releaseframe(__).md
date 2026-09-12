> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoder/releaseframe(_:)](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoder/releaseframe(_:))

# releaseFrame(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0.2+

Release a decoded frame when the encoder extension no longer needs the frame.

## Declaration

```swift
func releaseFrame(_ frame: IOSurface!)
```

## Parameters

- `frame`: The decoded frame to release.

<a id="discussion"></a>

## Discussion

Use the `releaseFrame:` method to release a frame that the extension obtains by using the `copyFrame:` method and to notify the decoder that the encoder extension no longer needs the frame.

When you use the Objective-C manual reference-counting implementation, call the `releaseFrame:` method before the `frame release` call to insure the `releaseFrame:` method receives a valid frame.

## See Also

### Getting Decoded Frames and Samples

- [copyAudio(atStart:count:)](copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData(\_:frameCount:)](copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame(\_:)](copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.

# releaseFrame: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Release a decoded frame when the encoder extension no longer needs the frame.

## Declaration

```objectivec
- (void) releaseFrame:(IOSurface *) frame;
```

## Parameters

- `frame`: The decoded frame to release.

<a id="discussion"></a>

## Discussion

Use the `releaseFrame:` method to release a frame that the extension obtains by using the `copyFrame:` method and to notify the decoder that the encoder extension no longer needs the frame.

When you use the Objective-C manual reference-counting implementation, call the `releaseFrame:` method before the `frame release` call to insure the `releaseFrame:` method receives a valid frame.

## See Also

### Getting Decoded Frames and Samples

- [copyAudioAtStart:count:](copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData:frameCount:](copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame:](copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [CompressorMediaDecoderPtr](../compressormediadecoderptr.md): The type alias for referencing the decoder object.
