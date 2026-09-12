> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/init(columns:rows:sourcepositions:destinationpositions:)](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/init(columns:rows:sourcepositions:destinationpositions:))

# init(columns:rows:sourcePositions:destinationPositions:)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

Creates a warp geometry grid of a specific size and warp translation, in point arrays.

## Declaration

```swift
convenience init(columns: Int, rows: Int, sourcePositions: [SIMD2<Float>] = [SIMD2<Float>](), destinationPositions: [SIMD2<Float>] = [SIMD2<Float>]())
```

## Parameters

- `columns`: The number of columns in the grid.
- `rows`: The number of rows in the grid.
- `sourcePositions`: Optionally included array of the grid’s source warp positions.
- `destinationPositions`: Optionally included array of the grid’s destination warp positions.

<a id="return-value"></a>

## Return Value

A new warp geometry grid object.

<a id="Discussion"></a>

## Discussion

You supply the source and destination position as row-major arrays of normalized [vector_float2](../../simd/vector_float2.md) coordinates. The number of horizontal coordinates is the column count plus one and the number of vertical coordinates is the row count plus one. Passing `nil` as either of the position arguments results in an identity warp with vertices distributed evenly throughout the geometry. Passing `nil` to both `sourcePositions` and `destPositions` gives a result identical to [init(columns:rows:)](init%28columns_rows_%29.md).

## See Also

### Creating a Warp Geometry Grid

- [init(columns:rows:)](init%28columns_rows_%29.md): Creates a warp geometry grid of a specified size.
- [init(coder:)](init%28coder_%29.md): Tells you when to intialize a grid that was loaded from an archive.
