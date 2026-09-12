> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/initialsegmentstarttime](https://developer.apple.com/documentation/avfoundation/avassetwriter/initialsegmentstarttime)

# initialSegmentStartTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The start time of the initial segment.

## Declaration

```swift
var initialSegmentStartTime: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

This value is relevant only when the [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md) property value is positive numeric, in which case you must set a numeric time.

You can’t change this value after writing starts.

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment()](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.

# initialSegmentStartTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The start time of the initial segment.

## Declaration

```objectivec
@property (nonatomic) CMTime initialSegmentStartTime;
```

<a id="Discussion"></a>

## Discussion

This value is relevant only when the [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md) property value is positive numeric, in which case you must set a numeric time.

You can’t change this value after writing starts.

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.
