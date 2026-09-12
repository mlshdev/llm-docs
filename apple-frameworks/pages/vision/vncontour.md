> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour](https://developer.apple.com/documentation/vision/vncontour)

# VNContour (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that represents a detected contour in an image.

## Declaration

```swift
class VNContour
```

## Topics

### Inspecting the Contour

- [aspectRatio](vncontour/aspectratio.md): The aspect ratio of the contour.
- [indexPath](vncontour/indexpath.md): The contour object’s index path.
- [normalizedPath](vncontour/normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](vncontour/pointcount.md): The contour’s number of points.
- [normalizedPoints](vncontour/normalizedpoints-8n2s5.md): The contour’s array of points in normalized coordinates.
- [polygonApproximation(epsilon:)](vncontour/polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.

### Accessing Child Contours

- [childContourCount](vncontour/childcontourcount.md): The total number of detected child contours.
- [childContours](vncontour/childcontours.md): An array of contours that this contour encloses.
- [childContour(at:)](vncontour/childcontour%28at_%29.md): Retrieves the child contour object at the specified index.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Inspecting the Observation

- [contourCount](vncontoursobservation/contourcount.md): The total number of detected contours.
- [normalizedPath](vncontoursobservation/normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](vncontoursobservation/toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](vncontoursobservation/toplevelcontourcount.md): The total number of detected top-level contours.
- [contour(at:)](vncontoursobservation/contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contour(at:)](vncontoursobservation/contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.

# VNContour (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that represents a detected contour in an image.

## Declaration

```objectivec
@interface VNContour : NSObject
```

## Topics

### Inspecting the Contour

- [aspectRatio](vncontour/aspectratio.md): The aspect ratio of the contour.
- [indexPath](vncontour/indexpath.md): The contour object’s index path.
- [normalizedPath](vncontour/normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](vncontour/pointcount.md): The contour’s number of points.
- [normalizedPoints](vncontour/normalizedpoints-2orqj.md): The contour’s array of points in normalized coordinates.
- [polygonApproximationWithEpsilon:error:](vncontour/polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.

### Accessing Child Contours

- [childContourCount](vncontour/childcontourcount.md): The total number of detected child contours.
- [childContours](vncontour/childcontours.md): An array of contours that this contour encloses.
- [childContourAtIndex:error:](vncontour/childcontour%28at_%29.md): Retrieves the child contour object at the specified index.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Inspecting the Observation

- [contourCount](vncontoursobservation/contourcount.md): The total number of detected contours.
- [normalizedPath](vncontoursobservation/normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](vncontoursobservation/toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](vncontoursobservation/toplevelcontourcount.md): The total number of detected top-level contours.
- [contourAtIndex:error:](vncontoursobservation/contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contourAtIndexPath:error:](vncontoursobservation/contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
