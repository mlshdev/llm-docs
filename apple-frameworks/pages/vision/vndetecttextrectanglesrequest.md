> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecttextrectanglesrequest](https://developer.apple.com/documentation/vision/vndetecttextrectanglesrequest)

# VNDetectTextRectanglesRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that finds regions of visible text in an image.

## Declaration

```swift
class VNDetectTextRectanglesRequest
```

<a id="overview"></a>

## Overview

This request returns detected text characters as rectangular bounding boxes with origin and size.

## Topics

### Configuring a Request

- [reportCharacterBoxes](vndetecttextrectanglesrequest/reportcharacterboxes.md): A Boolean value that indicates whether the request detects character bounding boxes.

### Accessing the Results

- [results](vndetecttextrectanglesrequest/results.md): The results of the request to detect text rectangles.

### Identifying Request Revisions

- [VNDetectTextRectanglesRequestRevision1](vndetecttextrectanglesrequestrevision1.md): A constant for specifying revision 1 of the text rectangles detection request.

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

### Text detection

- [VNTextObservation](vntextobservation.md): Information about regions of text that an image-analysis request detects.

# VNDetectTextRectanglesRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An image-analysis request that finds regions of visible text in an image.

## Declaration

```objectivec
@interface VNDetectTextRectanglesRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

This request returns detected text characters as rectangular bounding boxes with origin and size.

## Topics

### Configuring a Request

- [reportCharacterBoxes](vndetecttextrectanglesrequest/reportcharacterboxes.md): A Boolean value that indicates whether the request detects character bounding boxes.

### Accessing the Results

- [results](vndetecttextrectanglesrequest/results.md): The results of the request to detect text rectangles.

### Identifying Request Revisions

- [VNDetectTextRectanglesRequestRevision1](vndetecttextrectanglesrequestrevision1.md): A constant for specifying revision 1 of the text rectangles detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Text detection

- [VNTextObservation](vntextobservation.md): Information about regions of text that an image-analysis request detects.
