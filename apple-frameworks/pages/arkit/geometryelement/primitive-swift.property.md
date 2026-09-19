> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/geometryelement/primitive-swift.property

# primitive

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

Get the type of the geometry element.

## Declaration

```swift
var primitive: GeometryElement.Primitive { get }
```

## See Also

### Rendering geometry elements

- [buffer](buffer.md): A Metal buffer that contains index data that defines the geometry of an object.
- [GeometryElement.Primitive](primitive-swift.enum.md): The kind of primitive, lines or triangles, that a geometry element contains.
- [count](count.md): The number of primitives in the Metal buffer for a geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent an index value.
- [description](description.md): A textual representation of this geometry element.
