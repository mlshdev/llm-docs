> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct/vertexbuffercount](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct/vertexbuffercount)

# vertexBufferCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of buffers this descriptor uses.

## Declaration

```swift
var vertexBufferCount: Int { get }
```

<a id="discussion"></a>

## Discussion

The value derives from the maximum `bufferIndex` specified across `vertexLayouts`.
