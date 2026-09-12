> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizeanimalsrequest](https://developer.apple.com/documentation/vision/recognizeanimalsrequest)

# RecognizeAnimalsRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request that recognizes animals in an image.

## Declaration

```swift
struct RecognizeAnimalsRequest
```

<a id="overview"></a>

## Overview

This request generates a collection of [RecognizedObjectObservation](recognizedobjectobservation.md) objects that describe the animals the request detects.

## Topics

### Creating a request

- [init(\_:)](recognizeanimalsrequest/init%28__%29.md): Creates an animal-recognition request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [RecognizedObjectObservation](recognizedobjectobservation.md): An observation with an array of classification labels that classify the recognized object.

### Configuring a request

- [supportedAnimals](recognizeanimalsrequest/supportedanimals.md): The collection of animals that the request can detect.
- [RecognizeAnimalsRequest.Animal](recognizeanimalsrequest/animal.md): An identifier for a recognizable animal.

### Getting the revision

- [revision](recognizeanimalsrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](recognizeanimalsrequest/supportedrevisions.md): The collection of revisions the request supports.
- [RecognizeAnimalsRequest.Revision](recognizeanimalsrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

### Instance Properties

- [supportedIdentifiers](recognizeanimalsrequest/supportedidentifiers.md): The collection of animal identifiers that the request can detect.

### Enumerations

- [RecognizeAnimalsRequest.Identifier](recognizeanimalsrequest/identifier.md)

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

### Image classification and recognition

- [Classifying images for categorization and search](classifying-images-for-categorization-and-search.md): Analyze and label images using a Vision classification request.
- [ClassifyImageRequest](classifyimagerequest.md): A request to classify an image.
- [DetectHumanRectanglesRequest](detecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
