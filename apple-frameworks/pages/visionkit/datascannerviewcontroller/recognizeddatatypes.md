> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/recognizeddatatypes](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/recognizeddatatypes)

# recognizedDataTypes

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The types of data that the data scanner identifies in the live video.

## Declaration

```swift
@MainActor final let recognizedDataTypes: Set<DataScannerViewController.RecognizedDataType>
```

## See Also

### Creating data scanners

- [init(recognizedDataTypes:qualityLevel:recognizesMultipleItems:isHighFrameRateTrackingEnabled:isPinchToZoomEnabled:isGuidanceEnabled:isHighlightingEnabled:)](init%28recognizeddatatypes_qualitylevel_recognizesmultipleitems_ishighframeratetrackingenabled_ispinchtozoomenabled_isguidanceenabled_ishighlightingenabled_%29.md): Creates a scanner for finding data, such as text and machine-readable codes, in the camera’s live video.
- [DataScannerViewController.RecognizedDataType](recognizeddatatype.md): A type of data that the scanner recognizes.
