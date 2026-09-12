> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition](https://developer.apple.com/documentation/spritekit/sktiledefinition)

# SKTileDefinition (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A single tile that can be repeated in a tile map.

## Declaration

```swift
class SKTileDefinition
```

<a id="overview"></a>

## Overview

To define the visual representation of a single tile, you create an [SKTileDefinition](sktiledefinition.md) object with texture and size information. Tile definitions support separate normal textures, for simulating 3D lighting, and arrays of textures for animation with speed controlled by the [timePerFrame](sktiledefinition/timeperframe.md) property. Textures can be rotated in 90˚ increments or flipped either vertically or horizontally.

Once a tile definition has been created, you encapsulate it in a [SKTileGroup](sktilegroup.md) which is added to a [SKTileSet](sktileset.md) which, in turn, is displayed in the scene with a [SKTileMapNode](sktilemapnode.md).

## Topics

### Creating a Tile with a Texture

- [init(texture:)](sktiledefinition/init%28texture_%29.md): Initializes a new tile definition with a single texture.

### Creating a Tile with a Normal Texture

Create a tile with an additional texture that’s used for lighting effects.

- [init(texture:normalTexture:size:)](sktiledefinition/init%28texture_normaltexture_size_%29.md): Initializes a new tile definition with a single texture and separate normal texture for simulating 3D lighting.

### Creating a Tile with a Size

- [init(texture:size:)](sktiledefinition/init%28texture_size_%29.md): Initializes a new tile definition of a specified size with a single texture.

### Creating an Animated Tile

Create an animated Tile by passing in an array of textures (animation frames) and their respective times per frame.

- [init(textures:normalTextures:size:timePerFrame:)](sktiledefinition/init%28textures_normaltextures_size_timeperframe_%29.md): Initializes a new tile definition with arrays of textures and normal textures for animation.
- [init(textures:size:timePerFrame:)](sktiledefinition/init%28textures_size_timeperframe_%29.md): Initializes a new tile definition with an array of textures for animation.

### Flipping a Tile Vertically or Horizontally

- [flipHorizontally](sktiledefinition/fliphorizontally.md): A Boolean that flips the definition’s image vertically.
- [flipVertically](sktiledefinition/flipvertically.md): A Boolean that flips the definition’s image horizontally.

### Rotating a Tile

- [rotation](sktiledefinition/rotation.md): The rotation of the tile definition in 90˚ increments.
- [SKTileDefinitionRotation](sktiledefinitionrotation.md): The allowed rotations for a given tile.

### Configure Animated Tile Properties

- [textures](sktiledefinition/textures.md): An array of [SKTexture](sktexture.md) objects that defines the tile definition object’s content.
- [normalTextures](sktiledefinition/normaltextures.md): An array of [SKTexture](sktexture.md) objects used to generate the normals for the tile to simulate 3D lighting.
- [timePerFrame](sktiledefinition/timeperframe.md): The duration, in seconds, that each texture in the textures array is displayed before switching to the next texture in the sequence.

### Reading or Adding a Tile’s Custom Data

- [userData](sktiledefinition/userdata.md): A dictionary containing arbitrary data.

### Reading or Adjusting a Tile’s Instance Properties

- [name](sktiledefinition/name.md): A name associated with the tile definition.
- [placementWeight](sktiledefinition/placementweight.md): The placement weight of the tile definition.
- [size](sktiledefinition/size.md): The size of the tile definition in points.

### Initializers

- [init(coder:)](sktiledefinition/init%28coder_%29.md)

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
- [SKTileGroup](sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](sktileset.md): A container for related tile groups.

# SKTileDefinition (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A single tile that can be repeated in a tile map.

## Declaration

```objectivec
@interface SKTileDefinition : NSObject
```

<a id="overview"></a>

## Overview

To define the visual representation of a single tile, you create an [SKTileDefinition](sktiledefinition.md) object with texture and size information. Tile definitions support separate normal textures, for simulating 3D lighting, and arrays of textures for animation with speed controlled by the [timePerFrame](sktiledefinition/timeperframe.md) property. Textures can be rotated in 90˚ increments or flipped either vertically or horizontally.

Once a tile definition has been created, you encapsulate it in a [SKTileGroup](sktilegroup.md) which is added to a [SKTileSet](sktileset.md) which, in turn, is displayed in the scene with a [SKTileMapNode](sktilemapnode.md).

## Topics

### Creating a Tile with a Texture

- [initWithTexture:](sktiledefinition/init%28texture_%29.md): Initializes a new tile definition with a single texture.
- [tileDefinitionWithTexture:](sktiledefinition/tiledefinitionwithtexture_.md)

### Creating a Tile with a Normal Texture

Create a tile with an additional texture that’s used for lighting effects.

- [initWithTexture:normalTexture:size:](sktiledefinition/init%28texture_normaltexture_size_%29.md): Initializes a new tile definition with a single texture and separate normal texture for simulating 3D lighting.
- [tileDefinitionWithTexture:normalTexture:size:](sktiledefinition/tiledefinitionwithtexture_normaltexture_size_.md)

### Creating a Tile with a Size

- [initWithTexture:size:](sktiledefinition/init%28texture_size_%29.md): Initializes a new tile definition of a specified size with a single texture.
- [tileDefinitionWithTexture:size:](sktiledefinition/tiledefinitionwithtexture_size_.md)

### Creating an Animated Tile

Create an animated Tile by passing in an array of textures (animation frames) and their respective times per frame.

- [initWithTextures:normalTextures:size:timePerFrame:](sktiledefinition/init%28textures_normaltextures_size_timeperframe_%29.md): Initializes a new tile definition with arrays of textures and normal textures for animation.
- [tileDefinitionWithTextures:normalTextures:size:timePerFrame:](sktiledefinition/tiledefinitionwithtextures_normaltextures_size_timeperframe_.md)
- [initWithTextures:size:timePerFrame:](sktiledefinition/init%28textures_size_timeperframe_%29.md): Initializes a new tile definition with an array of textures for animation.
- [tileDefinitionWithTextures:size:timePerFrame:](sktiledefinition/tiledefinitionwithtextures_size_timeperframe_.md)

### Flipping a Tile Vertically or Horizontally

- [flipHorizontally](sktiledefinition/fliphorizontally.md): A Boolean that flips the definition’s image vertically.
- [flipVertically](sktiledefinition/flipvertically.md): A Boolean that flips the definition’s image horizontally.

### Rotating a Tile

- [rotation](sktiledefinition/rotation.md): The rotation of the tile definition in 90˚ increments.
- [SKTileDefinitionRotation](sktiledefinitionrotation.md): The allowed rotations for a given tile.

### Configure Animated Tile Properties

- [textures](sktiledefinition/textures.md): An array of [SKTexture](sktexture.md) objects that defines the tile definition object’s content.
- [normalTextures](sktiledefinition/normaltextures.md): An array of [SKTexture](sktexture.md) objects used to generate the normals for the tile to simulate 3D lighting.
- [timePerFrame](sktiledefinition/timeperframe.md): The duration, in seconds, that each texture in the textures array is displayed before switching to the next texture in the sequence.

### Reading or Adding a Tile’s Custom Data

- [userData](sktiledefinition/userdata.md): A dictionary containing arbitrary data.

### Reading or Adjusting a Tile’s Instance Properties

- [name](sktiledefinition/name.md): A name associated with the tile definition.
- [placementWeight](sktiledefinition/placementweight.md): The placement weight of the tile definition.
- [size](sktiledefinition/size.md): The size of the tile definition in points.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Tiling

- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SKTileGroup](sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](sktileset.md): A container for related tile groups.
