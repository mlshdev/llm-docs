> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectbarcodesrequest](https://developer.apple.com/documentation/vision/detectbarcodesrequest)

# DetectBarcodesRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request that detects barcodes in an image.

## Declaration

```swift
struct DetectBarcodesRequest
```

<a id="overview"></a>

## Overview

This request generates a collection of [BarcodeObservation](barcodeobservation.md) objects that describe each barcode the request detects.

## Topics

### Creating a request

- [init(\_:)](detectbarcodesrequest/init%28__%29.md): Creates a barcode-detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [BarcodeObservation](barcodeobservation.md): An object that represents barcode information that an image-analysis request detects.

### Configuring a request

- [symbologies](detectbarcodesrequest/symbologies.md): The barcode symbologies that the request detects in an image.
- [supportedSymbologies](detectbarcodesrequest/supportedsymbologies.md): The collection of barcode symbologies that the request can recognize.
- [BarcodeSymbology](barcodesymbology.md): The barcode symbologies that the framework detects.
- [coalescesCompositeSymbologies](detectbarcodesrequest/coalescescompositesymbologies.md): A Boolean value that indicates whether the request coalesces multiple codes into one.

### Getting the revision

- [revision](detectbarcodesrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detectbarcodesrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectBarcodesRequest.Revision](detectbarcodesrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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
- [DetectDocumentSegmentationRequest](detectdocumentsegmentationrequest.md): A request that detects rectangular regions that contain text in the input image.
- [DetectTextRectanglesRequest](detecttextrectanglesrequest.md): An image-analysis request that finds regions of visible text in an image.
- [RecognizeDocumentsRequest](recognizedocumentsrequest.md): An image-analysis request to scan an image of a document and provide information about its structure.
- [RecognizeTextRequest](recognizetextrequest.md): An image-analysis request that recognizes text in an image.
