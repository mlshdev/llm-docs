> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.struct](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.struct)

# RecognizeDocumentsRequest.BarcodeDetectionOptions

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration object for detecting barcodes in a document.

## Declaration

```swift
struct BarcodeDetectionOptions
```

## Topics

### Getting the symbology

- [coalesceCompositeSymbologies](barcodedetectionoptions-swift.struct/coalescecompositesymbologies.md): A Boolean value that indicates whether the request combines multiple codes.
- [enabled](barcodedetectionoptions-swift.struct/enabled.md): Boolean value that indicates whether to detect barcodes in the document.
- [symbologies](barcodedetectionoptions-swift.struct/symbologies.md): The barcode symbologies that the request detects in an image.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a request

- [RecognizeDocumentsRequest.TextRecognitionOptions](textrecognitionoptions-swift.struct.md): A configuration object for detected and recognized text within the document.
- [barcodeDetectionOptions](barcodedetectionoptions-swift.property.md): Configuration for detecting machine-readable codes in the document.
- [textRecognitionOptions](textrecognitionoptions-swift.property.md): Configuration for recognizing text in the document.
- [supportedBarcodeSymbologies](supportedbarcodesymbologies.md): The collection of revisions the request supports.
- [supportedRecognitionLanguages](supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.
