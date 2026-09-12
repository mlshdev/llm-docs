> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilegroup](https://developer.apple.com/documentation/spritekit/sktilegroup)

# SKTileGroup (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of tiles that collectively define one type of terrain.

## Declaration

```swift
class SKTileGroup
```

<a id="overview"></a>

## Overview

An `SKTileGroup` object contains either the definition of a single tile or an array of [SKTileGroupRule](sktilegrouprule.md) objects that define adjacency rules.

You supply a tile group with either:

- The definition of a single tile that can be used to populate a tile map node with a single texture.
- An array of one or more tile group rules that allow for the automatic placement of textures dependent on their adjacency and the placement weights of their definitions. For example, a tile group may contain nine tile group rules containing the definitions of the central tile and eight edge tiles that, when placed adjacently, appear as a single object.

The preferred method to create tile groups is to use the editor tools in Xcode. However, to work with SpriteKit’s tile support programmatically, see the following articles.

## Topics

### Creating Tile Groups

- [Creating Tile Groups Programmatically](creating-tile-groups-programmatically.md): Paint tiles on a map by putting tile definitions in a group that you create in code.
- [init(tileDefinition:)](sktilegroup/init%28tiledefinition_%29.md): Creates and initializes a simple tile group with a single tile definition.
- [init(rules:)](sktilegroup/init%28rules_%29.md): Creates and initializes a tile group with the specified tile group rules.

### Accessing or Setting a Tile Group’s Properties

- [name](sktilegroup/name.md): The receiver’s name.
- [rules](sktilegroup/rules.md): An array of [SKTileGroupRule](sktilegrouprule.md) objects that the tile group uses to determine tile placement.

### Creating an Empty Tile Group

Create an empty tile group to erase tiles at a given location on a map.

- [empty()](sktilegroup/empty%28%29.md): Creates an empty tile that erases the existing tile at that location on a tile map.

### Initializers

- [init(coder:)](sktilegroup/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

## See Also

### Tiling

- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SKTileDefinition](sktiledefinition.md): A single tile that can be repeated in a tile map.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](sktileset.md): A container for related tile groups.

# SKTileGroup (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of tiles that collectively define one type of terrain.

## Declaration

```objectivec
@interface SKTileGroup : NSObject
```

<a id="overview"></a>

## Overview

An `SKTileGroup` object contains either the definition of a single tile or an array of [SKTileGroupRule](sktilegrouprule.md) objects that define adjacency rules.

You supply a tile group with either:

- The definition of a single tile that can be used to populate a tile map node with a single texture.
- An array of one or more tile group rules that allow for the automatic placement of textures dependent on their adjacency and the placement weights of their definitions. For example, a tile group may contain nine tile group rules containing the definitions of the central tile and eight edge tiles that, when placed adjacently, appear as a single object.

The preferred method to create tile groups is to use the editor tools in Xcode. However, to work with SpriteKit’s tile support programmatically, see the following articles.

## Topics

### Creating Tile Groups

- [Creating Tile Groups Programmatically](creating-tile-groups-programmatically.md): Paint tiles on a map by putting tile definitions in a group that you create in code.
- [initWithTileDefinition:](sktilegroup/init%28tiledefinition_%29.md): Creates and initializes a simple tile group with a single tile definition.
- [tileGroupWithTileDefinition:](sktilegroup/tilegroupwithtiledefinition_.md)
- [initWithRules:](sktilegroup/init%28rules_%29.md): Creates and initializes a tile group with the specified tile group rules.
- [tileGroupWithRules:](sktilegroup/tilegroupwithrules_.md)

### Accessing or Setting a Tile Group’s Properties

- [name](sktilegroup/name.md): The receiver’s name.
- [rules](sktilegroup/rules.md): An array of [SKTileGroupRule](sktilegrouprule.md) objects that the tile group uses to determine tile placement.

### Creating an Empty Tile Group

Create an empty tile group to erase tiles at a given location on a map.

- [emptyTileGroup](sktilegroup/empty%28%29.md): Creates an empty tile that erases the existing tile at that location on a tile map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Tiling

- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SKTileDefinition](sktiledefinition.md): A single tile that can be repeated in a tile map.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](sktileset.md): A container for related tile groups.
