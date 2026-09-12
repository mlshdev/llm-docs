> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateimagefeatureprintrequest](https://developer.apple.com/documentation/vision/vngenerateimagefeatureprintrequest)

# VNGenerateImageFeaturePrintRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An image-based request to generate feature prints from an image.

## Declaration

```swift
class VNGenerateImageFeaturePrintRequest
```

<a id="overview"></a>

## Overview

This request returns the feature print data it generates as an array of [VNFeaturePrintObservation](vnfeatureprintobservation.md) objects.

## Topics

### Scaling and Cropping Images

- [imageCropAndScaleOption](vngenerateimagefeatureprintrequest/imagecropandscaleoption.md): An optional setting that tells the algorithm how to scale an input image before generating the feature print.
- [VNImageCropAndScaleOption](vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.

### Accessing the Results

- [results](vngenerateimagefeatureprintrequest/results.md): The results of the feature print request.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.

### Identifying Request Revisions

- [VNGenerateImageFeaturePrintRequestRevision1](vngenerateimagefeatureprintrequestrevision1.md): A constant for specifying the first revision of the feature-print request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

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
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

# VNGenerateImageFeaturePrintRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An image-based request to generate feature prints from an image.

## Declaration

```objectivec
@interface VNGenerateImageFeaturePrintRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

This request returns the feature print data it generates as an array of [VNFeaturePrintObservation](vnfeatureprintobservation.md) objects.

## Topics

### Scaling and Cropping Images

- [imageCropAndScaleOption](vngenerateimagefeatureprintrequest/imagecropandscaleoption.md): An optional setting that tells the algorithm how to scale an input image before generating the feature print.
- [VNImageCropAndScaleOption](vnimagecropandscaleoption.md): Options that define how Vision crops and scales an input-image.

### Accessing the Results

- [results](vngenerateimagefeatureprintrequest/results.md): The results of the feature print request.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.

### Identifying Request Revisions

- [VNGenerateImageFeaturePrintRequestRevision1](vngenerateimagefeatureprintrequestrevision1.md): A constant for specifying the first revision of the feature-print request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.
