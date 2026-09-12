> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetsegmentreport](https://developer.apple.com/documentation/avfoundation/avassetsegmentreport)

# AVAssetSegmentReport (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that provides information about segment data.

## Declaration

```swift
class AVAssetSegmentReport
```

<a id="overview"></a>

## Overview

You receive a segment report through the [assetWriter(\_:didOutputSegmentData:segmentType:segmentReport:)](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md) delegate method.

## Topics

### Inspecting a report

- [segmentType](avassetsegmentreport/segmenttype.md): The type of segment data.
- [AVAssetSegmentType](avassetsegmenttype.md): Constants that define the type of a segment.
- [trackReports](avassetsegmentreport/trackreports.md): The reports for the segment’s track data.
- [AVAssetSegmentTrackReport](avassetsegmenttrackreport.md): An object that provides information on a track in segment data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to segment output

- [assetWriter(\_:didOutputSegmentData:segmentType:)](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_%29.md): Tells the delegate that the asset writer output segment data.
- [assetWriter(\_:didOutputSegmentData:segmentType:segmentReport:)](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md): Tells the delegate that the asset writer output segment data and a report.

# AVAssetSegmentReport (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that provides information about segment data.

## Declaration

```objectivec
@interface AVAssetSegmentReport : NSObject
```

<a id="overview"></a>

## Overview

You receive a segment report through the [assetWriter:didOutputSegmentData:segmentType:segmentReport:](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md) delegate method.

## Topics

### Inspecting a report

- [segmentType](avassetsegmentreport/segmenttype.md): The type of segment data.
- [AVAssetSegmentType](avassetsegmenttype.md): Constants that define the type of a segment.
- [trackReports](avassetsegmentreport/trackreports.md): The reports for the segment’s track data.
- [AVAssetSegmentTrackReport](avassetsegmenttrackreport.md): An object that provides information on a track in segment data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Responding to segment output

- [assetWriter:didOutputSegmentData:segmentType:](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_%29.md): Tells the delegate that the asset writer output segment data.
- [assetWriter:didOutputSegmentData:segmentType:segmentReport:](avassetwriterdelegate/assetwriter%28__didoutputsegmentdata_segmenttype_segmentreport_%29.md): Tells the delegate that the asset writer output segment data and a report.
