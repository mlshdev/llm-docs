> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trackhomographicimageregistrationrequest](https://developer.apple.com/documentation/vision/trackhomographicimageregistrationrequest)

# TrackHomographicImageRegistrationRequest

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An image-analysis request that you track over time to determine the perspective warp matrix necessary to align the content of two images.

## Declaration

```swift
final class TrackHomographicImageRegistrationRequest
```

<a id="overview"></a>

## Overview

This request generates an [ImageHomographicAlignmentObservation](imagehomographicalignmentobservation.md) object that describes the matrix data the request detects.

## Topics

### Creating a request

- [init(\_:frameAnalysisSpacing:)](trackhomographicimageregistrationrequest/init%28__frameanalysisspacing_%29.md): Creates an image-alignment tracking request to determine the warp matrix.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

### Understanding the result

- [ImageHomographicAlignmentObservation](imagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

### Getting the revision

- [revision](trackhomographicimageregistrationrequest/revision-swift.property.md): The algorithm or implementation the request uses.
- [supportedRevisions](trackhomographicimageregistrationrequest/supportedrevisions.md): The collection of revisions the request supports.
- [TrackHomographicImageRegistrationRequest.Revision](trackhomographicimageregistrationrequest/revision-swift.enum.md): A type that describes the algorithm or implementation that the request performs.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ImageProcessingRequest](imageprocessingrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StatefulRequest](statefulrequest.md)
- [TargetedRequest](targetedrequest.md)
- [VisionRequest](visionrequest.md)

## See Also

### Image registration and comparison

- [GenerateImageFeaturePrintRequest](generateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [TrackTranslationalImageRegistrationRequest](tracktranslationalimageregistrationrequest.md): An image-analysis request that you track over time to determine the affine transform necessary to align the content of two images.
