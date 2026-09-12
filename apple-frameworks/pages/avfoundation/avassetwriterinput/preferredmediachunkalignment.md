> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/preferredmediachunkalignment](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/preferredmediachunkalignment)

# preferredMediaChunkAlignment (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The boundary, in bytes, for aligning media chunks.

## Declaration

```swift
var preferredMediaChunkAlignment: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports file types that support media chunk alignment, such as QuickTime Movie files. The default value is `0`, which means that the input chooses an appropriate default value. A value of `1` indicates not to use padding to achieve a particular chunk alignment. It’s an error to set a negative value for chunk alignment.

You can’t set this value after writing starts.

## See Also

### Configuring media data layout

- [preferredMediaChunkDuration](preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL sample references are relative to.
- [mediaDataLocation](mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.
- [AVAssetWriterInput.MediaDataLocation](mediadatalocation-swift.struct.md): A structure that indicates how to lay out and interleave media data.

# preferredMediaChunkAlignment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The boundary, in bytes, for aligning media chunks.

## Declaration

```objectivec
@property (nonatomic) NSInteger preferredMediaChunkAlignment;
```

<a id="Discussion"></a>

## Discussion

This property supports file types that support media chunk alignment, such as QuickTime Movie files. The default value is `0`, which means that the input chooses an appropriate default value. A value of `1` indicates not to use padding to achieve a particular chunk alignment. It’s an error to set a negative value for chunk alignment.

You can’t set this value after writing starts.

## See Also

### Configuring media data layout

- [preferredMediaChunkDuration](preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL sample references are relative to.
- [mediaDataLocation](mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.
- [AVAssetWriterInputMediaDataLocation](mediadatalocation-swift.struct.md): A structure that indicates how to lay out and interleave media data.
