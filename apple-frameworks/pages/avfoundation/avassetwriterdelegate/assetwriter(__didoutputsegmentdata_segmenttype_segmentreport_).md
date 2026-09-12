> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterdelegate/assetwriter(_:didoutputsegmentdata:segmenttype:segmentreport:)](https://developer.apple.com/documentation/avfoundation/avassetwriterdelegate/assetwriter(_:didoutputsegmentdata:segmenttype:segmentreport:))

# assetWriter(\_:didOutputSegmentData:segmentType:segmentReport:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the asset writer output segment data and a report.

## Declaration

```swift
optional func assetWriter(_ writer: AVAssetWriter, didOutputSegmentData segmentData: Data, segmentType: AVAssetSegmentType, segmentReport: AVAssetSegmentReport?)
```

## Parameters

- `writer`: The asset writer that output segment data.
- `segmentData`: The data for the segment.
- `segmentType`: The type of segment data.
- `segmentReport`: A report for the segment data.

<a id="Discussion"></a>

## Discussion

The asset writer stops normal file writing when you implement this method.

## See Also

### Responding to segment output

- [assetWriter(\_:didOutputSegmentData:segmentType:)](assetwriter%28__didoutputsegmentdata_segmenttype_%29.md): Tells the delegate that the asset writer output segment data.
- [AVAssetSegmentReport](../avassetsegmentreport.md): An object that provides information about segment data.

# assetWriter:didOutputSegmentData:segmentType:segmentReport: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the asset writer output segment data and a report.

## Declaration

```objectivec
- (void) assetWriter:(AVAssetWriter *) writer didOutputSegmentData:(NSData *) segmentData segmentType:(AVAssetSegmentType) segmentType segmentReport:(AVAssetSegmentReport *) segmentReport;
```

## Parameters

- `writer`: The asset writer that output segment data.
- `segmentData`: The data for the segment.
- `segmentType`: The type of segment data.
- `segmentReport`: A report for the segment data.

<a id="Discussion"></a>

## Discussion

The asset writer stops normal file writing when you implement this method.

## See Also

### Responding to segment output

- [assetWriter:didOutputSegmentData:segmentType:](assetwriter%28__didoutputsegmentdata_segmenttype_%29.md): Tells the delegate that the asset writer output segment data.
- [AVAssetSegmentReport](../avassetsegmentreport.md): An object that provides information about segment data.
