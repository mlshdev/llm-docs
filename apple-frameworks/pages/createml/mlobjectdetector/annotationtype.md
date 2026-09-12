> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/annotationtype](https://developer.apple.com/documentation/createml/mlobjectdetector/annotationtype)

# MLObjectDetector.AnnotationType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The available types of image annotations.

## Declaration

```swift
enum AnnotationType
```

## Mentioned In

- [Building an object detector data source](../building-an-object-detector-data-source.md)

<a id="overview"></a>

## Overview

Use [MLObjectDetector.AnnotationType](annotationtype.md) to tell Create ML how to interpret your object annotations.

## Topics

### Bounding box annotations

- [MLObjectDetector.AnnotationType.boundingBox(units:origin:anchor:)](annotationtype/boundingbox%28units_origin_anchor_%29.md): An annotation type that defines a rectangle around an object within an image.
- [MLBoundingBoxUnits](../mlboundingboxunits.md): The units a bounding box annotation uses to define its position and size.
- [MLBoundingBoxAnchor](../mlboundingboxanchor.md): A location within a bounding box that an annotation’s coordinates use as their reference point.
- [MLBoundingBoxCoordinatesOrigin](../mlboundingboxcoordinatesorigin.md): The location within an image that an annotation’s coordinates use as their origin.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLObjectDetector.DataSource](datasource.md): A data source for an object detector.
- [MLObjectDetector.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training an object detection model.
