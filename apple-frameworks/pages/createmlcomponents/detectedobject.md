> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/detectedobject](https://developer.apple.com/documentation/createmlcomponents/detectedobject)

# DetectedObject

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An item in a detection result.

## Declaration

```swift
struct DetectedObject<Label> where Label : Comparable, Label : Hashable
```

## Topics

### Creating a detected object

- [init(boundingBox:label:probability:)](detectedobject/init%28boundingbox_label_probability_%29.md): Creates a detected object with bounding box, object label and confidence.

### Getting the properties

- [boundingBox](detectedobject/boundingbox.md): The bounding box of the detected object.
- [confidence](detectedobject/confidence.md): The detection confidence. The value will always be between 0.0 and 1.0.
- [label](detectedobject/label.md): The detected object label.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Object detection components

- [ObjectDetectionAnnotation](objectdetectionannotation.md): An object detection annotation.
- [ObjectDetectionMetrics](objectdetectionmetrics.md): Metrics for object detection model.
