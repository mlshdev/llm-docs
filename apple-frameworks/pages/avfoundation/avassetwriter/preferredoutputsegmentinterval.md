> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/preferredoutputsegmentinterval](https://developer.apple.com/documentation/avfoundation/avassetwriter/preferredoutputsegmentinterval)

# preferredOutputSegmentInterval (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The interval of output segments that you prefer.

## Declaration

```swift
var preferredOutputSegmentInterval: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [invalid](../../coremedia/cmtime/invalid.md), which indicates that the asset writer chooses an appropriate default value. You may also set a positive numeric or [indefinite](../../coremedia/cmtime/indefinite.md) time. When the value is [indefinite](../../coremedia/cmtime/indefinite.md), each call you make to [flushSegment()](flushsegment%28%29.md) outputs a segment data.

You can’t change this value after writing starts.

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment()](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.

# preferredOutputSegmentInterval (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The interval of output segments that you prefer.

## Declaration

```objectivec
@property (nonatomic) CMTime preferredOutputSegmentInterval;
```

<a id="Discussion"></a>

## Discussion

The default value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md), which indicates that the asset writer chooses an appropriate default value. You may also set a positive numeric or [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md) time. When the value is [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md), each call you make to [flushSegment](flushsegment%28%29.md) outputs a segment data.

You can’t change this value after writing starts.

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment](flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.
