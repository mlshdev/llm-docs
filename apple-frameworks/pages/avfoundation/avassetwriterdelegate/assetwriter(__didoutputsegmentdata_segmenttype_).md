> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterdelegate/assetwriter(_:didoutputsegmentdata:segmenttype:)](https://developer.apple.com/documentation/avfoundation/avassetwriterdelegate/assetwriter(_:didoutputsegmentdata:segmenttype:))

# assetWriter(\_:didOutputSegmentData:segmentType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the asset writer output segment data.

## Declaration

```swift
optional func assetWriter(_ writer: AVAssetWriter, didOutputSegmentData segmentData: Data, segmentType: AVAssetSegmentType)
```

## Parameters

- `writer`: The asset writer that output segment data.
- `segmentData`: The data for the segment.
- `segmentType`: The type of segment data.

## See Also

### Responding to segment output

- [assetWriter(\_:didOutputSegmentData:segmentType:segmentReport:)](assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md): Tells the delegate that the asset writer output segment data and a report.
- [AVAssetSegmentReport](../avassetsegmentreport.md): An object that provides information about segment data.

# assetWriter:didOutputSegmentData:segmentType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the asset writer output segment data.

## Declaration

```objectivec
- (void) assetWriter:(AVAssetWriter *) writer didOutputSegmentData:(NSData *) segmentData segmentType:(AVAssetSegmentType) segmentType;
```

## Parameters

- `writer`: The asset writer that output segment data.
- `segmentData`: The data for the segment.
- `segmentType`: The type of segment data.

## See Also

### Responding to segment output

- [assetWriter:didOutputSegmentData:segmentType:segmentReport:](assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md): Tells the delegate that the asset writer output segment data and a report.
- [AVAssetSegmentReport](../avassetsegmentreport.md): An object that provides information about segment data.
