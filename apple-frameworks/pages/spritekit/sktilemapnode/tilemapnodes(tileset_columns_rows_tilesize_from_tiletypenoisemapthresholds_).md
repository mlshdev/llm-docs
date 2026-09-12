> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/tilemapnodes(tileset:columns:rows:tilesize:from:tiletypenoisemapthresholds:)](https://developer.apple.com/documentation/spritekit/sktilemapnode/tilemapnodes(tileset:columns:rows:tilesize:from:tiletypenoisemapthresholds:))

# tileMapNodes(tileSet:columns:rows:tileSize:from:tileTypeNoiseMapThresholds:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a tile map node by allowing a [GKNoiseMap](../../gameplaykit/gknoisemap.md) to choose its tiles.

## Declaration

```swift
class func tileMapNodes(tileSet: SKTileSet, columns: Int, rows: Int, tileSize: CGSize, from noiseMap: GKNoiseMap, tileTypeNoiseMapThresholds thresholds: [NSNumber]) -> [SKTileMapNode]
```

## See Also

### Creating a Tile Map

- [init(tileSet:columns:rows:tileSize:)](init%28tileset_columns_rows_tilesize_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [init(tileSet:columns:rows:tileSize:fillWith:)](init%28tileset_columns_rows_tilesize_fillwith_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [init(tileSet:columns:rows:tileSize:tileGroupLayout:)](init%28tileset_columns_rows_tilesize_tilegrouplayout_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows. For a grid set type, the overall size, in points, of the node will be `numberOfColumns * tileSize.width` wide and `numberOfRows * tileSize.height` high.

# tileMapNodesWithTileSet:columns:rows:tileSize:fromNoiseMap:tileTypeNoiseMapThresholds: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a tile map node by allowing a [GKNoiseMap](../../gameplaykit/gknoisemap.md) to choose its tiles.

## Declaration

```objectivec
+ (NSArray<SKTileMapNode *> *) tileMapNodesWithTileSet:(SKTileSet *) tileSet columns:(NSUInteger) columns rows:(NSUInteger) rows tileSize:(CGSize) tileSize fromNoiseMap:(GKNoiseMap *) noiseMap tileTypeNoiseMapThresholds:(NSArray<NSNumber *> *) thresholds;
```

## See Also

### Creating a Tile Map

- [initWithTileSet:columns:rows:tileSize:](init%28tileset_columns_rows_tilesize_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [initWithTileSet:columns:rows:tileSize:fillWithTileGroup:](init%28tileset_columns_rows_tilesize_fillwith_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [initWithTileSet:columns:rows:tileSize:tileGroupLayout:](init%28tileset_columns_rows_tilesize_tilegrouplayout_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows. For a grid set type, the overall size, in points, of the node will be `numberOfColumns * tileSize.width` wide and `numberOfRows * tileSize.height` high.
- [tileMapNodeWithTileSet:columns:rows:tileSize:](tilemapnodewithtileset_columns_rows_tilesize_.md)
- [tileMapNodeWithTileSet:columns:rows:tileSize:fillWithTileGroup:](tilemapnodewithtileset_columns_rows_tilesize_fillwithtilegroup_.md)
- [tileMapNodeWithTileSet:columns:rows:tileSize:tileGroupLayout:](tilemapnodewithtileset_columns_rows_tilesize_tilegrouplayout_.md)
