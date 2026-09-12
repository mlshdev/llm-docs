> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/objectdetectionannotation](https://developer.apple.com/documentation/createmlcomponents/objectdetectionannotation)

# ObjectDetectionAnnotation

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object detection annotation.

## Declaration

```swift
struct ObjectDetectionAnnotation<Label> where Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

<a id="overview"></a>

## Overview

The annotation consists of a list of bounding boxes and object labels for each image.

## Topics

### Getting the properties

- [imageFileName](objectdetectionannotation/imagefilename.md): The name of the image file.
- [objects](objectdetectionannotation/objects.md): The list of object annotations in the image.
- [ObjectDetectionAnnotation.Annotation](objectdetectionannotation/annotation.md): The annotation represented by an object label and its bounding box.
- [prominentObject](objectdetectionannotation/prominentobject.md): The most prominent object in the image.

### Encoding and decoding

- [ObjectDetectionAnnotation.CodingKeys](objectdetectionannotation/codingkeys.md): Coding keys for object detection annotations

### Default Implementations

- [Identifiable Implementations](objectdetectionannotation/identifiable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Object detection components

- [DetectedObject](detectedobject.md): An item in a detection result.
- [ObjectDetectionMetrics](objectdetectionmetrics.md): Metrics for object detection model.
