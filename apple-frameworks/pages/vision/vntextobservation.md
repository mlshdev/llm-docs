> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntextobservation](https://developer.apple.com/documentation/vision/vntextobservation)

# VNTextObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Information about regions of text that an image-analysis request detects.

## Declaration

```swift
class VNTextObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md). It expresses the location of each detected character by its bounding box.

## Topics

### Finding Individual Characters

- [characterBoxes](vntextobservation/characterboxes.md): An array of detected individual character bounding boxes.

## Relationships

### Inherits From

- [VNRectangleObservation](vnrectangleobservation.md)

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

### Text detection

- [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md): An image-analysis request that finds regions of visible text in an image.

# VNTextObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Information about regions of text that an image-analysis request detects.

## Declaration

```objectivec
@interface VNTextObservation : VNRectangleObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md). It expresses the location of each detected character by its bounding box.

## Topics

### Finding Individual Characters

- [characterBoxes](vntextobservation/characterboxes.md): An array of detected individual character bounding boxes.

## Relationships

### Inherits From

- [VNRectangleObservation](vnrectangleobservation.md)

## See Also

### Text detection

- [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md): An image-analysis request that finds regions of visible text in an image.
