> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectedobjectobservation](https://developer.apple.com/documentation/vision/vndetectedobjectobservation)

# VNDetectedObjectObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An observation that provides the position and extent of an image feature that an image- analysis request detects.

## Declaration

```swift
class VNDetectedObjectObservation
```

<a id="overview"></a>

## Overview

This class is the observation type that [VNTrackObjectRequest](vntrackobjectrequest.md) generates. It represents an object that the Vision request detects and tracks.

## Topics

### Creating an Observation

- [init(boundingBox:)](vndetectedobjectobservation/init%28boundingbox_%29.md): Creates an observation with a bounding box.
- [init(requestRevision:boundingBox:)](vndetectedobjectobservation/init%28requestrevision_boundingbox_%29.md): Creates an observation with a revision number and bounding box.

### Locating a Detected Object

- [boundingBox](vndetectedobjectobservation/boundingbox.md): The bounding box of the object that the request detects.

### Accessing an Image Mask

- [globalSegmentationMask](vndetectedobjectobservation/globalsegmentationmask.md): A resulting pixel buffer from a request to generate a segmentation mask for an image.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNFaceObservation](vnfaceobservation.md)
- [VNHumanObservation](vnhumanobservation.md)
- [VNRecognizedObjectObservation](vnrecognizedobjectobservation.md)
- [VNRectangleObservation](vnrectangleobservation.md)

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

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackingRequest](vntrackingrequest.md): The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.

# VNDetectedObjectObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An observation that provides the position and extent of an image feature that an image- analysis request detects.

## Declaration

```objectivec
@interface VNDetectedObjectObservation : VNObservation
```

<a id="overview"></a>

## Overview

This class is the observation type that [VNTrackObjectRequest](vntrackobjectrequest.md) generates. It represents an object that the Vision request detects and tracks.

## Topics

### Creating an Observation

- [observationWithBoundingBox:](vndetectedobjectobservation/init%28boundingbox_%29.md): Creates an observation with a bounding box.
- [observationWithRequestRevision:boundingBox:](vndetectedobjectobservation/init%28requestrevision_boundingbox_%29.md): Creates an observation with a revision number and bounding box.

### Locating a Detected Object

- [boundingBox](vndetectedobjectobservation/boundingbox.md): The bounding box of the object that the request detects.

### Accessing an Image Mask

- [globalSegmentationMask](vndetectedobjectobservation/globalsegmentationmask.md): A resulting pixel buffer from a request to generate a segmentation mask for an image.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNFaceObservation](vnfaceobservation.md)
- [VNHumanObservation](vnhumanobservation.md)
- [VNRecognizedObjectObservation](vnrecognizedobjectobservation.md)
- [VNRectangleObservation](vnrectangleobservation.md)

## See Also

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackingRequest](vntrackingrequest.md): The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.
