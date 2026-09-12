> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboundingboxunits](https://developer.apple.com/documentation/createml/mlboundingboxunits)

# MLBoundingBoxUnits

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The units a bounding box annotation uses to define its position and size.

## Declaration

```swift
enum MLBoundingBoxUnits
```

<a id="overview"></a>

## Overview

All bounding box annotations in an annotation file must use the same units for their coordinates and size. See [MLObjectDetector.AnnotationType.boundingBox(units:origin:anchor:)](mlobjectdetector/annotationtype/boundingbox%28units_origin_anchor_%29.md).

## Topics

### Designating units

- [MLBoundingBoxUnits.pixel](mlboundingboxunits/pixel.md): A unit of measurement in pixels for an image.
- [MLBoundingBoxUnits.normalized](mlboundingboxunits/normalized.md): A unit of measurement as a portion of an image’s overall width or height.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bounding box annotations

- [MLObjectDetector.AnnotationType.boundingBox(units:origin:anchor:)](mlobjectdetector/annotationtype/boundingbox%28units_origin_anchor_%29.md): An annotation type that defines a rectangle around an object within an image.
- [MLBoundingBoxAnchor](mlboundingboxanchor.md): A location within a bounding box that an annotation’s coordinates use as their reference point.
- [MLBoundingBoxCoordinatesOrigin](mlboundingboxcoordinatesorigin.md): The location within an image that an annotation’s coordinates use as their origin.
