> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackrectanglerequest](https://developer.apple.com/documentation/vision/vntrackrectanglerequest)

# VNTrackRectangleRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.

## Declaration

```swift
class VNTrackRectangleRequest
```

<a id="overview"></a>

## Overview

Use this type of request to track the bounding boxes of rectangles throughout a sequence of images. Vision returns locations for rectangles found in all orientations and sizes.

## Topics

### Initializing a Rectangle Tracking Request

- [init(rectangleObservation:)](vntrackrectanglerequest/init%28rectangleobservation_%29.md): Creates a new rectangle tracking request with a rectangle observation.
- [init(rectangleObservation:completionHandler:)](vntrackrectanglerequest/init%28rectangleobservation_completionhandler_%29.md): Creates a new rectangle tracking request with a rectangle observation.

### Identifying Request Revisions

- [VNTrackRectangleRequestRevision1](vntrackrectanglerequestrevision1.md): A constant for specifying revision 1 of the rectangling tracking request.

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
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.

# VNTrackRectangleRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.

## Declaration

```objectivec
@interface VNTrackRectangleRequest : VNTrackingRequest
```

<a id="overview"></a>

## Overview

Use this type of request to track the bounding boxes of rectangles throughout a sequence of images. Vision returns locations for rectangles found in all orientations and sizes.

## Topics

### Initializing a Rectangle Tracking Request

- [initWithRectangleObservation:](vntrackrectanglerequest/init%28rectangleobservation_%29.md): Creates a new rectangle tracking request with a rectangle observation.
- [initWithRectangleObservation:completionHandler:](vntrackrectanglerequest/init%28rectangleobservation_completionhandler_%29.md): Creates a new rectangle tracking request with a rectangle observation.

### Identifying Request Revisions

- [VNTrackRectangleRequestRevision1](vntrackrectanglerequestrevision1.md): A constant for specifying revision 1 of the rectangling tracking request.

## Relationships

### Inherits From

- [VNTrackingRequest](vntrackingrequest.md)

## See Also

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackingRequest](vntrackingrequest.md): The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.
