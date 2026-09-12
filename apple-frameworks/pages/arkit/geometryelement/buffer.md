> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/geometryelement/buffer](https://developer.apple.com/documentation/arkit/geometryelement/buffer)

# buffer

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Metal buffer that contains index data that defines the geometry of an object.

## Declaration

```swift
var buffer: any MTLBuffer { get }
```

## See Also

### Rendering geometry elements

- [primitive](primitive-swift.property.md): Get the type of the geometry element.
- [GeometryElement.Primitive](primitive-swift.enum.md): The kind of primitive, lines or triangles, that a geometry element contains.
- [count](count.md): The number of primitives in the Metal buffer for a geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent an index value.
- [description](description.md): A textual representation of this geometry element.
