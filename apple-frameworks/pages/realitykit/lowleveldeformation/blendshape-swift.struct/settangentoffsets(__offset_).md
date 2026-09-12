> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/blendshape-swift.struct/settangentoffsets(_:offset:)](https://developer.apple.com/documentation/realitykit/lowleveldeformation/blendshape-swift.struct/settangentoffsets(_:offset:))

# setTangentOffsets(\_:offset:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the buffer containing blend-shape tangent offsets.

## Declaration

```swift
func setTangentOffsets(_ buffer: any MTLBuffer, offset: Int) throws
```

## Parameters

- `buffer`: The Metal buffer containing the blend-shape tangent offsets.
- `offset`: The byte offset into `buffer` where the data begins.

<a id="discussion"></a>

## Discussion

The buffer must contain `targetCount × vertexCount` entries in the same format as the input mesh’s `.tangent` attribute.

> **Throws**

> If `offset` is out of bounds for `buffer`, or if the buffer is too small.
