> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboundingboxcoordinatesorigin](https://developer.apple.com/documentation/createml/mlboundingboxcoordinatesorigin)

# MLBoundingBoxCoordinatesOrigin

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The location within an image that an annotation’s coordinates use as their origin.

## Declaration

```swift
enum MLBoundingBoxCoordinatesOrigin
```

## Topics

### Designating origins

- [MLBoundingBoxCoordinatesOrigin.topLeft](mlboundingboxcoordinatesorigin/topleft.md): An origin at the image’s top-left corner.
- [MLBoundingBoxCoordinatesOrigin.bottomLeft](mlboundingboxcoordinatesorigin/bottomleft.md): An origin at the image’s bottom-left corner.

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
- [MLBoundingBoxAnchor](mlboundingboxanchor.md): A location within a bounding box that an annotation’s coordinates use as their reference point.
