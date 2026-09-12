> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/geometryelement/description](https://developer.apple.com/documentation/arkit/geometryelement/description)

# description

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A textual representation of this geometry element.

## Declaration

```swift
var description: String { get }
```

## See Also

### Rendering geometry elements

- [buffer](buffer.md): A Metal buffer that contains index data that defines the geometry of an object.
- [primitive](primitive-swift.property.md): Get the type of the geometry element.
- [GeometryElement.Primitive](primitive-swift.enum.md): The kind of primitive, lines or triangles, that a geometry element contains.
- [count](count.md): The number of primitives in the Metal buffer for a geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent an index value.
