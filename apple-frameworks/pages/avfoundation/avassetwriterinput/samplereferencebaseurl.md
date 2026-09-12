> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/samplereferencebaseurl](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/samplereferencebaseurl)

# sampleReferenceBaseURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The base URL sample references are relative to.

## Declaration

```swift
var sampleReferenceBaseURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is only valid for file types that support writing sample references, such as QuickTime files. If the system resolves the value of this property to an absolute URL, the sample references it appends are relative to this URL. The URL must point to a location that’s in a directory that’s a parent of the sample reference location.

For example, setting the value of this property to `file:///User/johnappleseed/Movies/` and appending sample buffers with the [kCMSampleBufferAttachmentKey_SampleReferenceURL](../../coremedia/kcmsamplebufferattachmentkey_samplereferenceurl.md) attachment set to `file:///User/johnappleseed/Movies/data/movie1.mov` writes a sample reference of `data/movie1.mov` to the movie.

## See Also

### Configuring media data layout

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary, in bytes, for aligning media chunks.
- [preferredMediaChunkDuration](preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [mediaDataLocation](mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.
- [AVAssetWriterInput.MediaDataLocation](mediadatalocation-swift.struct.md): A structure that indicates how to lay out and interleave media data.

# sampleReferenceBaseURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The base URL sample references are relative to.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * sampleReferenceBaseURL;
```

<a id="Discussion"></a>

## Discussion

This property is only valid for file types that support writing sample references, such as QuickTime files. If the system resolves the value of this property to an absolute URL, the sample references it appends are relative to this URL. The URL must point to a location that’s in a directory that’s a parent of the sample reference location.

For example, setting the value of this property to `file:///User/johnappleseed/Movies/` and appending sample buffers with the [kCMSampleBufferAttachmentKey_SampleReferenceURL](../../coremedia/kcmsamplebufferattachmentkey_samplereferenceurl.md) attachment set to `file:///User/johnappleseed/Movies/data/movie1.mov` writes a sample reference of `data/movie1.mov` to the movie.

## See Also

### Configuring media data layout

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary, in bytes, for aligning media chunks.
- [preferredMediaChunkDuration](preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [mediaDataLocation](mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.
- [AVAssetWriterInputMediaDataLocation](mediadatalocation-swift.struct.md): A structure that indicates how to lay out and interleave media data.
