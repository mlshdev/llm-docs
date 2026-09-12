> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadervideocompositionoutput/assetreadervideocompositionoutputwithvideotracks:videosettings:](https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/assetreadervideocompositionoutputwithvideotracks:videosettings:)

# assetReaderVideoCompositionOutputWithVideoTracks:videoSettings:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object that reads composited video from the specified video tracks.

## Declaration

```objectivec
+ (instancetype) assetReaderVideoCompositionOutputWithVideoTracks:(NSArray<AVAssetTrack *> *) videoTracks videoSettings:(NSDictionary<NSString *,id> *) videoSettings;
```

## Parameters

- `videoTracks`: An array of asset tracks from which the created object should read video frames for compositing. The media type of each track must be [AVMediaTypeVideo](../avmediatype/video.md).
- `videoSettings`: A dictionary of video settings to use for sample output, or `nil` if you want to receive decoded samples in a convenient uncompressed format, with properties determined according to the properties of the specified video tracks.

  You use keys from [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md), depending on the output format you want.

<a id="return-value"></a>

## Return Value

A new video composition output, or `nil` if initialization fails.

## See Also

### Creating a video composition output

- [initWithVideoTracks:videoSettings:](init%28videotracks_videosettings_%29.md): Creates an object that reads composited video frames from the specified video tracks.
