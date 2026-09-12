> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/tilecolumnindex(fromposition:)](https://developer.apple.com/documentation/spritekit/sktilemapnode/tilecolumnindex(fromposition:))

# tileColumnIndex(fromPosition:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
func tileColumnIndex(fromPosition position: CGPoint) -> Int
```

## Parameters

- `position`: The position in the tile map to check.

<a id="return-value"></a>

## Return Value

The tile map node object’s tile column index for the specified position.

## See Also

### Querying the Tile Map’s Properties

- [centerOfTile(atColumn:row:)](centeroftile%28atcolumn_row_%29.md)
- [tileDefinition(atColumn:row:)](tiledefinition%28atcolumn_row_%29.md)
- [tileGroup(atColumn:row:)](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndex(fromPosition:)](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](mapsize.md): The overall size of the tile map.

# tileColumnIndexFromPosition: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
- (NSUInteger) tileColumnIndexFromPosition:(CGPoint) position;
```

## Parameters

- `position`: The position in the tile map to check.

<a id="return-value"></a>

## Return Value

The tile map node object’s tile column index for the specified position.

## See Also

### Querying the Tile Map’s Properties

- [centerOfTileAtColumn:row:](centeroftile%28atcolumn_row_%29.md)
- [tileDefinitionAtColumn:row:](tiledefinition%28atcolumn_row_%29.md)
- [tileGroupAtColumn:row:](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndexFromPosition:](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](mapsize.md): The overall size of the tile map.
