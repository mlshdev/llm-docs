> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntargetedimagerequest](https://developer.apple.com/documentation/vision/vntargetedimagerequest)

# VNTargetedImageRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.

## Declaration

```swift
class VNTargetedImageRequest
```

<a id="overview"></a>

## Overview

Other Vision request handlers that operate on both the processed image and a secondary image inherit from this abstract base class. Instantiate one of its subclasses to perform image analysis, and pass in auxiliary image data by filling in the `options` dictionary at initialization.

## Topics

### Creating a Request

- [init(targetedCGImage:options:completionHandler:)](vntargetedimagerequest/init%28targetedcgimage_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image, executing the completion handler when done.
- [init(targetedCGImage:orientation:options:completionHandler:)](vntargetedimagerequest/init%28targetedcgimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image of known orientation, executing the completion handler when done.
- [init(targetedCIImage:options:completionHandler:)](vntargetedimagerequest/init%28targetedciimage_options_completionhandler_%29.md): Creates a new request targeting a Core Image image.
- [init(targetedCIImage:orientation:options:completionHandler:)](vntargetedimagerequest/init%28targetedciimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Image image of known orientation, executing the completion handler when done.
- [init(targetedCVPixelBuffer:options:completionHandler:)](vntargetedimagerequest/init%28targetedcvpixelbuffer_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer.
- [init(targetedCVPixelBuffer:orientation:options:completionHandler:)](vntargetedimagerequest/init%28targetedcvpixelbuffer_orientation_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer of known orientation.
- [init(targetedCMSampleBuffer:options:completionHandler:)](vntargetedimagerequest/init%28targetedcmsamplebuffer_options_completionhandler_%29.md): Creates a new request with a completion handler that targets an image in a sample buffer.
- [init(targetedCMSampleBuffer:orientation:options:completionHandler:)](vntargetedimagerequest/init%28targetedcmsamplebuffer_orientation_options_completionhandler_%29.md): Creates a new request with a completion handler that targets an image of a known orientation in a sample buffer.
- [init(targetedImageData:options:completionHandler:)](vntargetedimagerequest/init%28targetedimagedata_options_completionhandler_%29.md): Creates a new request targeting an image as raw data, executing the completion handler when done.
- [init(targetedImageData:orientation:options:completionHandler:)](vntargetedimagerequest/init%28targetedimagedata_orientation_options_completionhandler_%29.md): Creates a new request targeting a raw data image of known orientation, executing the completion handler when done.
- [init(targetedImageURL:options:completionHandler:)](vntargetedimagerequest/init%28targetedimageurl_options_completionhandler_%29.md): Creates a new request targeting an image at the specified URL, executing the completion handler when done.
- [init(targetedImageURL:orientation:options:completionHandler:)](vntargetedimagerequest/init%28targetedimageurl_orientation_options_completionhandler_%29.md): Creates a new request targeting an image of known orientation, at the specified URL, executing the completion handler when done.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Inherited By

- [VNGenerateOpticalFlowRequest](vngenerateopticalflowrequest.md)
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
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

# VNTargetedImageRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.

## Declaration

```objectivec
@interface VNTargetedImageRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

Other Vision request handlers that operate on both the processed image and a secondary image inherit from this abstract base class. Instantiate one of its subclasses to perform image analysis, and pass in auxiliary image data by filling in the `options` dictionary at initialization.

## Topics

### Creating a Request

- [initWithTargetedCGImage:options:](vntargetedimagerequest/initwithtargetedcgimage_options_.md): Creates a new request targeting a Core Graphics image.
- [initWithTargetedCGImage:options:completionHandler:](vntargetedimagerequest/init%28targetedcgimage_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image, executing the completion handler when done.
- [initWithTargetedCGImage:orientation:options:](vntargetedimagerequest/initwithtargetedcgimage_orientation_options_.md): Creates a new request targeting a Core Graphics image of known orientation.
- [initWithTargetedCGImage:orientation:options:completionHandler:](vntargetedimagerequest/init%28targetedcgimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Graphics image of known orientation, executing the completion handler when done.
- [initWithTargetedCIImage:options:](vntargetedimagerequest/initwithtargetedciimage_options_.md): Creates a new request targeting a Core Image image.
- [initWithTargetedCIImage:options:completionHandler:](vntargetedimagerequest/init%28targetedciimage_options_completionhandler_%29.md): Creates a new request targeting a Core Image image.
- [initWithTargetedCIImage:orientation:options:](vntargetedimagerequest/initwithtargetedciimage_orientation_options_.md): Creates a new request targeting a Core Image image of known orientation.
- [initWithTargetedCIImage:orientation:options:completionHandler:](vntargetedimagerequest/init%28targetedciimage_orientation_options_completionhandler_%29.md): Creates a new request targeting a Core Image image of known orientation, executing the completion handler when done.
- [initWithTargetedCVPixelBuffer:options:](vntargetedimagerequest/initwithtargetedcvpixelbuffer_options_.md): Creates a new request targeting an image in a pixel buffer.
- [initWithTargetedCVPixelBuffer:options:completionHandler:](vntargetedimagerequest/init%28targetedcvpixelbuffer_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer.
- [initWithTargetedCVPixelBuffer:orientation:options:](vntargetedimagerequest/initwithtargetedcvpixelbuffer_orientation_options_.md): Creates a new request targeting an image in a pixel buffer of known orientation.
- [initWithTargetedCVPixelBuffer:orientation:options:completionHandler:](vntargetedimagerequest/init%28targetedcvpixelbuffer_orientation_options_completionhandler_%29.md): Creates a new request targeting an image in a pixel buffer of known orientation.
- [initWithTargetedCMSampleBuffer:options:](vntargetedimagerequest/initwithtargetedcmsamplebuffer_options_.md): Creates a new request that targets an image in a sample buffer.
- [initWithTargetedCMSampleBuffer:options:completionHandler:](vntargetedimagerequest/init%28targetedcmsamplebuffer_options_completionhandler_%29.md): Creates a new request with a completion handler that targets an image in a sample buffer.
- [initWithTargetedCMSampleBuffer:orientation:options:](vntargetedimagerequest/initwithtargetedcmsamplebuffer_orientation_options_.md): Creates a new request that targets an image of a known orientation in a sample buffer.
- [initWithTargetedCMSampleBuffer:orientation:options:completionHandler:](vntargetedimagerequest/init%28targetedcmsamplebuffer_orientation_options_completionhandler_%29.md): Creates a new request with a completion handler that targets an image of a known orientation in a sample buffer.
- [initWithTargetedImageData:options:](vntargetedimagerequest/initwithtargetedimagedata_options_.md): Creates a new request targeting an image as raw data.
- [initWithTargetedImageData:options:completionHandler:](vntargetedimagerequest/init%28targetedimagedata_options_completionhandler_%29.md): Creates a new request targeting an image as raw data, executing the completion handler when done.
- [initWithTargetedImageData:orientation:options:](vntargetedimagerequest/initwithtargetedimagedata_orientation_options_.md): Creates a new request targeting a raw data image of known orientation.
- [initWithTargetedImageData:orientation:options:completionHandler:](vntargetedimagerequest/init%28targetedimagedata_orientation_options_completionhandler_%29.md): Creates a new request targeting a raw data image of known orientation, executing the completion handler when done.
- [initWithTargetedImageURL:options:](vntargetedimagerequest/initwithtargetedimageurl_options_.md): Creates a new request targeting an image at the specified URL.
- [initWithTargetedImageURL:options:completionHandler:](vntargetedimagerequest/init%28targetedimageurl_options_completionhandler_%29.md): Creates a new request targeting an image at the specified URL, executing the completion handler when done.
- [initWithTargetedImageURL:orientation:options:](vntargetedimagerequest/initwithtargetedimageurl_orientation_options_.md): Creates a new request targeting an image of known orientation, at the specified URL.
- [initWithTargetedImageURL:orientation:options:completionHandler:](vntargetedimagerequest/init%28targetedimageurl_orientation_options_completionhandler_%29.md): Creates a new request targeting an image of known orientation, at the specified URL, executing the completion handler when done.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Inherited By

- [VNGenerateOpticalFlowRequest](vngenerateopticalflowrequest.md)
- [VNImageRegistrationRequest](vnimageregistrationrequest.md)

## See Also

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.
