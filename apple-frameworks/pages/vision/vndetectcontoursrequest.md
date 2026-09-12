> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectcontoursrequest](https://developer.apple.com/documentation/vision/vndetectcontoursrequest)

# VNDetectContoursRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects the contours of the edges of an image.

## Declaration

```swift
class VNDetectContoursRequest
```

## Topics

### Configuring the Request

- [contrastAdjustment](vndetectcontoursrequest/contrastadjustment.md): The amount by which to adjust the image contrast.
- [contrastPivot](vndetectcontoursrequest/contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](vndetectcontoursrequest/detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](vndetectcontoursrequest/maximumimagedimension.md): The maximum image dimension to use for contour detection.
- [detectDarkOnLight](vndetectcontoursrequest/detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.

### Accessing the Results

- [results](vndetectcontoursrequest/results.md): The results of the request to detect contours.
- [VNContoursObservation](vncontoursobservation.md): An object that represents the detected contours in an image.

### Identifying Request Revisions

- [VNDetectContourRequestRevision1](vndetectcontourrequestrevision1.md): A constant for specifying revision 1 of the contours detection request.

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

# VNDetectContoursRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects the contours of the edges of an image.

## Declaration

```objectivec
@interface VNDetectContoursRequest : VNImageBasedRequest
```

## Topics

### Configuring the Request

- [contrastAdjustment](vndetectcontoursrequest/contrastadjustment.md): The amount by which to adjust the image contrast.
- [contrastPivot](vndetectcontoursrequest/contrastpivot.md): The pixel value to use as a pivot for the contrast.
- [detectsDarkOnLight](vndetectcontoursrequest/detectsdarkonlight.md): A Boolean value that indicates whether the request detects a dark object on a light background to aid in detection.
- [maximumImageDimension](vndetectcontoursrequest/maximumimagedimension.md): The maximum image dimension to use for contour detection.
- [detectDarkOnLight](vndetectcontoursrequest/detectdarkonlight.md): Deprecated. A Boolean value that indicates whether the request detects a dark object on a light background.

### Accessing the Results

- [results](vndetectcontoursrequest/results.md): The results of the request to detect contours.
- [VNContoursObservation](vncontoursobservation.md): An object that represents the detected contours in an image.

### Identifying Request Revisions

- [VNDetectContourRequestRevision1](vndetectcontourrequestrevision1.md): A constant for specifying revision 1 of the contours detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)
