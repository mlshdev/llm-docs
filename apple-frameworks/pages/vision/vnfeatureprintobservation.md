> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfeatureprintobservation](https://developer.apple.com/documentation/vision/vnfeatureprintobservation)

# VNFeaturePrintObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An observation that provides the recognized feature print.

## Declaration

```swift
class VNFeaturePrintObservation
```

## Topics

### Fetching Feature Print Data

- [data](vnfeatureprintobservation/data.md): The feature print data.
- [elementCount](vnfeatureprintobservation/elementcount.md): The total number of elements in the data.

### Determining Types of Feature Prints

- [elementType](vnfeatureprintobservation/elementtype.md): The type of each element in the data.
- [VNElementType](vnelementtype.md): An enumeration of the type of element in feature print data.
- [VNElementTypeSize(\_:)](vnelementtypesize%28__%29.md): Returns the size of a feature print element.

### Computing Distance Between Features

- [computeDistance(\_:to:)](vnfeatureprintobservation/computedistance%28__to_%29.md): Computes the distance between two feature print observations.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

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
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

# VNFeaturePrintObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An observation that provides the recognized feature print.

## Declaration

```objectivec
@interface VNFeaturePrintObservation : VNObservation
```

## Topics

### Fetching Feature Print Data

- [data](vnfeatureprintobservation/data.md): The feature print data.
- [elementCount](vnfeatureprintobservation/elementcount.md): The total number of elements in the data.

### Determining Types of Feature Prints

- [elementType](vnfeatureprintobservation/elementtype.md): The type of each element in the data.
- [VNElementType](vnelementtype.md): An enumeration of the type of element in feature print data.
- [VNElementTypeSize](vnelementtypesize%28__%29.md): Returns the size of a feature print element.

### Computing Distance Between Features

- [computeDistance:toFeaturePrintObservation:error:](vnfeatureprintobservation/computedistance%28__to_%29.md): Computes the distance between two feature print observations.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.
