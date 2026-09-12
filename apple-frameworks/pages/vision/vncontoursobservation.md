> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontoursobservation](https://developer.apple.com/documentation/vision/vncontoursobservation)

# VNContoursObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that represents the detected contours in an image.

## Declaration

```swift
class VNContoursObservation
```

## Topics

### Inspecting the Observation

- [contourCount](vncontoursobservation/contourcount.md): The total number of detected contours.
- [normalizedPath](vncontoursobservation/normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](vncontoursobservation/toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](vncontoursobservation/toplevelcontourcount.md): The total number of detected top-level contours.
- [contour(at:)](vncontoursobservation/contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contour(at:)](vncontoursobservation/contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](vncontour.md): A class that represents a detected contour in an image.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

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

- [results](vndetectcontoursrequest/results.md): The results of the request to detect contours.

# VNContoursObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that represents the detected contours in an image.

## Declaration

```objectivec
@interface VNContoursObservation : VNObservation
```

## Topics

### Inspecting the Observation

- [contourCount](vncontoursobservation/contourcount.md): The total number of detected contours.
- [normalizedPath](vncontoursobservation/normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](vncontoursobservation/toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](vncontoursobservation/toplevelcontourcount.md): The total number of detected top-level contours.
- [contourAtIndex:error:](vncontoursobservation/contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contourAtIndexPath:error:](vncontoursobservation/contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](vncontour.md): A class that represents a detected contour in an image.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Accessing the Results

- [results](vndetectcontoursrequest/results.md): The results of the request to detect contours.
