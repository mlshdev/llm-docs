> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/spritenodewithcolor:size:](https://developer.apple.com/documentation/spritekit/skspritenode/spritenodewithcolor:size:)

# spriteNodeWithColor:size:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a single-color sprite.

## Declaration

```objectivec
+ (instancetype) spriteNodeWithColor:(UIColor *) color size:(CGSize) size;
```

```objectivec
+ (instancetype) spriteNodeWithColor:(NSColor *) color size:(CGSize) size;
```

## Parameters

- `color`: The color for the resulting sprite.
- `size`: The size of the sprite in points.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

## See Also

### Creating a Sprite from a Texture

- [initWithTexture:](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [initWithTexture:color:size:](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:](spritenodewithtexture_.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithTexture:size:](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [spriteNodeWithTexture:normalMap:](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.
