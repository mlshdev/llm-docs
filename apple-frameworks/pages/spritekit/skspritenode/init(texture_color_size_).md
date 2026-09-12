> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(texture:color:size:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(texture:color:size:))

# init(texture:color:size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite in color using an existing texture object.

## Declaration

```swift
init(texture: SKTexture?, color: UIColor, size: CGSize)
```

```swift
init(texture: SKTexture?, color: NSColor, size: CGSize)
```

## Parameters

- `texture`: A texture to apply to the sprite.
- `color`: The color for the new sprite.
- `size`: The size for the new sprite.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

To colorize your texture, you also need to set the [colorBlendFactor](colorblendfactor.md) property of the sprite.

## See Also

### Creating a Sprite from a Texture

- [init(texture:)](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [init(texture:size:)](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [init(texture:normalMap:)](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.

# initWithTexture:color:size: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite in color using an existing texture object.

## Declaration

```objectivec
- (instancetype) initWithTexture:(SKTexture *) texture color:(UIColor *) color size:(CGSize) size;
```

```objectivec
- (instancetype) initWithTexture:(SKTexture *) texture color:(NSColor *) color size:(CGSize) size;
```

## Parameters

- `texture`: A texture to apply to the sprite.
- `color`: The color for the new sprite.
- `size`: The size for the new sprite.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

To colorize your texture, you also need to set the [colorBlendFactor](colorblendfactor.md) property of the sprite.

## See Also

### Creating a Sprite from a Texture

- [initWithTexture:](init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithColor:size:](spritenodewithcolor_size_.md): Initializes a single-color sprite.
- [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:](spritenodewithtexture_.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithTexture:size:](init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [spriteNodeWithTexture:normalMap:](init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](texture.md): The texture used to draw the sprite.
