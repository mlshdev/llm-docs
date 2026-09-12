> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/layout/init(bufferindex:bufferoffset:bufferstride:stepfunction:steprate:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/layout/init(bufferindex:bufferoffset:bufferstride:stepfunction:steprate:))

# init(bufferIndex:bufferOffset:bufferStride:stepFunction:stepRate:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a layout with the given buffer index, offset, stride, step function, and step rate.

## Declaration

```swift
init(bufferIndex: Int, bufferOffset: Int = 0, bufferStride: Int, stepFunction: MTLVertexStepFunction = .perVertex, stepRate: Int = 1)
```

## Parameters

- `bufferIndex`: The index of the buffer this layout refers to.
- `bufferOffset`: The byte offset into the buffer for the first byte of this layout. Defaults to `0`.
- `bufferStride`: The distance, in bytes, between consecutive vertices for attributes using this layout.
- `stepFunction`: How the vertex shader steps through this layout’s data. Defaults to `.perVertex`.
- `stepRate`: The number of instances that share the same per-instance data. Defaults to `1`.
