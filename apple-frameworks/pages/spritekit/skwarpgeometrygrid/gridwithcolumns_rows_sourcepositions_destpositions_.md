> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/gridwithcolumns:rows:sourcepositions:destpositions:](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/gridwithcolumns:rows:sourcepositions:destpositions:)

# gridWithColumns:rows:sourcePositions:destPositions:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
+ (instancetype) gridWithColumns:(NSInteger) cols rows:(NSInteger) rows sourcePositions:(const vector_float2 *) sourcePositions destPositions:(const vector_float2 *) destPositions;
```

## See Also

### Creating a Warp Geometry Grid

- [gridWithColumns:rows:](init%28columns_rows_%29.md): Creates a warp geometry grid of a specified size.
- [initWithColumns:rows:sourcePositions:destPositions:](initwithcolumns_rows_sourcepositions_destpositions_.md): Creates a warp geometry grid of a specific size and warp translation, in pointers to point arrays.
- [grid](grid.md): Initializes a new empty grid.
- [initWithCoder:](init%28coder_%29.md): Tells you when to intialize a grid that was loaded from an archive.
