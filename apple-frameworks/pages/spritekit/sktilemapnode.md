> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode](https://developer.apple.com/documentation/spritekit/sktilemapnode)

# SKTileMapNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A two-dimensional array of images.

## Declaration

```swift
class SKTileMapNode
```

<a id="overview"></a>

## Overview

`SKTileMapNode` does the work of laying out predefined tiles in a grid of any size. Typically, you configure 9-slice images (tile groups) in Xcode’s SpriteKit scene editor and paint the look of your tile map ahead of time versus configuring the tile map in code.

As with sprite nodes, you can layer tile maps with different blend modes or control it with actions and physics, for example, for the purpose of parallax scrolling. The rendered tile map can be post processed with an [SKShader](skshader.md) to add effects such as motion blur or atmospheric perspective.

> **Note**

>  A tile map can only render tile definitions that exist within the [SKTileSet](sktileset.md) you have provided it.

> **Important**

>  A tile map does not expose its tiles as nodes, and therefore you cannot assign individual tiles with a different [zPosition](sknode/zposition.md) or [physicsBody](sknode/physicsbody.md). Instead, layer tile map nodes on top of each other at the varying zPositions, and layer invisible `SKNodes` on top of the tile map node to attach physicsBodies to your tile map node.

To work with a tile map programmatically, you supply `SKTileMapNode` with a tile set that defines the tile definitions it can render. Then, fill each tile in the tile map with the [fill(with:)](sktilemapnode/fill%28with_%29.md) method and set individual tiles with [setTileGroup(\_:andTileDefinition:forColumn:row:)](sktilemapnode/settilegroup%28__andtiledefinition_forcolumn_row_%29.md).

## Topics

### Creating a Tile Map Programmatically

Create a tile map manually instead of loading it from an archived `.sks` file.

- [Creating a Tile Map Programmatically](creating-a-tile-map-programmatically.md)

### Controlling a Tile Map’s On-Screen Position Relative to its Origin

- [anchorPoint](sktilemapnode/anchorpoint.md): Defines the point in the tile map that corresponds to its [position](sknode/position.md).

### Reading or Manually Configuring the Tile Map’s Size

- [tileSize](sktilemapnode/tilesize.md): The size of each tile in points.
- [tileSet](sktilemapnode/tileset.md): The tile set being used by this tile map. The tile map object can only display tiles that exist in this set.
- [numberOfColumns](sktilemapnode/numberofcolumns.md): The number of columns in the tile map
- [numberOfRows](sktilemapnode/numberofrows.md): The number of rows in the tile map.

### Querying the Tile Map’s Properties

- [centerOfTile(atColumn:row:)](sktilemapnode/centeroftile%28atcolumn_row_%29.md)
- [tileColumnIndex(fromPosition:)](sktilemapnode/tilecolumnindex%28fromposition_%29.md)
- [tileDefinition(atColumn:row:)](sktilemapnode/tiledefinition%28atcolumn_row_%29.md)
- [tileGroup(atColumn:row:)](sktilemapnode/tilegroup%28atcolumn_row_%29.md)
- [tileRowIndex(fromPosition:)](sktilemapnode/tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](sktilemapnode/mapsize.md): The overall size of the tile map.

### Tinting a Tile Map

- [color](sktilemapnode/color.md): The base color for the tile map. The influence of the color over the tile map node’s textures is controlled by [colorBlendFactor](sktilemapnode/colorblendfactor.md).
- [colorBlendFactor](sktilemapnode/colorblendfactor.md): Controls the blending between the texture and the tile map object’s [color](sktilemapnode/color.md). Values are clamped between zero and one where zero has no color blending and one has the maximum color blending.

### Lighting a Tile Map

Configure how a sprite is lit when its near a light node.

- [lightingBitMask](sktilemapnode/lightingbitmask.md): A mask that defines how the tile map is lit by light nodes in the scene.

### Configuring How Alpha Values Blend the Sprite

Change how a sprite uses its alpha value, such as additive blending, that results in the sprite being brighter than it was before.

- [blendMode](sktilemapnode/blendmode.md): Defines the blend mode to use when compositing the tile map over other nodes.

### Working with Custom Shaders

- [shader](sktilemapnode/shader.md): Defines a shader which is applied to each tile of the tile map.
- [attributeValues](sktilemapnode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](sktilemapnode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](sktilemapnode/value%28forattributenamed_%29.md): The value of a shader attribute.

### Initializers

- [init(tileSet:columns:rows:tileSize:fillWithTileGroup:)](sktilemapnode/init%28tileset_columns_rows_tilesize_fillwithtilegroup_%29-58e45.md)
- [init(tileSet:columns:rows:tileSize:fillWithTileGroup:)](sktilemapnode/init%28tileset_columns_rows_tilesize_fillwithtilegroup_%29-86yc2.md)

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Tiling

- [SKTileDefinition](sktiledefinition.md): A single tile that can be repeated in a tile map.
- [SKTileGroup](sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](sktileset.md): A container for related tile groups.

# SKTileMapNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A two-dimensional array of images.

## Declaration

```objectivec
@interface SKTileMapNode : SKNode
```

<a id="overview"></a>

## Overview

`SKTileMapNode` does the work of laying out predefined tiles in a grid of any size. Typically, you configure 9-slice images (tile groups) in Xcode’s SpriteKit scene editor and paint the look of your tile map ahead of time versus configuring the tile map in code.

As with sprite nodes, you can layer tile maps with different blend modes or control it with actions and physics, for example, for the purpose of parallax scrolling. The rendered tile map can be post processed with an [SKShader](skshader.md) to add effects such as motion blur or atmospheric perspective.

> **Note**

>  A tile map can only render tile definitions that exist within the [SKTileSet](sktileset.md) you have provided it.

> **Important**

>  A tile map does not expose its tiles as nodes, and therefore you cannot assign individual tiles with a different [zPosition](sknode/zposition.md) or [physicsBody](sknode/physicsbody.md). Instead, layer tile map nodes on top of each other at the varying zPositions, and layer invisible `SKNodes` on top of the tile map node to attach physicsBodies to your tile map node.

To work with a tile map programmatically, you supply `SKTileMapNode` with a tile set that defines the tile definitions it can render. Then, fill each tile in the tile map with the [fillWithTileGroup:](sktilemapnode/fill%28with_%29.md) method and set individual tiles with [setTileGroup:andTileDefinition:forColumn:row:](sktilemapnode/settilegroup%28__andtiledefinition_forcolumn_row_%29.md).

## Topics

### Creating a Tile Map Programmatically

Create a tile map manually instead of loading it from an archived `.sks` file.

- [Creating a Tile Map Programmatically](creating-a-tile-map-programmatically.md)

### Controlling a Tile Map’s On-Screen Position Relative to its Origin

- [anchorPoint](sktilemapnode/anchorpoint.md): Defines the point in the tile map that corresponds to its [position](sknode/position.md).

### Reading or Manually Configuring the Tile Map’s Size

- [tileSize](sktilemapnode/tilesize.md): The size of each tile in points.
- [tileSet](sktilemapnode/tileset.md): The tile set being used by this tile map. The tile map object can only display tiles that exist in this set.
- [numberOfColumns](sktilemapnode/numberofcolumns.md): The number of columns in the tile map
- [numberOfRows](sktilemapnode/numberofrows.md): The number of rows in the tile map.

### Querying the Tile Map’s Properties

- [centerOfTileAtColumn:row:](sktilemapnode/centeroftile%28atcolumn_row_%29.md)
- [tileColumnIndexFromPosition:](sktilemapnode/tilecolumnindex%28fromposition_%29.md)
- [tileDefinitionAtColumn:row:](sktilemapnode/tiledefinition%28atcolumn_row_%29.md)
- [tileGroupAtColumn:row:](sktilemapnode/tilegroup%28atcolumn_row_%29.md)
- [tileRowIndexFromPosition:](sktilemapnode/tilerowindex%28fromposition_%29.md): Returns the tile map node object’s tile row index for the specified position in points.
- [mapSize](sktilemapnode/mapsize.md): The overall size of the tile map.

### Tinting a Tile Map

- [color](sktilemapnode/color.md): The base color for the tile map. The influence of the color over the tile map node’s textures is controlled by [colorBlendFactor](sktilemapnode/colorblendfactor.md).
- [colorBlendFactor](sktilemapnode/colorblendfactor.md): Controls the blending between the texture and the tile map object’s [color](sktilemapnode/color.md). Values are clamped between zero and one where zero has no color blending and one has the maximum color blending.

### Lighting a Tile Map

Configure how a sprite is lit when its near a light node.

- [lightingBitMask](sktilemapnode/lightingbitmask.md): A mask that defines how the tile map is lit by light nodes in the scene.

### Configuring How Alpha Values Blend the Sprite

Change how a sprite uses its alpha value, such as additive blending, that results in the sprite being brighter than it was before.

- [blendMode](sktilemapnode/blendmode.md): Defines the blend mode to use when compositing the tile map over other nodes.

### Working with Custom Shaders

- [shader](sktilemapnode/shader.md): Defines a shader which is applied to each tile of the tile map.
- [attributeValues](sktilemapnode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](sktilemapnode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](sktilemapnode/value%28forattributenamed_%29.md): The value of a shader attribute.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Tiling

- [SKTileDefinition](sktiledefinition.md): A single tile that can be repeated in a tile map.
- [SKTileGroup](sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](sktileset.md): A container for related tile groups.
