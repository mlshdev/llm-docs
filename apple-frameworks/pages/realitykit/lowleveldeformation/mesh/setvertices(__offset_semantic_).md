> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/mesh/setvertices(_:offset:semantic:)](https://developer.apple.com/documentation/realitykit/lowleveldeformation/mesh/setvertices(_:offset:semantic:))

# setVertices(\_:offset:semantic:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Binds a Metal buffer to the vertex attribute with the specified semantic.

## Declaration

```swift
func setVertices(_ buffer: any MTLBuffer, offset: Int, semantic: LowLevelDeformation.VertexSemantic) throws
```

## Parameters

- `buffer`: The Metal buffer containing the vertex data.
- `offset`: The byte offset into `buffer` where the vertex data begins.
- `semantic`: The vertex semantic of the attribute to bind.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the semantic is absent from the descriptor, if `offset` is out of bounds for `buffer`, or if the buffer is too small for the declared stride and vertex count.
