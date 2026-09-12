> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/tilemapnodewithtileset:columns:rows:tilesize:tilegrouplayout:](https://developer.apple.com/documentation/spritekit/sktilemapnode/tilemapnodewithtileset:columns:rows:tilesize:tilegrouplayout:)

# tileMapNodeWithTileSet:columns:rows:tileSize:tileGroupLayout:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
+ (instancetype) tileMapNodeWithTileSet:(SKTileSet *) tileSet columns:(NSUInteger) columns rows:(NSUInteger) rows tileSize:(CGSize) tileSize tileGroupLayout:(NSArray<SKTileGroup *> *) tileGroupLayout;
```

## See Also

### Creating a Tile Map

- [initWithTileSet:columns:rows:tileSize:](init%28tileset_columns_rows_tilesize_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [initWithTileSet:columns:rows:tileSize:fillWithTileGroup:](init%28tileset_columns_rows_tilesize_fillwith_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [initWithTileSet:columns:rows:tileSize:tileGroupLayout:](init%28tileset_columns_rows_tilesize_tilegrouplayout_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows. For a grid set type, the overall size, in points, of the node will be `numberOfColumns * tileSize.width` wide and `numberOfRows * tileSize.height` high.
- [tileMapNodesWithTileSet:columns:rows:tileSize:fromNoiseMap:tileTypeNoiseMapThresholds:](tilemapnodes%28tileset_columns_rows_tilesize_from_tiletypenoisemapthresholds_%29.md): Creates a tile map node by allowing a [GKNoiseMap](../../gameplaykit/gknoisemap.md) to choose its tiles.
- [tileMapNodeWithTileSet:columns:rows:tileSize:](tilemapnodewithtileset_columns_rows_tilesize_.md)
- [tileMapNodeWithTileSet:columns:rows:tileSize:fillWithTileGroup:](tilemapnodewithtileset_columns_rows_tilesize_fillwithtilegroup_.md)
