> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboundingboxanchor](https://developer.apple.com/documentation/createml/mlboundingboxanchor)

# MLBoundingBoxAnchor

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

A location within a bounding box that an annotation’s coordinates use as their reference point.

## Declaration

```swift
enum MLBoundingBoxAnchor
```

## Topics

### Designating anchors

- [MLBoundingBoxAnchor.center](mlboundingboxanchor/center.md): An anchor at the bounding box’s center point.
- [MLBoundingBoxAnchor.topLeft](mlboundingboxanchor/topleft.md): An anchor at the bounding box’s top-left corner.
- [MLBoundingBoxAnchor.bottomLeft](mlboundingboxanchor/bottomleft.md): An anchor at the bounding box’s bottom-left corner.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bounding box annotations

- [MLObjectDetector.AnnotationType.boundingBox(units:origin:anchor:)](mlobjectdetector/annotationtype/boundingbox%28units_origin_anchor_%29.md): An annotation type that defines a rectangle around an object within an image.
- [MLBoundingBoxUnits](mlboundingboxunits.md): The units a bounding box annotation uses to define its position and size.
- [MLBoundingBoxCoordinatesOrigin](mlboundingboxcoordinatesorigin.md): The location within an image that an annotation’s coordinates use as their origin.
