> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateimagefeatureprintrequest](https://developer.apple.com/documentation/vision/generateimagefeatureprintrequest)

# GenerateImageFeaturePrintRequest

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image-based request to generate feature prints from an image.

## Declaration

```swift
struct GenerateImageFeaturePrintRequest
```

<a id="overview"></a>

## Overview

This request generates an [FeaturePrintObservation](featureprintobservation.md) object with the features in an image.

## Topics

### Creating a request

- [init(\_:)](generateimagefeatureprintrequest/init%28__%29.md): Creates an image-feature print request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [FeaturePrintObservation](featureprintobservation.md): An observation that provides the recognized feature print.

### Configuring a request

- [cropAndScaleAction](generateimagefeatureprintrequest/cropandscaleaction.md): An optional setting that tells the algorithm how to scale an input image before generating the result.
- [ImageCropAndScaleAction](imagecropandscaleaction.md): A scale to apply to an input image before performing a request.

### Getting the revision

- [revision](generateimagefeatureprintrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](generateimagefeatureprintrequest/supportedrevisions.md): The collection of revisions the request supports.
- [GenerateImageFeaturePrintRequest.Revision](generateimagefeatureprintrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

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

### Image registration and comparison

- [TrackHomographicImageRegistrationRequest](trackhomographicimageregistrationrequest.md): An image-analysis request that you track over time to determine the perspective warp matrix necessary to align the content of two images.
- [TrackTranslationalImageRegistrationRequest](tracktranslationalimageregistrationrequest.md): An image-analysis request that you track over time to determine the affine transform necessary to align the content of two images.
