> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/aligning-similar-images](https://developer.apple.com/documentation/vision/aligning-similar-images)

# Aligning Similar Images

**Interface languages:** Swift, Objective-C

**Framework:** Vision  
**Kind:** Sample Code  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · Xcode 12.4+

Construct a composite image from images that capture the same scene.

<a id="Overview"></a>

## Overview

This sample app uses image registration requests from the Vision framework to calculate an alignment transform between two images of the same scene that are slightly different. The sample app uses the alignment transform to construct a single, composite image that contains the aligned content of both images.

<a id="Provide-Input-Images"></a>

### Provide Input Images

Image registration requests require two images, a reference image and a floating image. The best alignment occurs when the content of the input images is very similar. In this sample app, the input images simulate an image capture of the same scene from a slightly different perspective. The two images are nearly identical — one has a slight warp and is offset from the other. The sample app displays the input images next to the aligned composite image for visual comparison in the `registrationImages` view.

<a id="Select-a-Registration-Mechanism"></a>

### Select a Registration Mechanism

The Vision framework provides a translational image registration mechanism, [VNTranslationalImageRegistrationRequest](https://developer.apple.com/documentation/vision/vntranslationalimageregistrationrequest), and a homographic image registration mechanism, [VNHomographicImageRegistrationRequest](https://developer.apple.com/documentation/vision/vnhomographicimageregistrationrequest). The sample app provides a toggle between these two image registration mechanisms to visually demonstrate the differences in their image alignment observations.

<a id="Apply-the-Alignment-Observation"></a>

### Apply the Alignment Observation

This project applies the alignment observation for each image registration mechanism in the `register` function, and returns an image that contains the composited result. The `register` function uses the `makeAlignedImage` function to transform the floating image.  The sample uses the [transformed(by:)](https://developer.apple.com/documentation/coreimage/ciimage/1438203-transformed) method to apply the translational transform for the translational image registration mechanism, and uses the [CIPerspectiveTransform](https://developer.apple.com/documentation/coreimage/ciperspectivetransform) filter to apply the pespective transform for the homographic image registration mechanism.

## See Also

### Image alignment

- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.
