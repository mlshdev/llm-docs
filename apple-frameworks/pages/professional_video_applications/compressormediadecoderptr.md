> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoderptr](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoderptr)

# CompressorMediaDecoderPtr (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** ProVideo Encoder Extensions 1.0+

The type alias for referencing the decoder object.

## Declaration

```swift
typealias CompressorMediaDecoderPtr = any NSObjectProtocol & CompressorMediaDecoder
```

## See Also

### Getting Decoded Frames and Samples

- [copyAudio(atStart:count:)](compressormediadecoder/copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData(\_:frameCount:)](compressormediadecoder/copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame(\_:)](compressormediadecoder/copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame(\_:)](compressormediadecoder/releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.

# CompressorMediaDecoderPtr (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

The type alias for referencing the decoder object.

## Declaration

```objectivec
typedef NSObject<CompressorMediaDecoder> * CompressorMediaDecoderPtr;
```

## See Also

### Getting Decoded Frames and Samples

- [copyAudioAtStart:count:](compressormediadecoder/copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData:frameCount:](compressormediadecoder/copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame:](compressormediadecoder/copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame:](compressormediadecoder/releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
