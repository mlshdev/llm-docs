> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/flushsegment()](https://developer.apple.com/documentation/avfoundation/avassetwriter/flushsegment())

# flushSegment() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Closes the current segment and outputs it to a delegate method.

## Declaration

```swift
func flushSegment()
```

<a id="Discussion"></a>

## Discussion

Call this method only when the [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md) property value is [indefinite](../../coremedia/cmtime/indefinite.md).

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.

# flushSegment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Closes the current segment and outputs it to a delegate method.

## Declaration

```objectivec
- (void) flushSegment;
```

<a id="Discussion"></a>

## Discussion

Call this method only when the [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md) property value is [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md).

## See Also

### Configuring segment writing

- [delegate](delegate.md): A delegate object that responds to asset-writing events.
- [AVAssetWriterDelegate](../avassetwriterdelegate.md): A delegate protocol that defines the methods to implement to respond to asset-writing events.
- [preferredOutputSegmentInterval](preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](outputfiletypeprofile.md): A profile for the output file type.
