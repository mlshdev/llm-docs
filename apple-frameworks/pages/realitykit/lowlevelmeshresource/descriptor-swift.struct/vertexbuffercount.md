> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct/vertexbuffercount

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
