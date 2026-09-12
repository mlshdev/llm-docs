> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(texture:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(texture:))

# init(texture:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an existing texture object.

## Declaration

```swift
convenience init(texture: SKTexture?)
```

## Parameters

- `texture`: A SpriteKit texture.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

The [size](size.md) property of the sprite is set to the dimensions of the texture. The [color](color.md) property is set to white with an alpha of zero `(1.0,1.0,1.0,0.0)`.

## See Also

### Creating a Sprite from a Texture

- [init(texture:color:size:)](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [init(texture:size:)](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [init(texture:normalMap:)](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.

# initWithTexture: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an existing texture object.

## Declaration

```objectivec
- (instancetype) initWithTexture:(SKTexture *) texture;
```

## Parameters

- `texture`: A SpriteKit texture.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

The [size](size.md) property of the sprite is set to the dimensions of the texture. The [color](color.md) property is set to white with an alpha of zero `(1.0,1.0,1.0,0.0)`.

## See Also

### Creating a Sprite from a Texture

- [initWithTexture:color:size:](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [spriteNodeWithColor:size:](spritenodewithcolor_size_.md): Initializes a single-color sprite.
- [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:](spritenodewithtexture_.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithTexture:size:](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [spriteNodeWithTexture:normalMap:](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.
