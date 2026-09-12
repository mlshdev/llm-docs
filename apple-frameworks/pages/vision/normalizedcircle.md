> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedcircle](https://developer.apple.com/documentation/vision/normalizedcircle)

# NormalizedCircle

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The center point and radius of a 2D circle.

## Declaration

```swift
struct NormalizedCircle
```

## Topics

### Creating a normalized circle

- [init(center:radius:)](normalizedcircle/init%28center_radius_%29.md): Creates a circle with the specified center and radius.
- [zero](normalizedcircle/zero.md): A circle object centered at the origin, with a radius of zero.

### Inspecting a normalized circle

- [center](normalizedcircle/center.md): The circle’s center point.
- [radius](normalizedcircle/radius.md): The circle’s radius.

### Determining whether the circle contains a point

- [contains(\_:)](normalizedcircle/contains%28__%29.md): Returns a Boolean value that indicates whether this circle, including its boundary, contains the specified point.
- [contains(\_:inCircumferentialRingOfWidth:)](normalizedcircle/contains%28__incircumferentialringofwidth_%29.md): Returns a Boolean value that indicates whether a ring around this circle’s circumference contains the specified point.

### Getting the bounding circle

- [boundingCircle(for:)](normalizedcircle/boundingcircle%28for_%29.md): Creates the smallest circle that encloses the points you specify.

## See Also

### Image locations and regions

- [NormalizedPoint](normalizedpoint.md): A point in a 2D coordinate system.
- [NormalizedRect](normalizedrect.md): The location and dimensions of a rectangle.
- [NormalizedRegion](normalizedregion.md): A polygon composed of normalized points.
- [BoundingBoxProviding](boundingboxproviding.md): A protocol for objects that have a bounding box.
- [BoundingRegionProviding](boundingregionproviding.md): A protocol for objects that have a defined boundary in an image.
- [QuadrilateralProviding](quadrilateralproviding.md): A protocol for objects that have a bounding quadrilateral.
- [CoordinateOrigin](coordinateorigin.md): The origin of a coordinate system relative to an image.
