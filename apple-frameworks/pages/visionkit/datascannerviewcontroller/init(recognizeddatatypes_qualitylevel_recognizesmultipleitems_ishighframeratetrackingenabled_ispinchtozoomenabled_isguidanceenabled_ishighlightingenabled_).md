> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/init(recognizeddatatypes:qualitylevel:recognizesmultipleitems:ishighframeratetrackingenabled:ispinchtozoomenabled:isguidanceenabled:ishighlightingenabled:)](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/init(recognizeddatatypes:qualitylevel:recognizesmultipleitems:ishighframeratetrackingenabled:ispinchtozoomenabled:isguidanceenabled:ishighlightingenabled:))

# init(recognizedDataTypes:qualityLevel:recognizesMultipleItems:isHighFrameRateTrackingEnabled:isPinchToZoomEnabled:isGuidanceEnabled:isHighlightingEnabled:)

**Framework:** VisionKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Creates a scanner for finding data, such as text and machine-readable codes, in the camera’s live video.

## Declaration

```swift
@MainActor init(recognizedDataTypes: Set<DataScannerViewController.RecognizedDataType>, qualityLevel: DataScannerViewController.QualityLevel = .balanced, recognizesMultipleItems: Bool = false, isHighFrameRateTrackingEnabled: Bool = true, isPinchToZoomEnabled: Bool = true, isGuidanceEnabled: Bool = true, isHighlightingEnabled: Bool = false)
```

## Parameters

- `recognizedDataTypes`: The types of data that the data scanner identifies in the live video.
- `qualityLevel`: The level of resolution to scan that depends on the size of the items.
- `recognizesMultipleItems`: A Boolean value that indicates whether the scanner identifies all items in the live video.
- `isHighFrameRateTrackingEnabled`: A Boolean value that determines the frequency that the scanner updates the geometry of recognized items.
- `isPinchToZoomEnabled`: A Boolean value that indicates whether people can use a two-finger pinch-to-zoom gesture.
- `isGuidanceEnabled`: A Boolean value that indicates whether the scanner provides help to a person when selecting items.
- `isHighlightingEnabled`: A Boolean value that indicates whether the scanner displays highlights around recognized items.

## See Also

### Related Documentation

- [qualityLevel](qualitylevel-swift.property.md): The resolution that the scanner uses to find data.
- [recognizesMultipleItems](recognizesmultipleitems.md): A Boolean value that indicates whether the scanner should identify all items in the live video.
- [isHighFrameRateTrackingEnabled](ishighframeratetrackingenabled.md): A Boolean value that determines the frequency at which the scanner updates the geometry of recognized items.
- [isGuidanceEnabled](isguidanceenabled.md): A Boolean value that indicates whether the scanner provides help to a person when selecting items.

### Creating data scanners

- [recognizedDataTypes](recognizeddatatypes.md): The types of data that the data scanner identifies in the live video.
- [DataScannerViewController.RecognizedDataType](recognizeddatatype.md): A type of data that the scanner recognizes.
