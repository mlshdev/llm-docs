> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanobservation](https://developer.apple.com/documentation/vision/vnhumanobservation)

# VNHumanObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents a person that the request detects.

## Declaration

```swift
class VNHumanObservation
```

## Topics

### Inspecting the Observation

- [upperBodyOnly](vnhumanobservation/upperbodyonly.md): A Boolean value that indicates whether the observation represents an upper-body or full-body rectangle.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

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

### Face and body detection

- [Selecting a selfie based on capture quality](selecting-a-selfie-based-on-capture-quality.md): Compare face-capture quality in a set of images by using Vision.
- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.

# VNHumanObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents a person that the request detects.

## Declaration

```objectivec
@interface VNHumanObservation : VNDetectedObjectObservation
```

## Topics

### Inspecting the Observation

- [upperBodyOnly](vnhumanobservation/upperbodyonly.md): A Boolean value that indicates whether the observation represents an upper-body or full-body rectangle.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

## See Also

### Face and body detection

- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
