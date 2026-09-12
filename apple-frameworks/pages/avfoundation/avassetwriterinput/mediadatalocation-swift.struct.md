> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct)

# AVAssetWriterInput.MediaDataLocation (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A structure that indicates how to lay out and interleave media data.

## Declaration

```swift
struct MediaDataLocation
```

## Topics

### Media data locations

- [interleavedWithMainMediaData](mediadatalocation-swift.struct/interleavedwithmainmediadata.md): A value that indicates to interleave the input’s media data with other media data.
- [beforeMainMediaDataNotInterleaved](mediadatalocation-swift.struct/beforemainmediadatanotinterleaved.md): A value that indicates to use noninterleaved data, and write it before interleaved data.
- [sparselyInterleavedWithMainMediaData](mediadatalocation-swift.struct/sparselyinterleavedwithmainmediadata.md): Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.

### Initializers

- [init(rawValue:)](mediadatalocation-swift.struct/init%28rawvalue_%29.md): Creates a location with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring media data layout

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary, in bytes, for aligning media chunks.
- [preferredMediaChunkDuration](preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL sample references are relative to.
- [mediaDataLocation](mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.

# AVAssetWriterInputMediaDataLocation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A structure that indicates how to lay out and interleave media data.

## Declaration

```objectivec
typedef NSString * AVAssetWriterInputMediaDataLocation;
```

## Topics

### Media data locations

- [AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData](mediadatalocation-swift.struct/interleavedwithmainmediadata.md): A value that indicates to interleave the input’s media data with other media data.
- [AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved](mediadatalocation-swift.struct/beforemainmediadatanotinterleaved.md): A value that indicates to use noninterleaved data, and write it before interleaved data.
- [AVAssetWriterInputMediaDataLocationSparselyInterleavedWithMainMediaData](mediadatalocation-swift.struct/sparselyinterleavedwithmainmediadata.md): Indicates that there may be large segments of time without any media data from this track. When mediaDataLocation is set to this value, AVAssetWriter will interleave the media data, but will not wait for media data from this track to achieve tight interleaving with other tracks.

## See Also

### Configuring media data layout

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary, in bytes, for aligning media chunks.
- [preferredMediaChunkDuration](preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL sample references are relative to.
- [mediaDataLocation](mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.
