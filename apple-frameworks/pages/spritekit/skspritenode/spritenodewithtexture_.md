> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/spritenodewithtexture:](https://developer.apple.com/documentation/spritekit/skspritenode/spritenodewithtexture:)

# spriteNodeWithTexture:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an existing texture object.

## Declaration

```objectivec
+ (instancetype) spriteNodeWithTexture:(SKTexture *) texture;
```

## Parameters

- `texture`: A SpriteKit texture.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

## See Also

### Creating a Sprite from a Texture

- [initWithTexture:](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [initWithTexture:color:size:](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [spriteNodeWithColor:size:](spritenodewithcolor_size_.md): Initializes a single-color sprite.
- [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:size:](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [spriteNodeWithTexture:normalMap:](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.
