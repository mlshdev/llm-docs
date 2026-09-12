> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarks2d](https://developer.apple.com/documentation/vision/vnfacelandmarks2d)

# VNFaceLandmarks2D (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A collection of facial features that a request detects.

## Declaration

```swift
class VNFaceLandmarks2D
```

<a id="overview"></a>

## Overview

This class represents the set of all detectable 2D face landmarks and regions, exposed as properties. The coordinates of the face landmarks are normalized to the dimensions of the face observation’s [boundingBox](vndetectedobjectobservation/boundingbox.md), with the origin at the bounding box’s lower-left corner. Use the [VNImagePointForFaceLandmarkPoint(\_:\_:\_:\_:)](vnimagepointforfacelandmarkpoint%28________%29.md) function to convert normalized face landmark points into absolute points within the image’s coordinate system.

## Topics

### Face Landmark Points

- [allPoints](vnfacelandmarks2d/allpoints.md): The region containing all face landmark points.
- [faceContour](vnfacelandmarks2d/facecontour.md): The region containing points that trace the face contour from the left cheek, over the chin, to the right cheek.
- [leftEye](vnfacelandmarks2d/lefteye.md): The region containing points that outline the left eye.
- [rightEye](vnfacelandmarks2d/righteye.md): The region containing points that outline the right eye.
- [leftEyebrow](vnfacelandmarks2d/lefteyebrow.md): The region containing points that trace the left eyebrow.
- [rightEyebrow](vnfacelandmarks2d/righteyebrow.md): The region containing points that trace the right eyebrow.
- [nose](vnfacelandmarks2d/nose.md): The region containing points that outline the nose.
- [noseCrest](vnfacelandmarks2d/nosecrest.md): The region containing points that trace the center crest of the nose.
- [medianLine](vnfacelandmarks2d/medianline.md): The region containing points that trace a vertical line down the center of the face.
- [outerLips](vnfacelandmarks2d/outerlips.md): The region containing points that outline the outside of the lips.
- [innerLips](vnfacelandmarks2d/innerlips.md): The region containing points that outline the space between the lips.
- [leftPupil](vnfacelandmarks2d/leftpupil.md): The region containing the point where the left pupil is located.
- [rightPupil](vnfacelandmarks2d/rightpupil.md): The region containing the point where the right pupil is located.

## Relationships

### Inherits From

- [VNFaceLandmarks](vnfacelandmarks.md)

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
- [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarks](vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.

# VNFaceLandmarks2D (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A collection of facial features that a request detects.

## Declaration

```objectivec
@interface VNFaceLandmarks2D : VNFaceLandmarks
```

<a id="overview"></a>

## Overview

This class represents the set of all detectable 2D face landmarks and regions, exposed as properties. The coordinates of the face landmarks are normalized to the dimensions of the face observation’s [boundingBox](vndetectedobjectobservation/boundingbox.md), with the origin at the bounding box’s lower-left corner. Use the [VNImagePointForFaceLandmarkPoint](vnimagepointforfacelandmarkpoint%28________%29.md) function to convert normalized face landmark points into absolute points within the image’s coordinate system.

## Topics

### Face Landmark Points

- [allPoints](vnfacelandmarks2d/allpoints.md): The region containing all face landmark points.
- [faceContour](vnfacelandmarks2d/facecontour.md): The region containing points that trace the face contour from the left cheek, over the chin, to the right cheek.
- [leftEye](vnfacelandmarks2d/lefteye.md): The region containing points that outline the left eye.
- [rightEye](vnfacelandmarks2d/righteye.md): The region containing points that outline the right eye.
- [leftEyebrow](vnfacelandmarks2d/lefteyebrow.md): The region containing points that trace the left eyebrow.
- [rightEyebrow](vnfacelandmarks2d/righteyebrow.md): The region containing points that trace the right eyebrow.
- [nose](vnfacelandmarks2d/nose.md): The region containing points that outline the nose.
- [noseCrest](vnfacelandmarks2d/nosecrest.md): The region containing points that trace the center crest of the nose.
- [medianLine](vnfacelandmarks2d/medianline.md): The region containing points that trace a vertical line down the center of the face.
- [outerLips](vnfacelandmarks2d/outerlips.md): The region containing points that outline the outside of the lips.
- [innerLips](vnfacelandmarks2d/innerlips.md): The region containing points that outline the space between the lips.
- [leftPupil](vnfacelandmarks2d/leftpupil.md): The region containing the point where the left pupil is located.
- [rightPupil](vnfacelandmarks2d/rightpupil.md): The region containing the point where the right pupil is located.

## Relationships

### Inherits From

- [VNFaceLandmarks](vnfacelandmarks.md)

## See Also

### Identifying Landmarks

- [landmarks](vnfaceobservation/landmarks.md): The facial features of the detected face.
- [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarks](vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.
