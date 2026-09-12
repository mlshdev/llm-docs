> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/livephotovideocodectype](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/livephotovideocodectype)

# livePhotoVideoCodecType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The video codec to use for encoding the movie portion of Live Photo output.

## Declaration

```swift
var livePhotoVideoCodecType: AVVideoCodecType { get set }
```

<a id="Discussion"></a>

## Discussion

This value must be one of the video codec types listed in the photo output’s [availableLivePhotoVideoCodecTypes](../avcapturephotooutput/availablelivephotovideocodectypes.md) array.

## See Also

### Configuring Live Photo settings

- [livePhotoMovieFileURL](livephotomoviefileurl.md): A URL at which to write Live Photo movie output.
- [livePhotoMovieMetadata](livephotomoviemetadata.md): A dictionary of metadata to include in the Live Photo movie file.

# livePhotoVideoCodecType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The video codec to use for encoding the movie portion of Live Photo output.

## Declaration

```objectivec
@property (nonatomic, copy) AVVideoCodecType livePhotoVideoCodecType;
```

<a id="Discussion"></a>

## Discussion

This value must be one of the video codec types listed in the photo output’s [availableLivePhotoVideoCodecTypes](../avcapturephotooutput/availablelivephotovideocodectypes.md) array.

## See Also

### Configuring Live Photo settings

- [livePhotoMovieFileURL](livephotomoviefileurl.md): A URL at which to write Live Photo movie output.
- [livePhotoMovieMetadata](livephotomoviemetadata.md): A dictionary of metadata to include in the Live Photo movie file.
