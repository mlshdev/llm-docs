> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(texture:size:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(texture:size:))

# init(texture:size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an existing texture object but with a specified size.

## Declaration

```swift
convenience init(texture: SKTexture?, size: CGSize)
```

## Parameters

- `texture`: A SpriteKit texture.
- `size`: The size of the sprite in points.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

The sprite is initialized using the texture, but the texture’s dimensions are not used. Instead, the size passed into the constructor method is used.

## See Also

### Creating a Sprite from a Texture

- [init(texture:)](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [init(texture:color:size:)](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [init(texture:normalMap:)](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.

# spriteNodeWithTexture:size: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an existing texture object but with a specified size.

## Declaration

```objectivec
+ (instancetype) spriteNodeWithTexture:(SKTexture *) texture size:(CGSize) size;
```

## Parameters

- `texture`: A SpriteKit texture.
- `size`: The size of the sprite in points.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

The sprite is initialized using the texture, but the texture’s dimensions are not used. Instead, the size passed into the constructor method is used.

## See Also

### Creating a Sprite from a Texture

- [initWithTexture:](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [initWithTexture:color:size:](init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [spriteNodeWithColor:size:](spritenodewithcolor_size_.md): Initializes a single-color sprite.
- [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:](spritenodewithtexture_.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithTexture:normalMap:](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.
