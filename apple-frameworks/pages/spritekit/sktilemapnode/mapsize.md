> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/mapsize](https://developer.apple.com/documentation/spritekit/sktilemapnode/mapsize)

# mapSize (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The overall size of the tile map.

## Declaration

```swift
var mapSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

For a grid set type, the overall size, in points, of the node will be [numberOfColumns](numberofcolumns.md) `*` [tileSize](tilesize.md) `.` [width](../../corefoundation/cgsize/width.md) wide and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) `*` [tileSize](tilesize.md) `.` [height](../../corefoundation/cgsize/height.md) high.

## See Also

### Querying the Tile Map’s Properties

- [centerOfTile(atColumn:row:)](centeroftile%28atcolumn_row_%29.md)
- [tileColumnIndex(fromPosition:)](tilecolumnindex%28fromposition_%29.md)
- [tileDefinition(atColumn:row:)](tiledefinition%28atcolumn_row_%29.md)
- [tileGroup(atColumn:row:)](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndex(fromPosition:)](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.

# mapSize (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The overall size of the tile map.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize mapSize;
```

<a id="Discussion"></a>

## Discussion

For a grid set type, the overall size, in points, of the node will be [numberOfColumns](numberofcolumns.md) `*` [tileSize](tilesize.md) `.` [width](../../corefoundation/cgsize/width.md) wide and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) `*` [tileSize](tilesize.md) `.` [height](../../corefoundation/cgsize/height.md) high.

## See Also

### Querying the Tile Map’s Properties

- [centerOfTileAtColumn:row:](centeroftile%28atcolumn_row_%29.md)
- [tileColumnIndexFromPosition:](tilecolumnindex%28fromposition_%29.md)
- [tileDefinitionAtColumn:row:](tiledefinition%28atcolumn_row_%29.md)
- [tileGroupAtColumn:row:](tilegroup%28atcolumn_row_%29.md)
- [tileRowIndexFromPosition:](tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
