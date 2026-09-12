> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnobservation](https://developer.apple.com/documentation/vision/vnobservation)

# VNObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for analysis results.

## Declaration

```swift
class VNObservation
```

<a id="overview"></a>

## Overview

Observations resulting from Vision image analysis requests inherit from this abstract base class. Don’t use this abstract superclass directly.

## Topics

### Creating an Observation

- [init(coder:)](vnobservation/init%28coder_%29.md)

### Tracking Observations

- [uuid](vnobservation/uuid.md): A unique identifier assigned to the Vision observation.

### Evaluating Observations

- [timeRange](vnobservation/timerange.md): The time range of the reported observation.
- [confidence](vnobservation/confidence.md): The level of confidence in the observation’s accuracy.
- [VNConfidence](vnconfidence.md): A type alias for the confidence value of an observation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNClassificationObservation](vnclassificationobservation.md)
- [VNContoursObservation](vncontoursobservation.md)
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md)
- [VNDetectedObjectObservation](vndetectedobjectobservation.md)
- [VNFeaturePrintObservation](vnfeatureprintobservation.md)
- [VNHorizonObservation](vnhorizonobservation.md)
- [VNImageAestheticsScoresObservation](vnimageaestheticsscoresobservation.md)
- [VNImageAlignmentObservation](vnimagealignmentobservation.md)
- [VNInstanceMaskObservation](vninstancemaskobservation.md)
- [VNPixelBufferObservation](vnpixelbufferobservation.md)
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md)
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md)
- [VNTrajectoryObservation](vntrajectoryobservation.md)

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

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [Classifying images for categorization and search](classifying-images-for-categorization-and-search.md): Analyze and label images using a Vision classification request.
- [Analyzing Image Similarity with Feature Print](analyzing-image-similarity-with-feature-print.md): Generate a feature print to compute distance between images.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.

# VNObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for analysis results.

## Declaration

```objectivec
@interface VNObservation : NSObject
```

<a id="overview"></a>

## Overview

Observations resulting from Vision image analysis requests inherit from this abstract base class. Don’t use this abstract superclass directly.

## Topics

### Tracking Observations

- [uuid](vnobservation/uuid.md): A unique identifier assigned to the Vision observation.

### Evaluating Observations

- [timeRange](vnobservation/timerange.md): The time range of the reported observation.
- [confidence](vnobservation/confidence.md): The level of confidence in the observation’s accuracy.
- [VNConfidence](vnconfidence.md): A type alias for the confidence value of an observation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNClassificationObservation](vnclassificationobservation.md)
- [VNContoursObservation](vncontoursobservation.md)
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md)
- [VNDetectedObjectObservation](vndetectedobjectobservation.md)
- [VNFeaturePrintObservation](vnfeatureprintobservation.md)
- [VNHorizonObservation](vnhorizonobservation.md)
- [VNImageAestheticsScoresObservation](vnimageaestheticsscoresobservation.md)
- [VNImageAlignmentObservation](vnimagealignmentobservation.md)
- [VNInstanceMaskObservation](vninstancemaskobservation.md)
- [VNPixelBufferObservation](vnpixelbufferobservation.md)
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md)
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md)
- [VNTrajectoryObservation](vntrajectoryobservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
