> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrectangleobservation](https://developer.apple.com/documentation/vision/vnrectangleobservation)

# VNRectangleObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents the four vertices of a detected rectangle.

## Declaration

```swift
class VNRectangleObservation
```

## Topics

### Creating an Observation

- [init(requestRevision:topLeft:topRight:bottomRight:bottomLeft:)](vnrectangleobservation/init%28requestrevision_topleft_topright_bottomright_bottomleft_%29.md): Creates a rectangle observation from its corner points.
- [init(requestRevision:topLeft:bottomLeft:bottomRight:topRight:)](vnrectangleobservation/init%28requestrevision_topleft_bottomleft_bottomright_topright_%29.md): Deprecated. Creates a rectangle observation from its corner points.

### Accessing the Coordinates

- [bottomLeft](vnrectangleobservation/bottomleft.md): The coordinates of the lower-left corner of the observation bounding box.
- [bottomRight](vnrectangleobservation/bottomright.md): The coordinates of the lower-right corner of the observation bounding box.
- [topLeft](vnrectangleobservation/topleft.md): The coordinates of the upper-left corner of the observation bounding box.
- [topRight](vnrectangleobservation/topright.md): The coordinates of the upper-right corner of the observation bounding box.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

### Inherited By

- [VNBarcodeObservation](vnbarcodeobservation.md)
- [VNRecognizedTextObservation](vnrecognizedtextobservation.md)
- [VNTextObservation](vntextobservation.md)

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

### Accessing the Results

- [results](vndetectdocumentsegmentationrequest/results.md): The results of a document segmentation request.

# VNRectangleObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents the four vertices of a detected rectangle.

## Declaration

```objectivec
@interface VNRectangleObservation : VNDetectedObjectObservation
```

## Topics

### Creating an Observation

- [rectangleObservationWithRequestRevision:topLeft:topRight:bottomRight:bottomLeft:](vnrectangleobservation/init%28requestrevision_topleft_topright_bottomright_bottomleft_%29.md): Creates a rectangle observation from its corner points.
- [rectangleObservationWithRequestRevision:topLeft:bottomLeft:bottomRight:topRight:](vnrectangleobservation/init%28requestrevision_topleft_bottomleft_bottomright_topright_%29.md): Deprecated. Creates a rectangle observation from its corner points.

### Accessing the Coordinates

- [bottomLeft](vnrectangleobservation/bottomleft.md): The coordinates of the lower-left corner of the observation bounding box.
- [bottomRight](vnrectangleobservation/bottomright.md): The coordinates of the lower-right corner of the observation bounding box.
- [topLeft](vnrectangleobservation/topleft.md): The coordinates of the upper-left corner of the observation bounding box.
- [topRight](vnrectangleobservation/topright.md): The coordinates of the upper-right corner of the observation bounding box.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

### Inherited By

- [VNBarcodeObservation](vnbarcodeobservation.md)
- [VNRecognizedTextObservation](vnrecognizedtextobservation.md)
- [VNTextObservation](vntextobservation.md)

## See Also

### Accessing the Results

- [results](vndetectdocumentsegmentationrequest/results.md): The results of a document segmentation request.
