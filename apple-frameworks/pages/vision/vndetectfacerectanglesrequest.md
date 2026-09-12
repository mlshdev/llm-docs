> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectfacerectanglesrequest](https://developer.apple.com/documentation/vision/vndetectfacerectanglesrequest)

# VNDetectFaceRectanglesRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A request that finds faces within an image.

## Declaration

```swift
class VNDetectFaceRectanglesRequest
```

<a id="overview"></a>

## Overview

This request returns faces as rectangular bounding boxes with origin and size.

## Topics

### Accessing the Results

- [results](vndetectfacerectanglesrequest/results.md): The results of the face detection request.
- [VNFaceObservation](vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.

### Identifying Request Revisions

- [VNDetectFaceRectanglesRequestRevision3](vndetectfacerectanglesrequestrevision3.md): A constant for specifying revision 3 of the face rectangles detection request.
- [VNDetectFaceRectanglesRequestRevision2](vndetectfacerectanglesrequestrevision2.md): A constant for specifying revision 2 of the face rectangles detection request.
- [VNDetectFaceRectanglesRequestRevision1](vndetectfacerectanglesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face rectangles detection request.

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

## See Also

### Face and body detection

- [Selecting a selfie based on capture quality](selecting-a-selfie-based-on-capture-quality.md): Compare face-capture quality in a set of images by using Vision.
- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.

# VNDetectFaceRectanglesRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A request that finds faces within an image.

## Declaration

```objectivec
@interface VNDetectFaceRectanglesRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

This request returns faces as rectangular bounding boxes with origin and size.

## Topics

### Accessing the Results

- [results](vndetectfacerectanglesrequest/results.md): The results of the face detection request.
- [VNFaceObservation](vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.

### Identifying Request Revisions

- [VNDetectFaceRectanglesRequestRevision3](vndetectfacerectanglesrequestrevision3.md): A constant for specifying revision 3 of the face rectangles detection request.
- [VNDetectFaceRectanglesRequestRevision2](vndetectfacerectanglesrequestrevision2.md): A constant for specifying revision 2 of the face rectangles detection request.
- [VNDetectFaceRectanglesRequestRevision1](vndetectfacerectanglesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face rectangles detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Face and body detection

- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.
