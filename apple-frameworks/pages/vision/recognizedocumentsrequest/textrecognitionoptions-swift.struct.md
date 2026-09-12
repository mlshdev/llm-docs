> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.struct](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.struct)

# RecognizeDocumentsRequest.TextRecognitionOptions

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration object for detected and recognized text within the document.

## Declaration

```swift
struct TextRecognitionOptions
```

## Topics

### Inspecting the recognized text

- [automaticallyDetectLanguage](textrecognitionoptions-swift.struct/automaticallydetectlanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [customWords](textrecognitionoptions-swift.struct/customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [maximumCandidateCount](textrecognitionoptions-swift.struct/maximumcandidatecount.md): The maximum number of text candidates to return.
- [minimumTextHeightFraction](textrecognitionoptions-swift.struct/minimumtextheightfraction.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLanguages](textrecognitionoptions-swift.struct/recognitionlanguages.md): An array of languages to detect, in priority order.
- [useLanguageCorrection](textrecognitionoptions-swift.struct/uselanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.

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

- [RecognizeDocumentsRequest.BarcodeDetectionOptions](barcodedetectionoptions-swift.struct.md): A configuration object for detecting barcodes in a document.
- [barcodeDetectionOptions](barcodedetectionoptions-swift.property.md): Configuration for detecting machine-readable codes in the document.
- [textRecognitionOptions](textrecognitionoptions-swift.property.md): Configuration for recognizing text in the document.
- [supportedBarcodeSymbologies](supportedbarcodesymbologies.md): The collection of revisions the request supports.
- [supportedRecognitionLanguages](supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.
