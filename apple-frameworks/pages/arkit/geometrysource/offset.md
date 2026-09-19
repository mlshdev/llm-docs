> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/geometrysource/offset

# offset

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The offset, in bytes, from the beginning of a geometry source’s buffer.

## Declaration

```swift
var offset: Int { get }
```

## See Also

### Inspecting geometry data

- [buffer](buffer.md): A Metal buffer that contains per-vector data for a geometry source.
- [count](count.md): The number of vectors in a geometry source.
- [format](format.md): The vertex format for data in a geometry source’s buffer.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector in a geometry source.
- [stride](stride.md): The number of bytes between one vector and another in a geometry source’s buffer.
- [description](description.md): A textual representation of this geometry source.
