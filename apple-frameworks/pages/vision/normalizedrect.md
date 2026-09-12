> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedrect](https://developer.apple.com/documentation/vision/normalizedrect)

# NormalizedRect

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The location and dimensions of a rectangle.

## Declaration

```swift
struct NormalizedRect
```

## Topics

### Creating a normalized rectangle

- [init(x:y:width:height:)](normalizedrect/init%28x_y_width_height_%29.md): Creates a rectangle with the specified coordinates.
- [init(imageRect:in:)](normalizedrect/init%28imagerect_in_%29.md): Creates a normalized rectangle from a rectangle in an image coordinate space.
- [init(imageRect:in:normalizedTo:)](normalizedrect/init%28imagerect_in_normalizedto_%29.md): Creates a rectangle normalized to a region of interest in an image from a rectangle in an image coordinate space.
- [init(normalizedRect:)](normalizedrect/init%28normalizedrect_%29.md): Creates a rectangle from the specified Core Graphics rectangle.
- [fullImage](normalizedrect/fullimage.md): A normalized rectangle with an origin at zero and a width and height of one.

### Inspecting a normalized rectangle

- [cgRect](normalizedrect/cgrect.md): The normalized rectangle as a Core Graphics rectangle.
- [origin](normalizedrect/origin.md): The lower left-hand corner of the rectangle.
- [width](normalizedrect/width.md): The width of the rectangle.
- [height](normalizedrect/height.md): The height of the rectangle.

### Converting rectangles

- [toImageCoordinates(\_:origin:)](normalizedrect/toimagecoordinates%28__origin_%29.md): Converts a rectangle in normalized coordinates into image coordinates.
- [toImageCoordinates(from:imageSize:origin:)](normalizedrect/toimagecoordinates%28from_imagesize_origin_%29.md): Converts a rectangle normalized to a region within an image into full image coordinates.

### Flipping a normalized rectangle

- [verticallyFlipped()](normalizedrect/verticallyflipped%28%29.md): Returns a normalized rectangle with the origin flipped between the top and bottom of the image.

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

- [NormalizedPoint](normalizedpoint.md): A point in a 2D coordinate system.
- [NormalizedRegion](normalizedregion.md): A polygon composed of normalized points.
- [NormalizedCircle](normalizedcircle.md): The center point and radius of a 2D circle.
- [BoundingBoxProviding](boundingboxproviding.md): A protocol for objects that have a bounding box.
- [BoundingRegionProviding](boundingregionproviding.md): A protocol for objects that have a defined boundary in an image.
- [QuadrilateralProviding](quadrilateralproviding.md): A protocol for objects that have a bounding quadrilateral.
- [CoordinateOrigin](coordinateorigin.md): The origin of a coordinate system relative to an image.
