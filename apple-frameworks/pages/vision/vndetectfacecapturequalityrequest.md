> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectfacecapturequalityrequest](https://developer.apple.com/documentation/vision/vndetectfacecapturequalityrequest)

# VNDetectFaceCaptureQualityRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that produces a floating-point number that represents the capture quality of a face in a photo.

## Declaration

```swift
class VNDetectFaceCaptureQualityRequest
```

<a id="overview"></a>

## Overview

This request produces or updates a [VNFaceObservation](vnfaceobservation.md) object’s property [faceCaptureQuality](vnfaceobservation/facecapturequality-bjg5.md) with a floating-point value. The value ranges from `0` to `1`. Faces with quality closer to `1` are better lit, sharper, and more centrally positioned than faces with quality closer to `0`.

If you don’t execute the request, or the request fails, the property [faceCaptureQuality](vnfaceobservation/facecapturequality-bjg5.md) is [nil](../objectivec/nil-227m0.md).

## Topics

### Accessing the Results

- [results](vndetectfacecapturequalityrequest/results.md): The results of the face-capture quality request.
- [VNFaceObservation](vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.

### Identifying Request Revisions

- [VNDetectFaceCaptureQualityRequestRevision2](vndetectfacecapturequalityrequestrevision2.md): Revision 2 of the request algorithm.
- [VNDetectFaceCaptureQualityRequestRevision1](vndetectfacecapturequalityrequestrevision1.md): A constant for specifying revision 1 of the face capture detection request.

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
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.

# VNDetectFaceCaptureQualityRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that produces a floating-point number that represents the capture quality of a face in a photo.

## Declaration

```objectivec
@interface VNDetectFaceCaptureQualityRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

This request produces or updates a [VNFaceObservation](vnfaceobservation.md) object’s property [faceCaptureQuality](vnfaceobservation/facecapturequality-bjg5.md) with a floating-point value. The value ranges from `0` to `1`. Faces with quality closer to `1` are better lit, sharper, and more centrally positioned than faces with quality closer to `0`.

If you don’t execute the request, or the request fails, the property [faceCaptureQuality](vnfaceobservation/facecapturequality-bjg5.md) is [nil](../objectivec/nil-227m0.md).

## Topics

### Accessing the Results

- [results](vndetectfacecapturequalityrequest/results.md): The results of the face-capture quality request.
- [VNFaceObservation](vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.

### Identifying Request Revisions

- [VNDetectFaceCaptureQualityRequestRevision2](vndetectfacecapturequalityrequestrevision2.md): Revision 2 of the request algorithm.
- [VNDetectFaceCaptureQualityRequestRevision1](vndetectfacecapturequalityrequestrevision1.md): A constant for specifying revision 1 of the face capture detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [VNFaceObservationAccepting](vnfaceobservationaccepting.md)

## See Also

### Face and body detection

- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.
