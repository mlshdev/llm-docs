> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilegrouprule](https://developer.apple.com/documentation/spritekit/sktilegrouprule)

# SKTileGroupRule (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Rules that describe how various tiles should be placed in a map.

## Declaration

```swift
class SKTileGroupRule
```

<a id="overview"></a>

## Overview

When a tile is filled in a tile map, the tile group rule defines how neighboring tiles are populated based on adjacency rules. A rule with multiple definitions uses the placement weights of the definitions to randomly select which to use.

## Topics

### Creating a Tile Group Rule

- [init(adjacency:tileDefinitions:)](sktilegrouprule/init%28adjacency_tiledefinitions_%29.md): Initializes a new tile group rule with adjacency rules and tile definitions.

### Accessing or Setting Tile Group Rule Properties

- [adjacency](sktilegrouprule/adjacency.md): The adjacency requirement for this rule.
- [SKTileAdjacencyMask](sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [name](sktilegrouprule/name.md): A name associated with the tile group rule.
- [tileDefinitions](sktilegrouprule/tiledefinitions.md): The tile definitions used for this rule.

### Initializers

- [init(coder:)](sktilegrouprule/init%28coder_%29.md)

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
- [SKTileSet](sktileset.md): A container for related tile groups.

# SKTileGroupRule (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Rules that describe how various tiles should be placed in a map.

## Declaration

```objectivec
@interface SKTileGroupRule : NSObject
```

<a id="overview"></a>

## Overview

When a tile is filled in a tile map, the tile group rule defines how neighboring tiles are populated based on adjacency rules. A rule with multiple definitions uses the placement weights of the definitions to randomly select which to use.

## Topics

### Creating a Tile Group Rule

- [initWithAdjacency:tileDefinitions:](sktilegrouprule/init%28adjacency_tiledefinitions_%29.md): Initializes a new tile group rule with adjacency rules and tile definitions.
- [tileGroupRuleWithAdjacency:tileDefinitions:](sktilegrouprule/tilegrouprulewithadjacency_tiledefinitions_.md)

### Accessing or Setting Tile Group Rule Properties

- [adjacency](sktilegrouprule/adjacency.md): The adjacency requirement for this rule.
- [SKTileAdjacencyMask](sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [name](sktilegrouprule/name.md): A name associated with the tile group rule.
- [tileDefinitions](sktilegrouprule/tiledefinitions.md): The tile definitions used for this rule.

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
- [SKTileSet](sktileset.md): A container for related tile groups.
