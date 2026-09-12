> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/objectannotation](https://developer.apple.com/documentation/createml/mlobjectdetector/objectannotation)

# MLObjectDetector.ObjectAnnotation

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

The label, location, and confidence score of an item the object detector found in an image.

## Declaration

```swift
struct ObjectAnnotation
```

## Topics

### Creating an annotation

- [init(label:boundingBox:confidence:)](objectannotation/init%28label_boundingbox_confidence_%29.md): Creates an annotation for an item an object detector finds in an image.

### Inspecting an annotation

- [label](objectannotation/label.md): The name of the item the object detector found in an image.
- [boundingBox](objectannotation/boundingbox.md): A rectangular region that encloses an item the object detector found in the image.
- [confidence](objectannotation/confidence.md): The object detector’s confidence score for its prediction’s accuracy.

### Describing an annotation

- [description](objectannotation/description.md): A text representation of the object annotation.
- [debugDescription](objectannotation/debugdescription.md): A text representation of the object annotation that’s suitable for output during debugging.
- [playgroundDescription](objectannotation/playgrounddescription.md): A description of the object annotation within a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](objectannotation/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](objectannotation/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](objectannotation/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing an object detector

- [prediction(from:)](prediction%28from_%29.md): Locates objects in an image and generates an annotation for each object it detects.
- [predictions(from:)](predictions%28from_%29.md): Locates objects in an array of images and generates an array of annotation collections, one for each input image.
- [MLObjectDetector.DetectedObjects](detectedobjects.md): An array of annotations that represent the items an object detector found in an image.
