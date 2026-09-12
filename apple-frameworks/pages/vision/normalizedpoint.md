> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedpoint](https://developer.apple.com/documentation/vision/normalizedpoint)

# NormalizedPoint

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A point in a 2D coordinate system.

## Declaration

```swift
struct NormalizedPoint
```

## Topics

### Creating a normalized point

- [init(x:y:)](normalizedpoint/init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [init(normalizedPoint:)](normalizedpoint/init%28normalizedpoint_%29.md): Creates a point object from the specified Core Graphics point.
- [init(imagePoint:in:)](normalizedpoint/init%28imagepoint_in_%29.md): Creates a normalized point from a point in an image coordinate space.
- [init(imagePoint:in:normalizedTo:)](normalizedpoint/init%28imagepoint_in_normalizedto_%29.md): Creates a point normalized to a region of interest within an image.
- [zero](normalizedpoint/zero.md): A point object that represents the origin.

### Inspecting a normalized point

- [cgPoint](normalizedpoint/cgpoint.md): The Core Graphics point for this point.
- [x](normalizedpoint/x.md): The x-coordinate.
- [y](normalizedpoint/y.md): The y-coordinate.

### Converting points

- [toImageCoordinates(from:imageSize:origin:)](normalizedpoint/toimagecoordinates%28from_imagesize_origin_%29.md): Converts a point normalized to a region within an image into full image coordinates.
- [toImageCoordinates(\_:origin:)](normalizedpoint/toimagecoordinates%28__origin_%29.md): Converts a point in normalized coordinates into image coordinates.

### Flipping a normalized point

- [verticallyFlipped()](normalizedpoint/verticallyflipped%28%29.md): Returns a normalized point with the origin flipped between the top and bottom of the image.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image locations and regions

- [NormalizedRect](normalizedrect.md): The location and dimensions of a rectangle.
- [NormalizedRegion](normalizedregion.md): A polygon composed of normalized points.
- [NormalizedCircle](normalizedcircle.md): The center point and radius of a 2D circle.
- [BoundingBoxProviding](boundingboxproviding.md): A protocol for objects that have a bounding box.
- [BoundingRegionProviding](boundingregionproviding.md): A protocol for objects that have a defined boundary in an image.
- [QuadrilateralProviding](quadrilateralproviding.md): A protocol for objects that have a bounding quadrilateral.
- [CoordinateOrigin](coordinateorigin.md): The origin of a coordinate system relative to an image.
