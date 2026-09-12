> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassifyimagerequest](https://developer.apple.com/documentation/vision/vnclassifyimagerequest)

# VNClassifyImageRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request to classify an image.

## Declaration

```swift
class VNClassifyImageRequest
```

<a id="overview"></a>

## Overview

This type of request produces a collection of [VNClassificationObservation](vnclassificationobservation.md) objects that describe an image. Access the classifications through [knownClassifications(forRevision:)](vnclassifyimagerequest/knownclassifications%28forrevision_%29.md).

## Topics

### Accessing Results

- [supportedIdentifiers()](vnclassifyimagerequest/supportedidentifiers%28%29.md): Returns the classification identifiers that the request supports in its current configuration.
- [results](vnclassifyimagerequest/results.md): The results of the image classification request.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [knownClassifications(forRevision:)](vnclassifyimagerequest/knownclassifications%28forrevision_%29.md): Deprecated. Requests the collection of classifications that the Vision framework recognizes.

### Specifying Algorithm Revision

- [VNClassifyImageRequestRevision1](vnclassifyimagerequestrevision1.md): A constant for specifying the first revision of the image-classification request.

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
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

# VNClassifyImageRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request to classify an image.

## Declaration

```objectivec
@interface VNClassifyImageRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

This type of request produces a collection of [VNClassificationObservation](vnclassificationobservation.md) objects that describe an image. Access the classifications through [knownClassificationsForRevision:error:](vnclassifyimagerequest/knownclassifications%28forrevision_%29.md).

## Topics

### Accessing Results

- [supportedIdentifiersAndReturnError:](vnclassifyimagerequest/supportedidentifiers%28%29.md): Returns the classification identifiers that the request supports in its current configuration.
- [results](vnclassifyimagerequest/results.md): The results of the image classification request.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [knownClassificationsForRevision:error:](vnclassifyimagerequest/knownclassifications%28forrevision_%29.md): Deprecated. Requests the collection of classifications that the Vision framework recognizes.

### Specifying Algorithm Revision

- [VNClassifyImageRequestRevision1](vnclassifyimagerequestrevision1.md): A constant for specifying the first revision of the image-classification request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.
