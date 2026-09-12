> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/descriptor-swift.struct/indexcapacity](https://developer.apple.com/documentation/realitykit/lowlevelmesh/descriptor-swift.struct/indexcapacity)

# indexCapacity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The number of indices to allocate space for.

## Declaration

```swift
var indexCapacity: Int
```

<a id="discussion"></a>

## Discussion

You can specify ranges of indices to display dynamically with [parts](../parts.md).

## See Also

### Defining the descriptor’s limits

- [vertexCapacity](vertexcapacity.md): The number of vertices to allocate space for.
- [maxVertexBufferCount](maxvertexbuffercount.md): The maximum number of separate buffers the system supports.
