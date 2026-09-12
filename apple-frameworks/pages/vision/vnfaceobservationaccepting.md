> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfaceobservationaccepting](https://developer.apple.com/documentation/vision/vnfaceobservationaccepting)

# VNFaceObservationAccepting (Swift)

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image analysis request that operates on face observations.

## Declaration

```swift
protocol VNFaceObservationAccepting : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol allows you to provide an input collection of [VNFaceObservation](vnfaceobservation.md) objects as part of a request. Request objects adopt this protocol to request additional information about detected faces, such as facial landmarks.

## Topics

### Providing Face Observations

- [inputFaceObservations](vnfaceobservationaccepting/inputfaceobservations.md): An array of [VNFaceObservation](vnfaceobservation.md) objects to process as part of the request.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md)
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md)

# VNFaceObservationAccepting (Objective-C)

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image analysis request that operates on face observations.

## Declaration

```objectivec
@protocol VNFaceObservationAccepting <NSObject>
```

<a id="overview"></a>

## Overview

This protocol allows you to provide an input collection of [VNFaceObservation](vnfaceobservation.md) objects as part of a request. Request objects adopt this protocol to request additional information about detected faces, such as facial landmarks.

## Topics

### Providing Face Observations

- [inputFaceObservations](vnfaceobservationaccepting/inputfaceobservations.md): An array of [VNFaceObservation](vnfaceobservation.md) objects to process as part of the request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md)
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md)
