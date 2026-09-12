> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(texture:normalmap:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(texture:normalmap:))

# init(texture:normalMap:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite with a normal map to simulate 3D lighting.

## Declaration

```swift
convenience init(texture: SKTexture?, normalMap: SKTexture?)
```

## Parameters

- `texture`: A SpriteKit texture used to draw the sprite.
- `normalMap`: A SpriteKit texture used to add lighting behavior to the sprite.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

## See Also

### Creating a Sprite from a Texture

- [init(texture:)](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [init(texture:color:size:)](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [init(texture:size:)](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [texture](texture.md): The texture used to draw the sprite.

# spriteNodeWithTexture:normalMap: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite with a normal map to simulate 3D lighting.

## Declaration

```objectivec
+ (instancetype) spriteNodeWithTexture:(SKTexture *) texture normalMap:(SKTexture *) normalMap;
```

## Parameters

- `texture`: A SpriteKit texture used to draw the sprite.
- `normalMap`: A SpriteKit texture used to add lighting behavior to the sprite.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

## See Also

### Creating a Sprite from a Texture

- [initWithTexture:](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [initWithTexture:color:size:](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [spriteNodeWithColor:size:](spritenodewithcolor_size_.md): Initializes a single-color sprite.
- [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:](spritenodewithtexture_.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithTexture:size:](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [texture](texture.md): The texture used to draw the sprite.
