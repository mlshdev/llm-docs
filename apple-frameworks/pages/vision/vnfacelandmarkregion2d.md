> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarkregion2d](https://developer.apple.com/documentation/vision/vnfacelandmarkregion2d)

# VNFaceLandmarkRegion2D (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

2D geometry information for a specific facial feature.

## Declaration

```swift
class VNFaceLandmarkRegion2D
```

<a id="overview"></a>

## Overview

This class represents the set of all facial landmark regions in 2D, exposed as properties.

## Topics

### Describing Region Points

- [pointsClassification](vnfacelandmarkregion2d/pointsclassification.md): An enumeration that describes how to interpret the points the region provides.
- [VNPointsClassification](vnpointsclassification.md): The set of classifications that describe how to interpret the points the region provides.

### Specifying Region Properties

- [normalizedPoints](vnfacelandmarkregion2d/normalizedpoints-7s7im.md): The array of normalized landmark points.
- [precisionEstimatesPerPoint](vnfacelandmarkregion2d/precisionestimatesperpoint-5jl22.md): Requests an array of precision estimates for each landmark point.

### Computing Feature Points

- [pointsInImage(imageSize:)](vnfacelandmarkregion2d/pointsinimage%28imagesize_%29.md): Returns an array containing landmark points in the coordinate space of the specified image size.

## Relationships

### Inherits From

- [VNFaceLandmarkRegion](vnfacelandmarkregion.md)

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

### Identifying Landmarks

- [landmarks](vnfaceobservation/landmarks.md): The facial features of the detected face.
- [VNFaceLandmarks2D](vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarks](vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.

# VNFaceLandmarkRegion2D (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

2D geometry information for a specific facial feature.

## Declaration

```objectivec
@interface VNFaceLandmarkRegion2D : VNFaceLandmarkRegion
```

<a id="overview"></a>

## Overview

This class represents the set of all facial landmark regions in 2D, exposed as properties.

## Topics

### Describing Region Points

- [pointsClassification](vnfacelandmarkregion2d/pointsclassification.md): An enumeration that describes how to interpret the points the region provides.
- [VNPointsClassification](vnpointsclassification.md): The set of classifications that describe how to interpret the points the region provides.

### Specifying Region Properties

- [normalizedPoints](vnfacelandmarkregion2d/normalizedpoints-1o38f.md): A buffer in memory containing normalized landmark points.
- [precisionEstimatesPerPoint](vnfacelandmarkregion2d/precisionestimatesperpoint-3kx5a.md): An array of precision estimates for each landmark point.

### Computing Feature Points

- [pointsInImageOfSize:](vnfacelandmarkregion2d/pointsinimageofsize_.md): A buffer in memory containing landmark points in the coordinate space of the specified image size.

## Relationships

### Inherits From

- [VNFaceLandmarkRegion](vnfacelandmarkregion.md)

## See Also

### Identifying Landmarks

- [landmarks](vnfaceobservation/landmarks.md): The facial features of the detected face.
- [VNFaceLandmarks2D](vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarks](vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.
