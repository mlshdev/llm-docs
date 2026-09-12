> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/destposition(at:)](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/destposition(at:))

# destPosition(at:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the destination position of a vertex.

## Declaration

```swift
func destPosition(at index: Int) -> vector_float2
```

## Parameters

- `index`: The index of the position vertex to query.

<a id="return-value"></a>

## Return Value

The normalized position of the specified vertex in `destPositions`.

<a id="Discussion"></a>

## Discussion

The specified index must be between 0 and the warp geometry grid’s [vertexCount](vertexcount.md) `- 1`.

## See Also

### Accessing or Setting Grid Vertices

- [replacingByDestinationPositions(positions:)](replacingbydestinationpositions%28positions_%29.md): Returns a copy of this grid, updated with the argument destination positions.
- [replacingBySourcePositions(positions:)](replacingbysourcepositions%28positions_%29.md): Returns a copy of this grid, updated with the argument source positions.
- [sourcePosition(at:)](sourceposition%28at_%29.md): Returns the source position of a vertex.

# destPositionAtIndex: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the destination position of a vertex.

## Declaration

```objectivec
- (vector_float2) destPositionAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the position vertex to query.

<a id="return-value"></a>

## Return Value

The normalized position of the specified vertex in `destPositions`.

<a id="Discussion"></a>

## Discussion

The specified index must be between 0 and the warp geometry grid’s [vertexCount](vertexcount.md) `- 1`.

## See Also

### Accessing or Setting Grid Vertices

- [sourcePositionAtIndex:](sourceposition%28at_%29.md): Returns the source position of a vertex.
- [gridByReplacingDestPositions:](gridbyreplacingdestpositions_.md): Returns a copy of the receiver with the destination positions replaced by a specified array.
- [gridByReplacingSourcePositions:](gridbyreplacingsourcepositions_.md): Returns a copy of the receiver with the source positions replaced by a specified array.
