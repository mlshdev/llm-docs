> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackhomographicimageregistrationrequest](https://developer.apple.com/documentation/vision/vntrackhomographicimageregistrationrequest)

# VNTrackHomographicImageRegistrationRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.

## Declaration

```swift
class VNTrackHomographicImageRegistrationRequest
```

<a id="overview"></a>

## Overview

This request is similar to [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md). However, as a [VNStatefulRequest](vnstatefulrequest.md), it automatically computes the registration against the previous frame.

## Topics

### Creating a Homographic Image

- [init()](vntrackhomographicimageregistrationrequest/init%28%29.md): Creates a new request that tracks the homographic transformation of two images.
- [init(completionHandler:)](vntrackhomographicimageregistrationrequest/init%28completionhandler_%29.md): Creates a new request that tracks the homographic transformation of two images, with a system callback on completion.

### Accessing the Results

- [results](vntrackhomographicimageregistrationrequest/results.md): The observed homographic image alignment request.

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
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

# VNTrackHomographicImageRegistrationRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.

## Declaration

```objectivec
@interface VNTrackHomographicImageRegistrationRequest : VNStatefulRequest
```

<a id="overview"></a>

## Overview

This request is similar to [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md). However, as a [VNStatefulRequest](vnstatefulrequest.md), it automatically computes the registration against the previous frame.

## Topics

### Creating a Homographic Image

- [init](vntrackhomographicimageregistrationrequest/init%28%29.md): Creates a new request that tracks the homographic transformation of two images.
- [initWithCompletionHandler:](vntrackhomographicimageregistrationrequest/init%28completionhandler_%29.md): Creates a new request that tracks the homographic transformation of two images, with a system callback on completion.

### Accessing the Results

- [results](vntrackhomographicimageregistrationrequest/results.md): The observed homographic image alignment request.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.
