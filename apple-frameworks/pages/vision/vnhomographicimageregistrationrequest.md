> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhomographicimageregistrationrequest](https://developer.apple.com/documentation/vision/vnhomographicimageregistrationrequest)

# VNHomographicImageRegistrationRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.

## Declaration

```swift
class VNHomographicImageRegistrationRequest
```

<a id="overview"></a>

## Overview

Create and perform a homographic image registration request to align content in two images through a homography. A *homography* is an isomorphism of projected spaces, a bijection that maps lines to lines.

## Topics

### Accessing the Results

- [results](vnhomographicimageregistrationrequest/results.md): The results of the image registration request.

### Identifying Request Revisions

- [VNHomographicImageRegistrationRequestRevision1](vnhomographicimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the homographic image registration request.

## Relationships

### Inherits From

- [VNImageRegistrationRequest](vnimageregistrationrequest.md)

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
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

# VNHomographicImageRegistrationRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.

## Declaration

```objectivec
@interface VNHomographicImageRegistrationRequest : VNImageRegistrationRequest
```

<a id="overview"></a>

## Overview

Create and perform a homographic image registration request to align content in two images through a homography. A *homography* is an isomorphism of projected spaces, a bijection that maps lines to lines.

## Topics

### Accessing the Results

- [results](vnhomographicimageregistrationrequest/results.md): The results of the image registration request.

### Identifying Request Revisions

- [VNHomographicImageRegistrationRequestRevision1](vnhomographicimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the homographic image registration request.

## Relationships

### Inherits From

- [VNImageRegistrationRequest](vnimageregistrationrequest.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.
