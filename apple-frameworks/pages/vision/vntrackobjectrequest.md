> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackobjectrequest](https://developer.apple.com/documentation/vision/vntrackobjectrequest)

# VNTrackObjectRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.

## Declaration

```swift
class VNTrackObjectRequest
```

<a id="overview"></a>

## Overview

Use this type of request to track the bounding boxes around objects previously identified in an image. Vision attempts to locate the same object from the input observation throughout the sequence.

## Topics

### Initializing an Object Tracking Request

- [init(detectedObjectObservation:)](vntrackobjectrequest/init%28detectedobjectobservation_%29.md): Creates a new object tracking request with a detected object observation.
- [init(detectedObjectObservation:completionHandler:)](vntrackobjectrequest/init%28detectedobjectobservation_completionhandler_%29.md): Creates a new object tracking request with a detected object observation.

### Identifying Request Revisions

- [VNTrackObjectRequestRevision2](vntrackobjectrequestrevision2.md): A constant for specifying revision 2 of the object tracking request.
- [VNTrackObjectRequestRevision1](vntrackobjectrequestrevision1.md): A constant for specifying revision 1 of the object tracking request.

## Relationships

### Inherits From

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

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackingRequest](vntrackingrequest.md): The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.

# VNTrackObjectRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.

## Declaration

```objectivec
@interface VNTrackObjectRequest : VNTrackingRequest
```

<a id="overview"></a>

## Overview

Use this type of request to track the bounding boxes around objects previously identified in an image. Vision attempts to locate the same object from the input observation throughout the sequence.

## Topics

### Initializing an Object Tracking Request

- [initWithDetectedObjectObservation:](vntrackobjectrequest/init%28detectedobjectobservation_%29.md): Creates a new object tracking request with a detected object observation.
- [initWithDetectedObjectObservation:completionHandler:](vntrackobjectrequest/init%28detectedobjectobservation_completionhandler_%29.md): Creates a new object tracking request with a detected object observation.

### Identifying Request Revisions

- [VNTrackObjectRequestRevision2](vntrackobjectrequestrevision2.md): A constant for specifying revision 2 of the object tracking request.
- [VNTrackObjectRequestRevision1](vntrackobjectrequestrevision1.md): A constant for specifying revision 1 of the object tracking request.

## Relationships

### Inherits From

- [VNTrackingRequest](vntrackingrequest.md)

## See Also

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackingRequest](vntrackingrequest.md): The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.
