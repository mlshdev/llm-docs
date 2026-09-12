> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detectdocumentsegmentationrequest](https://developer.apple.com/documentation/vision/detectdocumentsegmentationrequest)

# DetectDocumentSegmentationRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request that detects rectangular regions that contain text in the input image.

## Declaration

```swift
struct DetectDocumentSegmentationRequest
```

<a id="overview"></a>

## Overview

Perform this request to detect a document in an image. The result that the request generates contains the four corner points of a document’s quadrilateral and saliency masks. The request returns the resulting location and segmentation mask in an instance of [DetectedDocumentObservation](detecteddocumentobservation.md).

## Topics

### Creating a request

- [init(\_:)](detectdocumentsegmentationrequest/init%28__%29.md): Creates a document-segmentation request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [DetectedDocumentObservation](detecteddocumentobservation.md): The heat map that’s a pixel buffer in a one-component floating-point pixel format.

### Getting the revision

- [revision](detectdocumentsegmentationrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detectdocumentsegmentationrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectDocumentSegmentationRequest.Revision](detectdocumentsegmentationrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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
- [DetectTextRectanglesRequest](detecttextrectanglesrequest.md): An image-analysis request that finds regions of visible text in an image.
- [RecognizeDocumentsRequest](recognizedocumentsrequest.md): An image-analysis request to scan an image of a document and provide information about its structure.
- [RecognizeTextRequest](recognizetextrequest.md): An image-analysis request that recognizes text in an image.
