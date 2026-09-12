> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/texture](https://developer.apple.com/documentation/spritekit/skspritenode/texture)

# texture (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The texture used to draw the sprite.

## Declaration

```swift
var texture: SKTexture? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `nil`, the sprite is drawn as a single-color rectangle using its [color](color.md) property. Otherwise, the texture is used to draw the sprite. The related properties affect how the texture is applied.

SpriteKit automatically generates a texture for sprites when they are initialized with [init(imageNamed:)](init%28imagenamed_%29.md).

## See Also

### Creating a Sprite from a Texture

- [init(texture:)](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [init(texture:color:size:)](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [init(texture:size:)](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [init(texture:normalMap:)](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.

# texture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The texture used to draw the sprite.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKTexture * texture;
```

<a id="Discussion"></a>

## Discussion

If the value is `nil`, the sprite is drawn as a single-color rectangle using its [color](color.md) property. Otherwise, the texture is used to draw the sprite. The related properties affect how the texture is applied.

SpriteKit automatically generates a texture for sprites when they are initialized with [initWithImageNamed:](init%28imagenamed_%29.md).

## See Also

### Creating a Sprite from a Texture

- [initWithTexture:](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [initWithTexture:color:size:](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [spriteNodeWithColor:size:](spritenodewithcolor_size_.md): Initializes a single-color sprite.
- [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:](spritenodewithtexture_.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithTexture:size:](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [spriteNodeWithTexture:normalMap:](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
