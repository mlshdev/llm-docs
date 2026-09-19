> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmesh/descriptor-swift.struct/maxvertexbuffercount

# maxVertexBufferCount

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The maximum number of separate buffers the system supports.

## Declaration

```swift
static let maxVertexBufferCount: Int
```

<a id="discussion"></a>

## Discussion

For optimal performance, most applications use one buffer.

## See Also

### Defining the descriptor’s limits

- [vertexCapacity](vertexcapacity.md): The number of vertices to allocate space for.
- [indexCapacity](indexcapacity.md): The number of indices to allocate space for.
