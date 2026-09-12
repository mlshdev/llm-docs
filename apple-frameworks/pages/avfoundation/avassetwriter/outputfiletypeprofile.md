> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/outputfiletypeprofile](https://developer.apple.com/documentation/avfoundation/avassetwriter/outputfiletypeprofile)

# outputFileTypeProfile (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A profile for the output file type.

## Declaration

```swift
var outputFileTypeProfile: AVFileTypeProfile? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates that the writer chooses an appropriate default profile for the output file type. If your app requires segment data that’s suitable for streaming, set the value to [mpeg4AppleHLS](../avfiletypeprofile/mpeg4applehls.md) or [mpeg4CMAFCompliant](../avfiletypeprofile/mpeg4cmafcompliant.md) to output CMAF-compliant [mp4](../avfiletype/mp4.md) data.

You can’t change this value after writing starts.

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [flushSegment()](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.

# outputFileTypeProfile (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A profile for the output file type.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVFileTypeProfile outputFileTypeProfile;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates that the writer chooses an appropriate default profile for the output file type. If your app requires segment data that’s suitable for streaming, set the value to [AVFileTypeProfileMPEG4AppleHLS](../avfiletypeprofile/mpeg4applehls.md) or [AVFileTypeProfileMPEG4CMAFCompliant](../avfiletypeprofile/mpeg4cmafcompliant.md) to output CMAF-compliant [AVFileTypeMPEG4](../avfiletype/mp4.md) data.

You can’t change this value after writing starts.

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [flushSegment](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.
