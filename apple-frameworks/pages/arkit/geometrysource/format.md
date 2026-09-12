> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/geometrysource/format](https://developer.apple.com/documentation/arkit/geometrysource/format)

# format

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The vertex format for data in a geometry source’s buffer.

## Declaration

```swift
var format: MTLVertexFormat { get }
```

## See Also

### Inspecting geometry data

- [buffer](buffer.md): A Metal buffer that contains per-vector data for a geometry source.
- [count](count.md): The number of vectors in a geometry source.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector in a geometry source.
- [offset](offset.md): The offset, in bytes, from the beginning of a geometry source’s buffer.
- [stride](stride.md): The number of bytes between one vector and another in a geometry source’s buffer.
- [description](description.md): A textual representation of this geometry source.
