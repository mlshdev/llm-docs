> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/qualitylevel-swift.enum](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/qualitylevel-swift.enum)

# DataScannerViewController.QualityLevel

**Framework:** VisionKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The possible quality levels that the scanner uses to find data.

## Declaration

```swift
enum QualityLevel
```

<a id="overview"></a>

## Overview

The quality levels mostly impact the camera resolution.

## Topics

### Identifying quality levels

- [DataScannerViewController.QualityLevel.balanced](qualitylevel-swift.enum/balanced.md): A quality level that’s between fast and accurate.
- [DataScannerViewController.QualityLevel.fast](qualitylevel-swift.enum/fast.md): A quality level that prioritizes recognition speed over accuracy.
- [DataScannerViewController.QualityLevel.accurate](qualitylevel-swift.enum/accurate.md): A quality level that prioritizes recognition accuracy over speed.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring data scanners

- [delegate](delegate.md): The delegate that handles user interaction with items recognized by the data scanner.
- [qualityLevel](qualitylevel-swift.property.md): The resolution that the scanner uses to find data.
- [recognizesMultipleItems](recognizesmultipleitems.md): A Boolean value that indicates whether the scanner should identify all items in the live video.
- [isHighFrameRateTrackingEnabled](ishighframeratetrackingenabled.md): A Boolean value that determines the frequency at which the scanner updates the geometry of recognized items.
- [isPinchToZoomEnabled](ispinchtozoomenabled.md): A Boolean value that indicates whether people can use a two-finger pinch-to-zoom gesture.
- [isGuidanceEnabled](isguidanceenabled.md): A Boolean value that indicates whether the scanner provides help to a person when selecting items.
- [isHighlightingEnabled](ishighlightingenabled.md): A Boolean value that indicates whether the scanner displays highlights around recognized items.
