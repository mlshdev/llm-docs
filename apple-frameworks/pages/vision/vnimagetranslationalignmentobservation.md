> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagetranslationalignmentobservation](https://developer.apple.com/documentation/vision/vnimagetranslationalignmentobservation)

# VNImageTranslationAlignmentObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Affine transform information that an image-alignment request produces.

## Declaration

```swift
class VNImageTranslationAlignmentObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md), informing the [alignmentTransform](vnimagetranslationalignmentobservation/alignmenttransform.md) performed to align the input images.

## Topics

### Determining Alignment

- [alignmentTransform](vnimagetranslationalignmentobservation/alignmenttransform.md): The alignment transform to align the floating image with the reference image.

### Identifying Request Revisions

- [VNTranslationalImageRegistrationRequestRevision1](vntranslationalimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the translational image registration request.

## Relationships

### Inherits From

- [VNImageAlignmentObservation](vnimagealignmentobservation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

# VNImageTranslationAlignmentObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Affine transform information that an image-alignment request produces.

## Declaration

```objectivec
@interface VNImageTranslationAlignmentObservation : VNImageAlignmentObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md), informing the [alignmentTransform](vnimagetranslationalignmentobservation/alignmenttransform.md) performed to align the input images.

## Topics

### Determining Alignment

- [alignmentTransform](vnimagetranslationalignmentobservation/alignmenttransform.md): The alignment transform to align the floating image with the reference image.

### Identifying Request Revisions

- [VNTranslationalImageRegistrationRequestRevision1](vntranslationalimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the translational image registration request.

## Relationships

### Inherits From

- [VNImageAlignmentObservation](vnimagealignmentobservation.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.
