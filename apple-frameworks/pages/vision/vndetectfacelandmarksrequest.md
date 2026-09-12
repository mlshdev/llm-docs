> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectfacelandmarksrequest](https://developer.apple.com/documentation/vision/vndetectfacelandmarksrequest)

# VNDetectFaceLandmarksRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that finds facial features like eyes and mouth in an image.

## Declaration

```swift
class VNDetectFaceLandmarksRequest
```

<a id="overview"></a>

## Overview

By default, a face landmarks request first locates all faces in the input image, then analyzes each to detect facial features.

If you’ve already located all the faces in an image, or want to detect landmarks in only a subset of the faces in the image, set the [inputFaceObservations](vnfaceobservationaccepting/inputfaceobservations.md) property to an array of [VNFaceObservation](vnfaceobservation.md) objects representing the faces you want to analyze. You can either use face observations output by a [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md) or manually create [VNFaceObservation](vnfaceobservation.md) instances with the bounding boxes of the faces you want to analyze.

## Topics

### Configuring a Face Landmarks Request

- [VNFaceObservationAccepting](vnfaceobservationaccepting.md): An image analysis request that operates on face observations.

### Accessing the Results

- [results](vndetectfacelandmarksrequest/results.md): The results of the face landmarks request.
- [VNFaceObservation](vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.

### Locating Face Landmarks

- [constellation](vndetectfacelandmarksrequest/constellation.md): A variable that describes how a face landmarks request orders or enumerates the resulting features.
- [VNRequestFaceLandmarksConstellation](vnrequestfacelandmarksconstellation.md): An enumeration of face landmarks in a constellation object.

### Identifying Request Revisions

- [revision(\_:supportsConstellation:)](vndetectfacelandmarksrequest/revision%28__supportsconstellation_%29.md): Returns a Boolean value that indicates whether a revision supports a constellation.
- [VNDetectFaceLandmarksRequestRevision3](vndetectfacelandmarksrequestrevision3.md): A constant for specifying revision 3 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision2](vndetectfacelandmarksrequestrevision2.md): A constant for specifying revision 2 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision1](vndetectfacelandmarksrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face landmarks detection request.

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
- [VNFaceObservationAccepting](vnfaceobservationaccepting.md)

## See Also

### Face and body detection

- [Selecting a selfie based on capture quality](selecting-a-selfie-based-on-capture-quality.md): Compare face-capture quality in a set of images by using Vision.
- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.

# VNDetectFaceLandmarksRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that finds facial features like eyes and mouth in an image.

## Declaration

```objectivec
@interface VNDetectFaceLandmarksRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

By default, a face landmarks request first locates all faces in the input image, then analyzes each to detect facial features.

If you’ve already located all the faces in an image, or want to detect landmarks in only a subset of the faces in the image, set the [inputFaceObservations](vnfaceobservationaccepting/inputfaceobservations.md) property to an array of [VNFaceObservation](vnfaceobservation.md) objects representing the faces you want to analyze. You can either use face observations output by a [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md) or manually create [VNFaceObservation](vnfaceobservation.md) instances with the bounding boxes of the faces you want to analyze.

## Topics

### Configuring a Face Landmarks Request

- [VNFaceObservationAccepting](vnfaceobservationaccepting.md): An image analysis request that operates on face observations.

### Accessing the Results

- [results](vndetectfacelandmarksrequest/results.md): The results of the face landmarks request.
- [VNFaceObservation](vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.

### Locating Face Landmarks

- [constellation](vndetectfacelandmarksrequest/constellation.md): A variable that describes how a face landmarks request orders or enumerates the resulting features.
- [VNRequestFaceLandmarksConstellation](vnrequestfacelandmarksconstellation.md): An enumeration of face landmarks in a constellation object.

### Identifying Request Revisions

- [revision:supportsConstellation:](vndetectfacelandmarksrequest/revision%28__supportsconstellation_%29.md): Returns a Boolean value that indicates whether a revision supports a constellation.
- [VNDetectFaceLandmarksRequestRevision3](vndetectfacelandmarksrequestrevision3.md): A constant for specifying revision 3 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision2](vndetectfacelandmarksrequestrevision2.md): A constant for specifying revision 2 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision1](vndetectfacelandmarksrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face landmarks detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [VNFaceObservationAccepting](vnfaceobservationaccepting.md)

## See Also

### Face and body detection

- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.
