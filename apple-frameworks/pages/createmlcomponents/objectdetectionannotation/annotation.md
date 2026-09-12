> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/objectdetectionannotation/annotation](https://developer.apple.com/documentation/createmlcomponents/objectdetectionannotation/annotation)

# ObjectDetectionAnnotation.Annotation

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The annotation represented by an object label and its bounding box.

## Declaration

```swift
struct Annotation
```

## Topics

### Getting the properties

- [boundingBox](annotation/boundingbox.md): The bounding box that describes the spatial location of the object.
- [label](annotation/label.md): The object label.

### Encoding and decoding

- [ObjectDetectionAnnotation.Annotation.CodingKeys](annotation/codingkeys.md): Coding keys for Annotation.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the properties

- [imageFileName](imagefilename.md): The name of the image file.
- [objects](objects.md): The list of object annotations in the image.
- [prominentObject](prominentobject.md): The most prominent object in the image.
