> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/boundingregionproviding](https://developer.apple.com/documentation/vision/boundingregionproviding)

# BoundingRegionProviding

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A protocol for objects that have a defined boundary in an image.

## Declaration

```swift
protocol BoundingRegionProviding
```

## Topics

### Getting the bounding region

- [boundingRegion](boundingregionproviding/boundingregion.md): A polygon that defines the boundary of an area in the image.

## Relationships

### Conforming Types

- [DocumentObservation.Container](documentobservation/container.md)
- [DocumentObservation.Container.DataDetectorMatch](documentobservation/container/datadetectormatch.md)
- [DocumentObservation.Container.List](documentobservation/container/list.md)
- [DocumentObservation.Container.Table](documentobservation/container/table.md)
- [DocumentObservation.Container.Text](documentobservation/container/text-swift.struct.md)

## See Also

### Image locations and regions

- [NormalizedPoint](normalizedpoint.md): A point in a 2D coordinate system.
- [NormalizedRect](normalizedrect.md): The location and dimensions of a rectangle.
- [NormalizedRegion](normalizedregion.md): A polygon composed of normalized points.
- [NormalizedCircle](normalizedcircle.md): The center point and radius of a 2D circle.
- [BoundingBoxProviding](boundingboxproviding.md): A protocol for objects that have a bounding box.
- [QuadrilateralProviding](quadrilateralproviding.md): A protocol for objects that have a bounding quadrilateral.
- [CoordinateOrigin](coordinateorigin.md): The origin of a coordinate system relative to an image.
