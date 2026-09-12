> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest](https://developer.apple.com/documentation/vision/recognizedocumentsrequest)

# RecognizeDocumentsRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An image-analysis request to scan an image of a document and provide information about its structure.

## Declaration

```swift
struct RecognizeDocumentsRequest
```

<a id="overview"></a>

## Overview

This request scans a document and extracts different groups of text and barcodes within the document image. Use this request to understand different types of structured texts like receipts, nutritional labels, textbook pages, forms, or other documents that you want to understand in further detail.

The request generates a [DocumentObservation](documentobservation.md) array, which allows you to access your chosen document’s structure grouped by words, lines, or paragraphs. You can also access tables and lists that appear in the document.

## Topics

### Creating a request

- [init(\_:)](recognizedocumentsrequest/init%28__%29.md): Creates a document content recognition request.

### Understanding the result

- [DocumentObservation](documentobservation.md): Information about the sections of content that an image-analysis request detects in a document.

### Configuring a request

- [RecognizeDocumentsRequest.BarcodeDetectionOptions](recognizedocumentsrequest/barcodedetectionoptions-swift.struct.md): A configuration object for detecting barcodes in a document.
- [RecognizeDocumentsRequest.TextRecognitionOptions](recognizedocumentsrequest/textrecognitionoptions-swift.struct.md): A configuration object for detected and recognized text within the document.
- [barcodeDetectionOptions](recognizedocumentsrequest/barcodedetectionoptions-swift.property.md): Configuration for detecting machine-readable codes in the document.
- [textRecognitionOptions](recognizedocumentsrequest/textrecognitionoptions-swift.property.md): Configuration for recognizing text in the document.
- [supportedBarcodeSymbologies](recognizedocumentsrequest/supportedbarcodesymbologies.md): The collection of revisions the request supports.
- [supportedRecognitionLanguages](recognizedocumentsrequest/supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.

### Getting the revision

- [revision](recognizedocumentsrequest/revision-swift.property.md): The request’s configured revision.
- [supportedRevisions](recognizedocumentsrequest/supportedrevisions.md): The revisions supported by `ClassifyImageRequest`.
- [RecognizeDocumentsRequest.Revision](recognizedocumentsrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ImageProcessingRequest](imageprocessingrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionRequest](visionrequest.md)

## See Also

### Text and document analysis

- [Locating and displaying recognized text](locating-and-displaying-recognized-text.md): Perform text recognition on a photo using the Vision framework’s text-recognition request.
- [Recognizing tables within a document](recognize-tables-within-a-document.md): Scan a document that contains a table and extract its content in a formatted way.
- [DetectBarcodesRequest](detectbarcodesrequest.md): A request that detects barcodes in an image.
- [DetectDocumentSegmentationRequest](detectdocumentsegmentationrequest.md): A request that detects rectangular regions that contain text in the input image.
- [DetectTextRectanglesRequest](detecttextrectanglesrequest.md): An image-analysis request that finds regions of visible text in an image.
- [RecognizeTextRequest](recognizetextrequest.md): An image-analysis request that recognizes text in an image.
