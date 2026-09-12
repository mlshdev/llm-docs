> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/beforemainmediadatanotinterleaved](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/beforemainmediadatanotinterleaved)

# beforeMainMediaDataNotInterleaved (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A value that indicates to use noninterleaved data, and write it before interleaved data.

## Declaration

```swift
static let beforeMainMediaDataNotInterleaved: AVAssetWriterInput.MediaDataLocation
```

## See Also

### Media data locations

- [interleavedWithMainMediaData](interleavedwithmainmediadata.md): A value that indicates to interleave the input’s media data with other media data.
- [sparselyInterleavedWithMainMediaData](sparselyinterleavedwithmainmediadata.md): Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.

# AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A value that indicates to use noninterleaved data, and write it before interleaved data.

## Declaration

```objectivec
extern AVAssetWriterInputMediaDataLocation const AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved;
```

## See Also

### Media data locations

- [AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData](interleavedwithmainmediadata.md): A value that indicates to interleave the input’s media data with other media data.
- [AVAssetWriterInputMediaDataLocationSparselyInterleavedWithMainMediaData](sparselyinterleavedwithmainmediadata.md): Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.
