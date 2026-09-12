> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/coordinateorigin](https://developer.apple.com/documentation/vision/coordinateorigin)

# CoordinateOrigin

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The origin of a coordinate system relative to an image.

## Declaration

```swift
enum CoordinateOrigin
```

## Topics

### Getting the origins

- [CoordinateOrigin.upperLeft](coordinateorigin/upperleft.md): The origin at the upper-left corner of the image.
- [CoordinateOrigin.lowerLeft](coordinateorigin/lowerleft.md): The origin at the lower-left corner of the image.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Image locations and regions

- [NormalizedPoint](normalizedpoint.md): A point in a 2D coordinate system.
- [NormalizedRect](normalizedrect.md): The location and dimensions of a rectangle.
- [NormalizedRegion](normalizedregion.md): A polygon composed of normalized points.
- [NormalizedCircle](normalizedcircle.md): The center point and radius of a 2D circle.
- [BoundingBoxProviding](boundingboxproviding.md): A protocol for objects that have a bounding box.
- [BoundingRegionProviding](boundingregionproviding.md): A protocol for objects that have a defined boundary in an image.
- [QuadrilateralProviding](quadrilateralproviding.md): A protocol for objects that have a bounding quadrilateral.
