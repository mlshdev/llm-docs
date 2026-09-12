> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.property](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.property)

# textRecognitionOptions

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configuration for recognizing text in the document.

## Declaration

```swift
var textRecognitionOptions: RecognizeDocumentsRequest.TextRecognitionOptions
```

<a id="discussion"></a>

## Discussion

Set properties such as what languages are detected.

## See Also

### Configuring a request

- [RecognizeDocumentsRequest.BarcodeDetectionOptions](barcodedetectionoptions-swift.struct.md): A configuration object for detecting barcodes in a document.
- [RecognizeDocumentsRequest.TextRecognitionOptions](textrecognitionoptions-swift.struct.md): A configuration object for detected and recognized text within the document.
- [barcodeDetectionOptions](barcodedetectionoptions-swift.property.md): Configuration for detecting machine-readable codes in the document.
- [supportedBarcodeSymbologies](supportedbarcodesymbologies.md): The collection of revisions the request supports.
- [supportedRecognitionLanguages](supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.
