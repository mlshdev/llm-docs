> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/faceobservation/landmarks2d](https://developer.apple.com/documentation/vision/faceobservation/landmarks2d)

# FaceObservation.Landmarks2D

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A collection of facial features that a request detects.

## Declaration

```swift
struct Landmarks2D
```

<a id="overview"></a>

## Overview

This represents the set of all detectable 2D face landmarks and regions, exposed as properties. The coordinates of the face landmarks are normalized to the dimensions of the face observation’s [boundingBox](../boundingboxproviding/boundingbox.md), with the origin at the bounding box’s lower-left corner.

## Topics

### Getting the landmarks

- [faceContour](landmarks2d/facecontour.md)
- [innerLips](landmarks2d/innerlips.md)
- [leftEye](landmarks2d/lefteye.md)
- [leftEyebrow](landmarks2d/lefteyebrow.md)
- [leftPupil](landmarks2d/leftpupil.md)
- [medianLine](landmarks2d/medianline.md)
- [nose](landmarks2d/nose.md)
- [noseCrest](landmarks2d/nosecrest.md)
- [outerLips](landmarks2d/outerlips.md)
- [rightEye](landmarks2d/righteye.md)
- [rightEyebrow](landmarks2d/righteyebrow.md)
- [rightPupil](landmarks2d/rightpupil.md)

### Inspecting a landmark

- [originatingRequestDescriptor](landmarks2d/originatingrequestdescriptor.md)

### Getting all landmarks

- [allPoints](landmarks2d/allpoints.md)
- [FaceObservation.Landmarks2D.Region](landmarks2d/region.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [landmarks](landmarks.md): The facial features of the detected face.
- [pitch](pitch.md): The pitch angle of a face.
- [roll](roll.md): The roll angle of a face.
- [yaw](yaw.md): The yaw angle of a face.
