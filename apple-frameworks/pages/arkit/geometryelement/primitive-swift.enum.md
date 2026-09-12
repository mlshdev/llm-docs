> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/geometryelement/primitive-swift.enum](https://developer.apple.com/documentation/arkit/geometryelement/primitive-swift.enum)

# GeometryElement.Primitive

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

The kind of primitive, lines or triangles, that a geometry element contains.

## Declaration

```swift
enum Primitive
```

## Topics

### Primitive shapes

- [GeometryElement.Primitive.line](primitive-swift.enum/line.md): Two vertices that connect to form a line.
- [GeometryElement.Primitive.triangle](primitive-swift.enum/triangle.md): Three vertices that connect to form a triangle.

### Inspecting geometry primitives

- [indexCount](primitive-swift.enum/indexcount.md): The number of indices for the `Primitive`.

### Instance Properties

- [description](primitive-swift.enum/description.md): A textual representation of GeometryElement.Primitive

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rendering geometry elements

- [buffer](buffer.md): A Metal buffer that contains index data that defines the geometry of an object.
- [primitive](primitive-swift.property.md): Get the type of the geometry element.
- [count](count.md): The number of primitives in the Metal buffer for a geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent an index value.
- [description](description.md): A textual representation of this geometry element.
