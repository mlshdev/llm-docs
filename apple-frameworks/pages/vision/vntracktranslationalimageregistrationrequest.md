> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntracktranslationalimageregistrationrequest](https://developer.apple.com/documentation/vision/vntracktranslationalimageregistrationrequest)

# VNTrackTranslationalImageRegistrationRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.

## Declaration

```swift
class VNTrackTranslationalImageRegistrationRequest
```

<a id="overview"></a>

## Overview

This request is similar to [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md). However, as a [VNStatefulRequest](vnstatefulrequest.md), it automatically computes the registration against the previous frame.

## Topics

### Creating a Translational Image

- [init()](vntracktranslationalimageregistrationrequest/init%28%29.md): Creates a new request that tracks the translational registration of two images.
- [init(completionHandler:)](vntracktranslationalimageregistrationrequest/init%28completionhandler_%29.md): Creates a new request that tracks the translational registration of two images, with a system callback on completion.

### Accessing the Results

- [results](vntracktranslationalimageregistrationrequest/results.md): The observed translational image alignment request.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

# VNTrackTranslationalImageRegistrationRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.

## Declaration

```objectivec
@interface VNTrackTranslationalImageRegistrationRequest : VNStatefulRequest
```

<a id="overview"></a>

## Overview

This request is similar to [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md). However, as a [VNStatefulRequest](vnstatefulrequest.md), it automatically computes the registration against the previous frame.

## Topics

### Creating a Translational Image

- [init](vntracktranslationalimageregistrationrequest/init%28%29.md): Creates a new request that tracks the translational registration of two images.
- [initWithCompletionHandler:](vntracktranslationalimageregistrationrequest/init%28completionhandler_%29.md): Creates a new request that tracks the translational registration of two images, with a system callback on completion.

### Accessing the Results

- [results](vntracktranslationalimageregistrationrequest/results.md): The observed translational image alignment request.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.
