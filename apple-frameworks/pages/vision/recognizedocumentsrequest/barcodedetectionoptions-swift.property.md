> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.property](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/barcodedetectionoptions-swift.property)

# barcodeDetectionOptions

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configuration for detecting machine-readable codes in the document.

## Declaration

```swift
var barcodeDetectionOptions: RecognizeDocumentsRequest.BarcodeDetectionOptions
```

<a id="discussion"></a>

## Discussion

Enable barcode detection and set what symbologies (eg. `.qrCode`) will be detected.

## See Also

### Configuring a request

- [RecognizeDocumentsRequest.BarcodeDetectionOptions](barcodedetectionoptions-swift.struct.md): A configuration object for detecting barcodes in a document.
- [RecognizeDocumentsRequest.TextRecognitionOptions](textrecognitionoptions-swift.struct.md): A configuration object for detected and recognized text within the document.
- [textRecognitionOptions](textrecognitionoptions-swift.property.md): Configuration for recognizing text in the document.
- [supportedBarcodeSymbologies](supportedbarcodesymbologies.md): The collection of revisions the request supports.
- [supportedRecognitionLanguages](supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.
