> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/ispinchtozoomenabled](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/ispinchtozoomenabled)

# isPinchToZoomEnabled

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether people can use a two-finger pinch-to-zoom gesture.

## Declaration

```swift
@MainActor final let isPinchToZoomEnabled: Bool
```

<a id="discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Configuring data scanners

- [delegate](delegate.md): The delegate that handles user interaction with items recognized by the data scanner.
- [qualityLevel](qualitylevel-swift.property.md): The resolution that the scanner uses to find data.
- [DataScannerViewController.QualityLevel](qualitylevel-swift.enum.md): The possible quality levels that the scanner uses to find data.
- [recognizesMultipleItems](recognizesmultipleitems.md): A Boolean value that indicates whether the scanner should identify all items in the live video.
- [isHighFrameRateTrackingEnabled](ishighframeratetrackingenabled.md): A Boolean value that determines the frequency at which the scanner updates the geometry of recognized items.
- [isGuidanceEnabled](isguidanceenabled.md): A Boolean value that indicates whether the scanner provides help to a person when selecting items.
- [isHighlightingEnabled](ishighlightingenabled.md): A Boolean value that indicates whether the scanner displays highlights around recognized items.
