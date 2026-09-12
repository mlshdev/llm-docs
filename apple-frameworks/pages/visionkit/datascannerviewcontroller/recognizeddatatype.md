> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/recognizeddatatype](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/recognizeddatatype)

# DataScannerViewController.RecognizedDataType

**Framework:** VisionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A type of data that the scanner recognizes.

## Declaration

```swift
struct RecognizedDataType
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

## Topics

### Recognizing text

- [text(languages:textContentType:)](recognizeddatatype/text%28languages_textcontenttype_%29.md): Creates a data type for text and information the scanner finds in text.
- [DataScannerViewController.TextContentType](textcontenttype.md): Types of text that a data scanner recognizes.

### Recognizing machine-readable codes

- [barcode(symbologies:)](recognizeddatatype/barcode%28symbologies_%29.md): Creates a data type for barcodes the use the specified symbologies.

### Hashing and comparing

- [hash(into:)](recognizeddatatype/hash%28into_%29.md): Hashes the components of this value using the specified hasher.
- [==(\_:\_:)](recognizeddatatype/==%28____%29.md): Returns a Boolean value indicating whether two sets have equal elements.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating data scanners

- [init(recognizedDataTypes:qualityLevel:recognizesMultipleItems:isHighFrameRateTrackingEnabled:isPinchToZoomEnabled:isGuidanceEnabled:isHighlightingEnabled:)](init%28recognizeddatatypes_qualitylevel_recognizesmultipleitems_ishighframeratetrackingenabled_ispinchtozoomenabled_isguidanceenabled_ishighlightingenabled_%29.md): Creates a scanner for finding data, such as text and machine-readable codes, in the camera’s live video.
- [recognizedDataTypes](recognizeddatatypes.md): The types of data that the data scanner identifies in the live video.
