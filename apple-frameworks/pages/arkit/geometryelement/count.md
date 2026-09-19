> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/geometryelement/count

# count

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The number of primitives in the Metal buffer for a geometry element.

## Declaration

```swift
var count: Int { get }
```

## See Also

### Rendering geometry elements

- [buffer](buffer.md): A Metal buffer that contains index data that defines the geometry of an object.
- [primitive](primitive-swift.property.md): Get the type of the geometry element.
- [GeometryElement.Primitive](primitive-swift.enum.md): The kind of primitive, lines or triangles, that a geometry element contains.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent an index value.
- [description](description.md): A textual representation of this geometry element.
