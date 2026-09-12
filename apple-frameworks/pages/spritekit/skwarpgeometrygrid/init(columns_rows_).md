> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/init(columns:rows:)](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/init(columns:rows:))

# init(columns:rows:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a warp geometry grid of a specified size.

## Declaration

```swift
convenience init(columns cols: Int, rows: Int)
```

## Parameters

- `cols`: The number of columns in the grid.
- `rows`: The number of rows in the grid.

<a id="return-value"></a>

## Return Value

A new warp geometry grid object.

## Mentioned In

- [Animate the Warping of a Sprite](../animate-the-warping-of-a-sprite.md)

<a id="Discussion"></a>

## Discussion

Creating a warp geometry grid without explicit source and destination positions automatically generates the required position arrays. For example, a 2 column by 2 row grid would create two arrays containing nine positions each, beginning at `[0,0]` \- for the bottom left position - and ending at `[1,1]` \- for the top left position.

| index: 6, position: \[0.0, 1.0\] | index: 7, position: \[0.5, 1.0\] | index: 8, position: \[1.0, 1.0\] |
| --- | --- | --- |
| index: 3, position: \[0.0, 0.5\] | index: 4, position: \[0.5, 0.5\] | index: 5, position: \[1.0, 0.5\] |
| index: 0, position: \[0.0, 0.0\] | index: 1, position: \[0.5, 0.0\] | index: 2, position: \[1.0, 0.0\] |

## See Also

### Creating a Warp Geometry Grid

- [init(columns:rows:sourcePositions:destinationPositions:)](init%28columns_rows_sourcepositions_destinationpositions_%29.md): Creates a warp geometry grid of a specific size and warp translation, in point arrays.
- [init(coder:)](init%28coder_%29.md): Tells you when to intialize a grid that was loaded from an archive.

# gridWithColumns:rows: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a warp geometry grid of a specified size.

## Declaration

```objectivec
+ (instancetype) gridWithColumns:(NSInteger) cols rows:(NSInteger) rows;
```

## Parameters

- `cols`: The number of columns in the grid.
- `rows`: The number of rows in the grid.

<a id="return-value"></a>

## Return Value

A new warp geometry grid object.

## Mentioned In

- [Animate the Warping of a Sprite](../animate-the-warping-of-a-sprite.md)

<a id="Discussion"></a>

## Discussion

Creating a warp geometry grid without explicit source and destination positions automatically generates the required position arrays. For example, a 2 column by 2 row grid would create two arrays containing nine positions each, beginning at `[0,0]` \- for the bottom left position - and ending at `[1,1]` \- for the top left position.

| index: 6, position: \[0.0, 1.0\] | index: 7, position: \[0.5, 1.0\] | index: 8, position: \[1.0, 1.0\] |
| --- | --- | --- |
| index: 3, position: \[0.0, 0.5\] | index: 4, position: \[0.5, 0.5\] | index: 5, position: \[1.0, 0.5\] |
| index: 0, position: \[0.0, 0.0\] | index: 1, position: \[0.5, 0.0\] | index: 2, position: \[1.0, 0.0\] |

## See Also

### Creating a Warp Geometry Grid

- [initWithColumns:rows:sourcePositions:destPositions:](initwithcolumns_rows_sourcepositions_destpositions_.md): Creates a warp geometry grid of a specific size and warp translation, in pointers to point arrays.
- [gridWithColumns:rows:sourcePositions:destPositions:](gridwithcolumns_rows_sourcepositions_destpositions_.md)
- [grid](grid.md): Initializes a new empty grid.
- [initWithCoder:](init%28coder_%29.md): Tells you when to intialize a grid that was loaded from an archive.
