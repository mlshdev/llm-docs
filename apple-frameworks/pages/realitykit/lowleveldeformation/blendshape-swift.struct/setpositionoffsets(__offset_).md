> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/blendshape-swift.struct/setpositionoffsets(_:offset:)](https://developer.apple.com/documentation/realitykit/lowleveldeformation/blendshape-swift.struct/setpositionoffsets(_:offset:))

# setPositionOffsets(\_:offset:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the buffer containing blend-shape position offsets.

## Declaration

```swift
func setPositionOffsets(_ buffer: any MTLBuffer, offset: Int) throws
```

## Parameters

- `buffer`: The Metal buffer containing the blend-shape position offsets.
- `offset`: The byte offset into `buffer` where the data begins.

<a id="discussion"></a>

## Discussion

The buffer must contain `targetCount × vertexCount` entries in the same format as the input mesh’s `.position` attribute.

> **Throws**

> If `offset` is out of bounds for `buffer`, or if the buffer is too small.
