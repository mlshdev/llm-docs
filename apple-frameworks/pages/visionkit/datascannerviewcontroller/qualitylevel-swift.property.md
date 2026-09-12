> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/qualitylevel-swift.property](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/qualitylevel-swift.property)

# qualityLevel

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The resolution that the scanner uses to find data.

## Declaration

```swift
@MainActor final let qualityLevel: DataScannerViewController.QualityLevel
```

<a id="discussion"></a>

## Discussion

The default value is [DataScannerViewController.QualityLevel.balanced](qualitylevel-swift.enum/balanced.md). To increase recognition speed for larger items, you can set this property to [DataScannerViewController.QualityLevel.fast](qualitylevel-swift.enum/fast.md). For smaller items, you can set this property to [DataScannerViewController.QualityLevel.accurate](qualitylevel-swift.enum/accurate.md) but it may impact the recognition speed.

## See Also

### Configuring data scanners

- [delegate](delegate.md): The delegate that handles user interaction with items recognized by the data scanner.
- [DataScannerViewController.QualityLevel](qualitylevel-swift.enum.md): The possible quality levels that the scanner uses to find data.
- [recognizesMultipleItems](recognizesmultipleitems.md): A Boolean value that indicates whether the scanner should identify all items in the live video.
- [isHighFrameRateTrackingEnabled](ishighframeratetrackingenabled.md): A Boolean value that determines the frequency at which the scanner updates the geometry of recognized items.
- [isPinchToZoomEnabled](ispinchtozoomenabled.md): A Boolean value that indicates whether people can use a two-finger pinch-to-zoom gesture.
- [isGuidanceEnabled](isguidanceenabled.md): A Boolean value that indicates whether the scanner provides help to a person when selecting items.
- [isHighlightingEnabled](ishighlightingenabled.md): A Boolean value that indicates whether the scanner displays highlights around recognized items.
