> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/classifyimagerequest](https://developer.apple.com/documentation/vision/classifyimagerequest)

# ClassifyImageRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request to classify an image.

## Declaration

```swift
struct ClassifyImageRequest
```

<a id="overview"></a>

## Overview

This type of request produces a collection of [ClassificationObservation](classificationobservation.md) objects that describe an image. Access the possible classifications through the [supportedIdentifiers](classifyimagerequest/supportedidentifiers.md) property.

```swift
if let imageURL = Bundle.main.url(forResource: "ClassificationImage",
                                      withExtension: "jpg") {
    do {
        let request = ClassifyImageRequest()
        let results = try await request.perform(on: imageURL)
        for classification in results {
            print("Classified \(classification.identifier)")
        }
    } catch {
        print("Encountered an error when performing the request: \(error.localizedDescription)")
    }
}
```

## Topics

### Creating a request

- [init(\_:)](classifyimagerequest/init%28__%29.md): Creates an image-classifier request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [ClassificationObservation](classificationobservation.md): An object that represents classification information that an image-analysis request produces.

### Configuring a request

- [cropAndScaleAction](classifyimagerequest/cropandscaleaction.md): An optional setting that tells the algorithm how to scale an input image before generating the result.
- [ImageCropAndScaleAction](imagecropandscaleaction.md): A scale to apply to an input image before performing a request.
- [supportedIdentifiers](classifyimagerequest/supportedidentifiers.md): The classification identifiers the request supports.

### Getting the revision

- [revision](classifyimagerequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](classifyimagerequest/supportedrevisions.md): The collection of revisions the request supports.
- [ClassifyImageRequest.Revision](classifyimagerequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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
- [DetectHumanRectanglesRequest](detecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [RecognizeAnimalsRequest](recognizeanimalsrequest.md): A request that recognizes animals in an image.
