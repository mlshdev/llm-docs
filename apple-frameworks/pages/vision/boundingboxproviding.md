> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/boundingboxproviding](https://developer.apple.com/documentation/vision/boundingboxproviding)

# BoundingBoxProviding

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A protocol for objects that have a bounding box.

## Declaration

```swift
protocol BoundingBoxProviding
```

## Topics

### Getting the bounding box

- [boundingBox](boundingboxproviding/boundingbox.md): The bounding box of the object.

## Relationships

### Inherited By

- [QuadrilateralProviding](quadrilateralproviding.md)

### Conforming Types

- [BarcodeObservation](barcodeobservation.md)
- [DetectedDocumentObservation](detecteddocumentobservation.md)
- [DetectedObjectObservation](detectedobjectobservation.md)
- [FaceObservation](faceobservation.md)
- [HumanObservation](humanobservation.md)
- [RecognizedObjectObservation](recognizedobjectobservation.md)
- [RecognizedTextObservation](recognizedtextobservation.md)
- [RectangleObservation](rectangleobservation.md)
- [TextObservation](textobservation.md)

## See Also

### Image locations and regions

- [NormalizedPoint](normalizedpoint.md): A point in a 2D coordinate system.
- [NormalizedRect](normalizedrect.md): The location and dimensions of a rectangle.
- [NormalizedRegion](normalizedregion.md): A polygon composed of normalized points.
- [NormalizedCircle](normalizedcircle.md): The center point and radius of a 2D circle.
- [BoundingRegionProviding](boundingregionproviding.md): A protocol for objects that have a defined boundary in an image.
- [QuadrilateralProviding](quadrilateralproviding.md): A protocol for objects that have a bounding quadrilateral.
- [CoordinateOrigin](coordinateorigin.md): The origin of a coordinate system relative to an image.
