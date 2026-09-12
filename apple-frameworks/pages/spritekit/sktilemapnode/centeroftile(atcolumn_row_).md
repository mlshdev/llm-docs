> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/centeroftile(atcolumn:row:)](https://developer.apple.com/documentation/spritekit/sktilemapnode/centeroftile(atcolumn:row:))

# centerOfTile(atColumn:row:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
func centerOfTile(atColumn column: Int, row: Int) -> CGPoint
```

## Parameters

- `column`: The column index of the tile.
- `row`: The row index of the tile.

<a id="return-value"></a>

## Return Value

The coordinates in points of the center of the tile for a given column and row.

## See Also

### Querying the Tile Map’s Properties

- [tileColumnIndex(fromPosition:)](tilecolumnindex%28fromposition_%29.md)
- [tileDefinition(atColumn:row:)](tiledefinition%28atcolumn_row_%29.md)
- [tileGroup(atColumn:row:)](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndex(fromPosition:)](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](mapsize.md): The overall size of the tile map.

# centerOfTileAtColumn:row: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
- (CGPoint) centerOfTileAtColumn:(NSUInteger) column row:(NSUInteger) row;
```

## Parameters

- `column`: The column index of the tile.
- `row`: The row index of the tile.

<a id="return-value"></a>

## Return Value

The coordinates in points of the center of the tile for a given column and row.

## See Also

### Querying the Tile Map’s Properties

- [tileColumnIndexFromPosition:](tilecolumnindex%28fromposition_%29.md)
- [tileDefinitionAtColumn:row:](tiledefinition%28atcolumn_row_%29.md)
- [tileGroupAtColumn:row:](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndexFromPosition:](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](mapsize.md): The overall size of the tile map.
