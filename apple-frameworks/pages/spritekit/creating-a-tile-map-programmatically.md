> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/creating-a-tile-map-programmatically](https://developer.apple.com/documentation/spritekit/creating-a-tile-map-programmatically)

# Creating a Tile Map Programmatically (Swift)

**Framework:** SpriteKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The collection of functions you use to create a tile map node programmatically.

> **Tip**

>  You can create a tile map node much quicker by using Xcode’s SpriteKit Scene Editor.

## Topics

### Creating a Tile Map

- [init(tileSet:columns:rows:tileSize:)](sktilemapnode/init%28tileset_columns_rows_tilesize_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [init(tileSet:columns:rows:tileSize:fillWith:)](sktilemapnode/init%28tileset_columns_rows_tilesize_fillwith_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [init(tileSet:columns:rows:tileSize:tileGroupLayout:)](sktilemapnode/init%28tileset_columns_rows_tilesize_tilegrouplayout_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows. For a grid set type, the overall size, in points, of the node will be `numberOfColumns * tileSize.width` wide and `numberOfRows * tileSize.height` high.
- [tileMapNodes(tileSet:columns:rows:tileSize:from:tileTypeNoiseMapThresholds:)](sktilemapnode/tilemapnodes%28tileset_columns_rows_tilesize_from_tiletypenoisemapthresholds_%29.md): Creates a tile map node by allowing a [GKNoiseMap](../gameplaykit/gknoisemap.md) to choose its tiles.

### Defining a Tile Map’s Contents

- [enableAutomapping](sktilemapnode/enableautomapping.md): When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.
- [fill(with:)](sktilemapnode/fill%28with_%29.md): When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.
- [setTileGroup(\_:andTileDefinition:forColumn:row:)](sktilemapnode/settilegroup%28__andtiledefinition_forcolumn_row_%29.md): Set the tile group and tile definition at the specified tile index.
- [setTileGroup(\_:forColumn:row:)](sktilemapnode/settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.

# Creating a Tile Map Programmatically (Objective-C)

**Framework:** SpriteKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The collection of functions you use to create a tile map node programmatically.

> **Tip**

>  You can create a tile map node much quicker by using Xcode’s SpriteKit Scene Editor.

## Topics

### Creating a Tile Map

- [initWithTileSet:columns:rows:tileSize:](sktilemapnode/init%28tileset_columns_rows_tilesize_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [initWithTileSet:columns:rows:tileSize:fillWithTileGroup:](sktilemapnode/init%28tileset_columns_rows_tilesize_fillwith_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows.
- [initWithTileSet:columns:rows:tileSize:tileGroupLayout:](sktilemapnode/init%28tileset_columns_rows_tilesize_tilegrouplayout_%29.md): Creates and initializes a tile map node using the provided tile set with a specified number of columns and rows. For a grid set type, the overall size, in points, of the node will be `numberOfColumns * tileSize.width` wide and `numberOfRows * tileSize.height` high.
- [tileMapNodesWithTileSet:columns:rows:tileSize:fromNoiseMap:tileTypeNoiseMapThresholds:](sktilemapnode/tilemapnodes%28tileset_columns_rows_tilesize_from_tiletypenoisemapthresholds_%29.md): Creates a tile map node by allowing a [GKNoiseMap](../gameplaykit/gknoisemap.md) to choose its tiles.
- [tileMapNodeWithTileSet:columns:rows:tileSize:](sktilemapnode/tilemapnodewithtileset_columns_rows_tilesize_.md)
- [tileMapNodeWithTileSet:columns:rows:tileSize:fillWithTileGroup:](sktilemapnode/tilemapnodewithtileset_columns_rows_tilesize_fillwithtilegroup_.md)
- [tileMapNodeWithTileSet:columns:rows:tileSize:tileGroupLayout:](sktilemapnode/tilemapnodewithtileset_columns_rows_tilesize_tilegrouplayout_.md)

### Defining a Tile Map’s Contents

- [enableAutomapping](sktilemapnode/enableautomapping.md): When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.
- [fillWithTileGroup:](sktilemapnode/fill%28with_%29.md): When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.
- [setTileGroup:andTileDefinition:forColumn:row:](sktilemapnode/settilegroup%28__andtiledefinition_forcolumn_row_%29.md): Set the tile group and tile definition at the specified tile index.
- [setTileGroup:forColumn:row:](sktilemapnode/settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.
