> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterdelegate](https://developer.apple.com/documentation/avfoundation/avassetwriterdelegate)

# AVAssetWriterDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A delegate protocol that defines the methods to implement to respond to asset-writing events.

## Declaration

```swift
protocol AVAssetWriterDelegate : NSObjectProtocol, Sendable
```

## Topics

### Responding to segment output

- [assetWriter(\_:didOutputSegmentData:segmentType:)](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_%29.md): Tells the delegate that the asset writer output segment data.
- [assetWriter(\_:didOutputSegmentData:segmentType:segmentReport:)](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md): Tells the delegate that the asset writer output segment data and a report.
- [AVAssetSegmentReport](avassetsegmentreport.md): An object that provides information about segment data.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring segment writing

- [delegate](avassetwriter/delegate.md): A delegate object that responds to asset-writing events.
- [preferredOutputSegmentInterval](avassetwriter/preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](avassetwriter/initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](avassetwriter/outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment()](avassetwriter/flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.

# AVAssetWriterDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A delegate protocol that defines the methods to implement to respond to asset-writing events.

## Declaration

```objectivec
@protocol AVAssetWriterDelegate <NSObject>
```

## Topics

### Responding to segment output

- [assetWriter:didOutputSegmentData:segmentType:](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_%29.md): Tells the delegate that the asset writer output segment data.
- [assetWriter:didOutputSegmentData:segmentType:segmentReport:](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md): Tells the delegate that the asset writer output segment data and a report.
- [AVAssetSegmentReport](avassetsegmentreport.md): An object that provides information about segment data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring segment writing

- [delegate](avassetwriter/delegate.md): A delegate object that responds to asset-writing events.
- [preferredOutputSegmentInterval](avassetwriter/preferredoutputsegmentinterval.md): The interval of output segments that you prefer.
- [initialSegmentStartTime](avassetwriter/initialsegmentstarttime.md): The start time of the initial segment.
- [outputFileTypeProfile](avassetwriter/outputfiletypeprofile.md): A profile for the output file type.
- [flushSegment](avassetwriter/flushsegment%28%29.md): Closes the current segment and outputs it to a delegate method.
