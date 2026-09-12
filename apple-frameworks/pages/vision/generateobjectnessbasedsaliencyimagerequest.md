> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateobjectnessbasedsaliencyimagerequest](https://developer.apple.com/documentation/vision/generateobjectnessbasedsaliencyimagerequest)

# GenerateObjectnessBasedSaliencyImageRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A request that generates a heat map that identifies the parts of an image most likely to represent objects.

## Declaration

```swift
struct GenerateObjectnessBasedSaliencyImageRequest
```

<a id="overview"></a>

## Overview

The request returns the resulting heat map and object data in an instance of [SaliencyImageObservation](saliencyimageobservation.md).

## Topics

### Creating a request

- [init(\_:)](generateobjectnessbasedsaliencyimagerequest/init%28__%29.md): Creates an objectness saliency image request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [SaliencyImageObservation](saliencyimageobservation.md): An observation that contains a grayscale heat map of important areas across an image.

### Getting the revision

- [revision](generateobjectnessbasedsaliencyimagerequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](generateobjectnessbasedsaliencyimagerequest/supportedrevisions.md): The collection of revisions the request supports.
- [GenerateObjectnessBasedSaliencyImageRequest.Revision](generateobjectnessbasedsaliencyimagerequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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

### Image quality and saliency analysis

- [Implementing saliency-based image cropping in iOS and watchOS](implementing-saliency-based-image-cropping-in-ios-and-watchos.md): Crop regions most likely drawing people’s attention from an image in your iOS or watchOS app.
- [Generating high-quality thumbnails from videos](generating-thumbnails-from-videos.md): Identify the most visually pleasing frames in a video by using the image-aesthetics scores request.
- [CalculateImageAestheticsScoresRequest](calculateimageaestheticsscoresrequest.md): A request that analyzes an image for aesthetically pleasing attributes.
- [DetectLensSmudgeRequest](detectlenssmudgerequest.md): A request that detects a smudge on a lens from an image or video frame capture.
- [GenerateAttentionBasedSaliencyImageRequest](generateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
