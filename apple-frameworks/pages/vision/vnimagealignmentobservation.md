> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagealignmentobservation](https://developer.apple.com/documentation/vision/vnimagealignmentobservation)

# VNImageAlignmentObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image-analysis results that describe the relative alignment of two images.

## Declaration

```swift
class VNImageAlignmentObservation
```

<a id="overview"></a>

## Overview

This abstract superclass forms the basis of image alignment or registration output. You receive its subclasses, such as [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md) and [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md), by performing specific registration requests. Don’t create one of these classes yourself.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md)
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md)

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
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

# VNImageAlignmentObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image-analysis results that describe the relative alignment of two images.

## Declaration

```objectivec
@interface VNImageAlignmentObservation : VNObservation
```

<a id="overview"></a>

## Overview

This abstract superclass forms the basis of image alignment or registration output. You receive its subclasses, such as [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md) and [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md), by performing specific registration requests. Don’t create one of these classes yourself.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md)
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.
