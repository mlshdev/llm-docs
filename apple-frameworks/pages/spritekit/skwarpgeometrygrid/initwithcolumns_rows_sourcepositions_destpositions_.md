> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/initwithcolumns:rows:sourcepositions:destpositions:](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/initwithcolumns:rows:sourcepositions:destpositions:)

# initWithColumns:rows:sourcePositions:destPositions:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a warp geometry grid of a specific size and warp translation, in pointers to point arrays.

## Declaration

```objectivec
- (instancetype) initWithColumns:(NSInteger) cols rows:(NSInteger) rows sourcePositions:(const vector_float2 *) sourcePositions destPositions:(const vector_float2 *) destPositions;
```

## Parameters

- `cols`: The number of columns in the grid.
- `rows`: The number of rows in the grid.
- `sourcePositions`: The geometry’s source positions or `nil`.
- `destPositions`: The geometry’s destination positions or `nil`.

<a id="return-value"></a>

## Return Value

A new warp geometry grid object.

<a id="Discussion"></a>

## Discussion

You supply the source and destination position as pointers to row-major arrays of normalized [vector_float2](../../simd/vector_float2.md) coordinates. The number of horizontal coordinates is the column count plus one and the number of vertical coordinates is the row count plus one. Passing `nil` as either of the position arguments results in an identity warp with vertices distributed evenly throughout the geometry. Passing `nil` to both `sourcePositions` and `destPositions` gives a result identical to [gridWithColumns:rows:](init%28columns_rows_%29.md).

## See Also

### Creating a Warp Geometry Grid

- [gridWithColumns:rows:](init%28columns_rows_%29.md): Creates a warp geometry grid of a specified size.
- [gridWithColumns:rows:sourcePositions:destPositions:](gridwithcolumns_rows_sourcepositions_destpositions_.md)
- [grid](grid.md): Initializes a new empty grid.
- [initWithCoder:](init%28coder_%29.md): Tells you when to intialize a grid that was loaded from an archive.
