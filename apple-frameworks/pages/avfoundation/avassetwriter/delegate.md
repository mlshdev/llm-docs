> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/delegate](https://developer.apple.com/documentation/avfoundation/avassetwriter/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A delegate object that responds to asset-writing events.

## Declaration

```swift
weak var delegate: (any AVAssetWriterDelegate)? { get set }
```

## See Also

### Configuring segment writing

- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment()](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A delegate object that responds to asset-writing events.

## Declaration

```objectivec
@property (weak, nullable) id<AVAssetWriterDelegate> delegate;
```

## See Also

### Configuring segment writing

- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.
