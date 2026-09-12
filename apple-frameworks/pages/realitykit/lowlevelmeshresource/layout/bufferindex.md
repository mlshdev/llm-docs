> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/layout/bufferindex](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/layout/bufferindex)

# bufferIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The index of the buffer to use for this layout.

## Declaration

```swift
var bufferIndex: Int { get set }
```

<a id="discussion"></a>

## Discussion

Most usage scenarios use only one buffer. Use an index less than [maxVertexBufferCount](../descriptor-swift.struct/maxvertexbuffercount.md).
