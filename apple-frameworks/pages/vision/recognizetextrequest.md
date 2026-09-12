> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizetextrequest](https://developer.apple.com/documentation/vision/recognizetextrequest)

# RecognizeTextRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An image-analysis request that recognizes text in an image.

## Declaration

```swift
struct RecognizeTextRequest
```

<a id="overview"></a>

## Overview

This request generates a collection of [RecognizedTextObservation](recognizedtextobservation.md) objects that describe the text the request detects. By default, a text-recognition request first locates all possible glyphs or characters in the input image, and then analyzes each string. To specify or limit the languages to find in the request, set [recognitionLanguages](recognizetextrequest/recognitionlanguages.md) to an array that contains the names of the languages of text you want to recognize.

## Topics

### Creating a request

- [init(\_:)](recognizetextrequest/init%28__%29.md): Creates a text-recognition request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [RecognizedTextObservation](recognizedtextobservation.md): An object that contains information about both the location and content of text and glyphs that the framework recognizes in an image.

### Configuring a request

- [automaticallyDetectsLanguage](recognizetextrequest/automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [usesLanguageCorrection](recognizetextrequest/useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [supportedRecognitionLanguages](recognizetextrequest/supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.
- [customWords](recognizetextrequest/customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [minimumTextHeightFraction](recognizetextrequest/minimumtextheightfraction.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLanguages](recognizetextrequest/recognitionlanguages.md): An array of languages to detect, in priority order.
- [recognitionLevel](recognizetextrequest/recognitionlevel-swift.property.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
- [RecognizeTextRequest.RecognitionLevel](recognizetextrequest/recognitionlevel-swift.enum.md): Constants that identify the performance and accuracy of the text recognition.

### Getting the revision

- [revision](recognizetextrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](recognizetextrequest/supportedrevisions.md): The collection of revisions the request supports.
- [RecognizeTextRequest.Revision](recognizetextrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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
- [RecognizeDocumentsRequest](recognizedocumentsrequest.md): An image-analysis request to scan an image of a document and provide information about its structure.
