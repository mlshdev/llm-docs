> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktileset](https://developer.apple.com/documentation/spritekit/sktileset)

# SKTileSet (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A container for related tile groups.

## Declaration

```swift
class SKTileSet
```

<a id="overview"></a>

## Overview

An [SKTileSet](sktileset.md) object contains an array of tile groups that define which tile definitions are available for use in a tile map.

Tile sets also define the arrangement of tiles within a tile map. In addition to the default rectangular grid layout, tile sets can also define hexagonal and isometric layouts.

## Topics

### Creating a Tile Set from a File

- [init(named:)](sktileset/init%28named_%29.md): Initializes a tile set by searching the app bundle for an archived `.sks` file by name.
- [init(from:)](sktileset/init%28from_%29.md): Initializes a tile set from a URL to an archived .sks file.

### Creating a Tile Set Programmatically

Create a tile set by passing in the various groups that make up the set.

- [init(tileGroups:)](sktileset/init%28tilegroups_%29.md): Initializes a new tile set with an array of tile groups and rectangular grid layout.
- [init(tileGroups:tileSetType:)](sktileset/init%28tilegroups_tilesettype_%29.md): Initializes a new tile set with an array of tile groups and specified layout.

### Accessing or Reading a Tile Set’s Properties

- [defaultTileGroup](sktileset/defaulttilegroup.md): The tile set’s default tile group.
- [defaultTileSize](sktileset/defaulttilesize.md): The tile set’s default tile size.
- [name](sktileset/name.md): A name associated with the tile set.
- [tileGroups](sktileset/tilegroups.md): The tile set’s array of tile group objects.
- [type](sktileset/type.md): The tile set’s type.
- [SKTileSetType](sktilesettype.md): An enumeration defining how tiles are arranged.

### Initializers

- [init(coder:)](sktileset/init%28coder_%29.md)
- [init(fromURL:)](sktileset/init%28fromurl_%29.md)

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
- [SKTileGroup](sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.

# SKTileSet (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A container for related tile groups.

## Declaration

```objectivec
@interface SKTileSet : NSObject
```

<a id="overview"></a>

## Overview

An [SKTileSet](sktileset.md) object contains an array of tile groups that define which tile definitions are available for use in a tile map.

Tile sets also define the arrangement of tiles within a tile map. In addition to the default rectangular grid layout, tile sets can also define hexagonal and isometric layouts.

## Topics

### Creating a Tile Set from a File

- [tileSetNamed:](sktileset/init%28named_%29.md): Initializes a tile set by searching the app bundle for an archived `.sks` file by name.
- [tileSetFromURL:](sktileset/init%28from_%29.md): Initializes a tile set from a URL to an archived .sks file.

### Creating a Tile Set Programmatically

Create a tile set by passing in the various groups that make up the set.

- [initWithTileGroups:](sktileset/init%28tilegroups_%29.md): Initializes a new tile set with an array of tile groups and rectangular grid layout.
- [tileSetWithTileGroups:](sktileset/tilesetwithtilegroups_.md)
- [initWithTileGroups:tileSetType:](sktileset/init%28tilegroups_tilesettype_%29.md): Initializes a new tile set with an array of tile groups and specified layout.
- [tileSetWithTileGroups:tileSetType:](sktileset/tilesetwithtilegroups_tilesettype_.md)

### Accessing or Reading a Tile Set’s Properties

- [defaultTileGroup](sktileset/defaulttilegroup.md): The tile set’s default tile group.
- [defaultTileSize](sktileset/defaulttilesize.md): The tile set’s default tile size.
- [name](sktileset/name.md): A name associated with the tile set.
- [tileGroups](sktileset/tilegroups.md): The tile set’s array of tile group objects.
- [type](sktileset/type.md): The tile set’s type.
- [SKTileSetType](sktilesettype.md): An enumeration defining how tiles are arranged.

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
- [SKTileGroup](sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
