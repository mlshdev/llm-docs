> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/descriptor-swift.struct/vertexbuffercount](https://developer.apple.com/documentation/realitykit/lowlevelmesh/descriptor-swift.struct/vertexbuffercount)

# vertexBufferCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The number of buffers this descriptor uses.

## Declaration

```swift
var vertexBufferCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This value derives from the maximum `bufferIndex` each layout specifies in [vertexLayouts](vertexlayouts.md).

## See Also

### Defining the descriptor’s contents

- [indexType](indextype.md): The data type of the indices that the index buffer stores.
- [vertexAttributes](vertexattributes.md): An array that describes the vertex input attributes to a vertex function.
- [vertexLayouts](vertexlayouts.md): The list of layouts.
