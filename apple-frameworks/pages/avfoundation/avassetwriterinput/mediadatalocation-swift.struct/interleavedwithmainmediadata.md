> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/interleavedwithmainmediadata](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/interleavedwithmainmediadata)

# interleavedWithMainMediaData (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A value that indicates to interleave the input’s media data with other media data.

## Declaration

```swift
static let interleavedWithMainMediaData: AVAssetWriterInput.MediaDataLocation
```

## See Also

### Media data locations

- [beforeMainMediaDataNotInterleaved](beforemainmediadatanotinterleaved.md): A value that indicates to use noninterleaved data, and write it before interleaved data.
- [sparselyInterleavedWithMainMediaData](sparselyinterleavedwithmainmediadata.md): Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.

# AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A value that indicates to interleave the input’s media data with other media data.

## Declaration

```objectivec
extern AVAssetWriterInputMediaDataLocation const AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData;
```

## See Also

### Media data locations

- [AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved](beforemainmediadatanotinterleaved.md): A value that indicates to use noninterleaved data, and write it before interleaved data.
- [AVAssetWriterInputMediaDataLocationSparselyInterleavedWithMainMediaData](sparselyinterleavedwithmainmediadata.md): Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.
