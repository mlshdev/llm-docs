> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanrectanglesrequest](https://developer.apple.com/documentation/vision/vndetecthumanrectanglesrequest)

# VNDetectHumanRectanglesRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that finds rectangular regions that contain people in an image.

## Declaration

```swift
class VNDetectHumanRectanglesRequest
```

## Topics

### Configuring the Request

- [upperBodyOnly](vndetecthumanrectanglesrequest/upperbodyonly.md): A Boolean value that indicates whether the request requires detecting a full body or upper body only to produce a result.

### Accessing the Results

- [results](vndetecthumanrectanglesrequest/results.md): The results of the request to find rectangular regions that contain people in an image.

### Identifying Request Revisions

- [VNDetectHumanRectanglesRequestRevision2](vndetecthumanrectanglesrequestrevision2.md): A constant for specifying revision 2 of the human rectangles detection request.
- [VNDetectHumanRectanglesRequestRevision1](vndetecthumanrectanglesrequestrevision1.md): A constant for specifying revision 1 of the human rectangles detection request.

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
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.

# VNDetectHumanRectanglesRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that finds rectangular regions that contain people in an image.

## Declaration

```objectivec
@interface VNDetectHumanRectanglesRequest : VNImageBasedRequest
```

## Topics

### Configuring the Request

- [upperBodyOnly](vndetecthumanrectanglesrequest/upperbodyonly.md): A Boolean value that indicates whether the request requires detecting a full body or upper body only to produce a result.

### Accessing the Results

- [results](vndetecthumanrectanglesrequest/results.md): The results of the request to find rectangular regions that contain people in an image.

### Identifying Request Revisions

- [VNDetectHumanRectanglesRequestRevision2](vndetecthumanrectanglesrequestrevision2.md): A constant for specifying revision 2 of the human rectangles detection request.
- [VNDetectHumanRectanglesRequestRevision1](vndetecthumanrectanglesrequestrevision1.md): A constant for specifying revision 1 of the human rectangles detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Face and body detection

- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.
