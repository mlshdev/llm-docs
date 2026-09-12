> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothposeresource/withpositions(_:)](https://developer.apple.com/documentation/realitykit/clothposeresource/withpositions(_:))

# withPositions(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides access to the positions of all the vertices within a callback.

## Declaration

```swift
final func withPositions<Result>(_ callback: (Span<SIMD3<Float>>) -> Result) -> Result
```

## Parameters

- `callback`: A closure that receives a span over the vertex positions.

<a id="return-value"></a>

## Return Value

The value returned by `callback`.

<a id="discussion"></a>

## Discussion

The provided span is only valid for the lifetime of the callback.

## See Also

### Accessing pose positions

- [position(at:)](position%28at_%29.md): Returns the position of the vertex at the given index.
- [vertexCount](vertexcount.md): The number of vertices in the pose resource.
