> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/supportedrecognitionlanguages](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/supportedrecognitionlanguages)

# supportedRecognitionLanguages

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The identifiers of the languages that the request supports.

## Declaration

```swift
var supportedRecognitionLanguages: [Locale.Language] { get }
```

## See Also

### Configuring a request

- [RecognizeDocumentsRequest.BarcodeDetectionOptions](barcodedetectionoptions-swift.struct.md): A configuration object for detecting barcodes in a document.
- [RecognizeDocumentsRequest.TextRecognitionOptions](textrecognitionoptions-swift.struct.md): A configuration object for detected and recognized text within the document.
- [barcodeDetectionOptions](barcodedetectionoptions-swift.property.md): Configuration for detecting machine-readable codes in the document.
- [textRecognitionOptions](textrecognitionoptions-swift.property.md): Configuration for recognizing text in the document.
- [supportedBarcodeSymbologies](supportedbarcodesymbologies.md): The collection of revisions the request supports.
