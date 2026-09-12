> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackingrequest](https://developer.apple.com/documentation/vision/vntrackingrequest)

# VNTrackingRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.

## Declaration

```swift
class VNTrackingRequest
```

<a id="overview"></a>

## Overview

Instantiate a tracking request subclass to perform object tracking across multiple frames of an image. After initialization, configure the degree of accuracy by setting [trackingLevel](vntrackingrequest/trackinglevel.md), and provide observations you’d like to track by setting the [inputObservation](vntrackingrequest/inputobservation.md) initial bounding box.

## Topics

### Configuring a Tracking Request

- [VNRequestTrackingLevel](vnrequesttrackinglevel.md): An enumeration of tracking priorities.
- [inputObservation](vntrackingrequest/inputobservation.md): The observation object defining a region to track.
- [trackingLevel](vntrackingrequest/trackinglevel.md): A value for specifying whether to prioritize speed or location accuracy.
- [isLastFrame](vntrackingrequest/islastframe.md): A Boolean that indicates the last frame in a tracking sequence.

### Getting the Number of Trackers

- [supportedNumber(ofTrackersAndReturnError:)](vntrackingrequest/supportednumber%28oftrackersandreturnerror_%29.md): Returns the maximum number of simultaneous trackers for the request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Inherited By

- [VNTrackObjectRequest](vntrackobjectrequest.md)
- [VNTrackRectangleRequest](vntrackrectanglerequest.md)

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
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.

# VNTrackingRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.

## Declaration

```objectivec
@interface VNTrackingRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

Instantiate a tracking request subclass to perform object tracking across multiple frames of an image. After initialization, configure the degree of accuracy by setting [trackingLevel](vntrackingrequest/trackinglevel.md), and provide observations you’d like to track by setting the [inputObservation](vntrackingrequest/inputobservation.md) initial bounding box.

## Topics

### Configuring a Tracking Request

- [VNRequestTrackingLevel](vnrequesttrackinglevel.md): An enumeration of tracking priorities.
- [inputObservation](vntrackingrequest/inputobservation.md): The observation object defining a region to track.
- [trackingLevel](vntrackingrequest/trackinglevel.md): A value for specifying whether to prioritize speed or location accuracy.
- [lastFrame](vntrackingrequest/islastframe.md): A Boolean that indicates the last frame in a tracking sequence.

### Getting the Number of Trackers

- [supportedNumberOfTrackersAndReturnError:](vntrackingrequest/supportednumber%28oftrackersandreturnerror_%29.md): Returns the maximum number of simultaneous trackers for the request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Inherited By

- [VNTrackObjectRequest](vntrackobjectrequest.md)
- [VNTrackRectangleRequest](vntrackrectanglerequest.md)

## See Also

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.
