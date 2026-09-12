> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/quadrilateralproviding](https://developer.apple.com/documentation/vision/quadrilateralproviding)

# QuadrilateralProviding

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A protocol for objects that have a bounding quadrilateral.

## Declaration

```swift
protocol QuadrilateralProviding : BoundingBoxProviding
```

## Topics

### Getting the normalized points

- [bottomLeft](quadrilateralproviding/bottomleft.md): The coordinates of the lower-left corner of the quadrilateral.
- [bottomRight](quadrilateralproviding/bottomright.md): The coordinates of the lower-right corner of quadrilateral.
- [topLeft](quadrilateralproviding/topleft.md): The coordinates of the upper-left corner of the quadrilateral.
- [topRight](quadrilateralproviding/topright.md): The coordinates of the upper-right corner of the quadrilateral.

## Relationships

### Inherits From

- [BoundingBoxProviding](boundingboxproviding.md)

### Conforming Types

- [BarcodeObservation](barcodeobservation.md)
- [DetectedDocumentObservation](detecteddocumentobservation.md)
- [RecognizedTextObservation](recognizedtextobservation.md)
- [RectangleObservation](rectangleobservation.md)
- [TextObservation](textobservation.md)

## See Also

### Image locations and regions

- [NormalizedPoint](normalizedpoint.md): A point in a 2D coordinate system.
- [NormalizedRect](normalizedrect.md): The location and dimensions of a rectangle.
- [NormalizedRegion](normalizedregion.md): A polygon composed of normalized points.
- [NormalizedCircle](normalizedcircle.md): The center point and radius of a 2D circle.
- [BoundingBoxProviding](boundingboxproviding.md): A protocol for objects that have a bounding box.
- [BoundingRegionProviding](boundingregionproviding.md): A protocol for objects that have a defined boundary in an image.
- [CoordinateOrigin](coordinateorigin.md): The origin of a coordinate system relative to an image.
