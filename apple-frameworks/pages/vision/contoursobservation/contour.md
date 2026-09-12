> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/contour](https://developer.apple.com/documentation/vision/contoursobservation/contour)

# ContoursObservation.Contour

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents a detected contour in an image.

## Declaration

```swift
struct Contour
```

## Topics

### Inspecting a contour

- [aspectRatio](contour/aspectratio.md): The aspect ratio of the contour, which is the image’s width divided by its height.
- [boundingBox](contour/boundingbox.md): The bounding box of the region.
- [boundingQuad](contour/boundingquad.md): The bounding quadrilateral of the region.
- [childContours](contour/childcontours.md): An array of contours that this contour encloses.
- [indexPath](contour/indexpath.md): The contour object’s index path.
- [normalizedPath](contour/normalizedpath.md): The contour object as a path in normalized coordinates.
- [normalizedPoints](contour/normalizedpoints.md): The contour’s array of points in normalized coordinates.
- [pointCount](contour/pointcount.md): The contour’s number of points.
- [points](contour/points.md): The points of the region as an array of `NormalizedPoint`.

### Calculating area and perimeter

- [calculateArea(useOrientedArea:)](contour/calculatearea%28useorientedarea_%29.md)
- [calculatePerimeter()](contour/calculateperimeter%28%29.md)

### Getting the bounding circle

- [boundingCircle()](contour/boundingcircle%28%29.md)

### Getting the approximation

- [polygonApproximation(epsilon:)](contour/polygonapproximation%28epsilon_%29.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the contours

- [contourAtIndex(\_:)](contouratindex%28__%29.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [countourAtIndexPath(\_:)](countouratindexpath%28__%29.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
