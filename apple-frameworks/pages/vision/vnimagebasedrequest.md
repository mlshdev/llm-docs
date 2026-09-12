> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagebasedrequest](https://developer.apple.com/documentation/vision/vnimagebasedrequest)

# VNImageBasedRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image-analysis requests that focus on a specific part of an image.

## Declaration

```swift
class VNImageBasedRequest
```

<a id="overview"></a>

## Overview

Other Vision request handlers that operate on still images inherit from this abstract base class. Don’t use it directly.

## Topics

### Configuring a Request

- [regionOfInterest](vnimagebasedrequest/regionofinterest.md): The region of the image in which Vision will perform the request.

## Relationships

### Inherits From

- [VNRequest](vnrequest.md)

### Inherited By

- [VNCalculateImageAestheticsScoresRequest](vncalculateimageaestheticsscoresrequest.md)
- [VNClassifyImageRequest](vnclassifyimagerequest.md)
- [VNCoreMLRequest](vncoremlrequest.md)
- [VNDetectAnimalBodyPoseRequest](vndetectanimalbodyposerequest.md)
- [VNDetectBarcodesRequest](vndetectbarcodesrequest.md)
- [VNDetectContoursRequest](vndetectcontoursrequest.md)
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md)
- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md)
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md)
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md)
- [VNDetectHorizonRequest](vndetecthorizonrequest.md)
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md)
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md)
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md)
- [VNDetectRectanglesRequest](vndetectrectanglesrequest.md)
- [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md)
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md)
- [VNGenerateForegroundInstanceMaskRequest](vngenerateforegroundinstancemaskrequest.md)
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md)
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md)
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md)
- [VNRecognizeAnimalsRequest](vnrecognizeanimalsrequest.md)
- [VNRecognizeTextRequest](vnrecognizetextrequest.md)
- [VNStatefulRequest](vnstatefulrequest.md)
- [VNTargetedImageRequest](vntargetedimagerequest.md)
- [VNTrackingRequest](vntrackingrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [Classifying images for categorization and search](classifying-images-for-categorization-and-search.md): Analyze and label images using a Vision classification request.
- [Analyzing Image Similarity with Feature Print](analyzing-image-similarity-with-feature-print.md): Generate a feature print to compute distance between images.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

# VNImageBasedRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image-analysis requests that focus on a specific part of an image.

## Declaration

```objectivec
@interface VNImageBasedRequest : VNRequest
```

<a id="overview"></a>

## Overview

Other Vision request handlers that operate on still images inherit from this abstract base class. Don’t use it directly.

## Topics

### Configuring a Request

- [regionOfInterest](vnimagebasedrequest/regionofinterest.md): The region of the image in which Vision will perform the request.

## Relationships

### Inherits From

- [VNRequest](vnrequest.md)

### Inherited By

- [VNCalculateImageAestheticsScoresRequest](vncalculateimageaestheticsscoresrequest.md)
- [VNClassifyImageRequest](vnclassifyimagerequest.md)
- [VNCoreMLRequest](vncoremlrequest.md)
- [VNDetectAnimalBodyPoseRequest](vndetectanimalbodyposerequest.md)
- [VNDetectBarcodesRequest](vndetectbarcodesrequest.md)
- [VNDetectContoursRequest](vndetectcontoursrequest.md)
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md)
- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md)
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md)
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md)
- [VNDetectHorizonRequest](vndetecthorizonrequest.md)
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md)
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md)
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md)
- [VNDetectRectanglesRequest](vndetectrectanglesrequest.md)
- [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md)
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md)
- [VNGenerateForegroundInstanceMaskRequest](vngenerateforegroundinstancemaskrequest.md)
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md)
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md)
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md)
- [VNRecognizeAnimalsRequest](vnrecognizeanimalsrequest.md)
- [VNRecognizeTextRequest](vnrecognizetextrequest.md)
- [VNStatefulRequest](vnstatefulrequest.md)
- [VNTargetedImageRequest](vntargetedimagerequest.md)
- [VNTrackingRequest](vntrackingrequest.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.
