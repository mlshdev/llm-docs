> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmesh/vertexcapacity

# vertexCapacity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The capacity of the vertex buffer, measured in vertices.

## Declaration

```swift
@MainActor var vertexCapacity: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is equivalent to [vertexCapacity](descriptor-swift.struct/vertexcapacity.md).

## See Also

### Describing a low-level mesh

- [descriptor](descriptor-swift.property.md): The definition of the structure of this low-level mesh.
- [parts](parts.md): A mutable collection of parts.
- [indexCapacity](indexcapacity.md): The capacity of the index buffer, measured in indices.
