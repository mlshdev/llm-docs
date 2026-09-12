> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/sparselyinterleavedwithmainmediadata](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/sparselyinterleavedwithmainmediadata)

# sparselyInterleavedWithMainMediaData (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.

## Declaration

```swift
static let sparselyInterleavedWithMainMediaData: AVAssetWriterInput.MediaDataLocation
```

## See Also

### Media data locations

- [interleavedWithMainMediaData](interleavedwithmainmediadata.md): A value that indicates to interleave the input’s media data with other media data.
- [beforeMainMediaDataNotInterleaved](beforemainmediadatanotinterleaved.md): A value that indicates to use noninterleaved data, and write it before interleaved data.

# AVAssetWriterInputMediaDataLocationSparselyInterleavedWithMainMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.

## Declaration

```objectivec
extern AVAssetWriterInputMediaDataLocation const AVAssetWriterInputMediaDataLocationSparselyInterleavedWithMainMediaData;
```

## See Also

### Media data locations

- [AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData](interleavedwithmainmediadata.md): A value that indicates to interleave the input’s media data with other media data.
- [AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved](beforemainmediadatanotinterleaved.md): A value that indicates to use noninterleaved data, and write it before interleaved data.
