> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/tiledefinition(atcolumn:row:)](https://developer.apple.com/documentation/spritekit/sktilemapnode/tiledefinition(atcolumn:row:))

# tileDefinition(atColumn:row:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
func tileDefinition(atColumn column: Int, row: Int) -> SKTileDefinition?
```

## Parameters

- `column`: The column index of the tile.
- `row`: The row index of the tile.

<a id="return-value"></a>

## Return Value

The tile definition for the tile at the specified column and row.

## See Also

### Querying the Tile Map’s Properties

- [centerOfTile(atColumn:row:)](centeroftile%28atcolumn_row_%29.md)
- [tileColumnIndex(fromPosition:)](tilecolumnindex%28fromposition_%29.md)
- [tileGroup(atColumn:row:)](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndex(fromPosition:)](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](mapsize.md): The overall size of the tile map.

# tileDefinitionAtColumn:row: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
- (SKTileDefinition *) tileDefinitionAtColumn:(NSUInteger) column row:(NSUInteger) row;
```

## Parameters

- `column`: The column index of the tile.
- `row`: The row index of the tile.

<a id="return-value"></a>

## Return Value

The tile definition for the tile at the specified column and row.

## See Also

### Querying the Tile Map’s Properties

- [centerOfTileAtColumn:row:](centeroftile%28atcolumn_row_%29.md)
- [tileColumnIndexFromPosition:](tilecolumnindex%28fromposition_%29.md)
- [tileGroupAtColumn:row:](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndexFromPosition:](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](mapsize.md): The overall size of the tile map.
