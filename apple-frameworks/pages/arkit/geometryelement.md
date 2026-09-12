> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/geometryelement](https://developer.apple.com/documentation/arkit/geometryelement)

# GeometryElement

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A container for vertex indices of lines or triangles.

## Declaration

```swift
struct GeometryElement
```

## Topics

### Rendering geometry elements

- [buffer](geometryelement/buffer.md): A Metal buffer that contains index data that defines the geometry of an object.
- [primitive](geometryelement/primitive-swift.property.md): Get the type of the geometry element.
- [GeometryElement.Primitive](geometryelement/primitive-swift.enum.md): The kind of primitive, lines or triangles, that a geometry element contains.
- [count](geometryelement/count.md): The number of primitives in the Metal buffer for a geometry element.
- [bytesPerIndex](geometryelement/bytesperindex.md): The number of bytes that represent an index value.
- [description](geometryelement/description.md): A textual representation of this geometry element.

### Default Implementations

- [Equatable Implementations](geometryelement/equatable-implementations.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Geometry

- [GeometrySource](geometrysource.md): A container for geometrical vector data.
