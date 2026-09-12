> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecttextrectanglesrequest](https://developer.apple.com/documentation/vision/detecttextrectanglesrequest)

# DetectTextRectanglesRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An image-analysis request that finds regions of visible text in an image.

## Declaration

```swift
struct DetectTextRectanglesRequest
```

<a id="overview"></a>

## Overview

This request generates a collection of [TextObservation](textobservation.md) objects that describe each text region the request detects.

## Topics

### Creating a request

- [init(\_:)](detecttextrectanglesrequest/init%28__%29.md): Creates a text rectangles detection request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [TextObservation](textobservation.md): Information about regions of text that an image-analysis request detects.

### Configuring a request

- [reportCharacterBoxes](detecttextrectanglesrequest/reportcharacterboxes.md): A Boolean value that indicates whether the request detects character-bounding boxes.

### Getting the revision

- [revision](detecttextrectanglesrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](detecttextrectanglesrequest/supportedrevisions.md): The collection of revisions the request supports.
- [DetectTextRectanglesRequest.Revision](detecttextrectanglesrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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
- [RecognizeDocumentsRequest](recognizedocumentsrequest.md): An image-analysis request to scan an image of a document and provide information about its structure.
- [RecognizeTextRequest](recognizetextrequest.md): An image-analysis request that recognizes text in an image.
