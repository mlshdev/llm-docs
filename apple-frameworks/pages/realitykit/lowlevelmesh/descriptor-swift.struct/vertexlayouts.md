> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/descriptor-swift.struct/vertexlayouts](https://developer.apple.com/documentation/realitykit/lowlevelmesh/descriptor-swift.struct/vertexlayouts)

# vertexLayouts

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The list of layouts.

## Declaration

```swift
var vertexLayouts: [LowLevelMesh.Layout] { get set }
```

<a id="discussion"></a>

## Discussion

You assign a layout for each vertex attribute with [layoutIndex](../attribute/layoutindex.md).

## See Also

### Defining the descriptor’s contents

- [indexType](indextype.md): The data type of the indices that the index buffer stores.
- [vertexAttributes](vertexattributes.md): An array that describes the vertex input attributes to a vertex function.
- [vertexBufferCount](vertexbuffercount.md): The number of buffers this descriptor uses.
