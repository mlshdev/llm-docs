> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothposeresource/position(at:)](https://developer.apple.com/documentation/realitykit/clothposeresource/position(at:))

# position(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Returns the position of the vertex at the given index.

## Declaration

```swift
final func position(at vertexIndex: UInt32) -> SIMD3<Float>
```

## Parameters

- `vertexIndex`: Index of the vertex to get the position for.

<a id="return-value"></a>

## Return Value

The position of the specified vertex.

## See Also

### Accessing pose positions

- [withPositions(\_:)](withpositions%28__%29.md): Provides access to the positions of all the vertices within a callback.
- [vertexCount](vertexcount.md): The number of vertices in the pose resource.
