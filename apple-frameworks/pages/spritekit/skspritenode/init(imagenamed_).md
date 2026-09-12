> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(imagenamed:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(imagenamed:))

# init(imageNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an image file.

## Declaration

```swift
convenience init(imageNamed name: String)
```

## Parameters

- `name`: The name of an image file stored in the app bundle.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

## Mentioned In

- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)

<a id="Discussion"></a>

## Discussion

This method creates a new texture object from the image file and assigns that texture to the [texture](texture.md) property, the [normalTexture](normaltexture.md) properties is set to `nil`. The [size](size.md) property of the sprite is set to the dimensions of the image. The [color](color.md) property is set to white with an alpha of zero `(1.0,1.0,1.0,0.0)`.

## See Also

### Creating a Sprite from an Image Filename

- [Getting Started with Sprite Nodes](../getting-started-with-sprite-nodes.md): Learn the basics about using images, also known as sprites, with SpriteKit.
- [init(imageNamed:normalMapped:)](init%28imagenamed_normalmapped_%29.md): Initializes a textured sprite using an image file, optionally adding a normal map to simulate 3D lighting.

# initWithImageNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an image file.

## Declaration

```objectivec
- (instancetype) initWithImageNamed:(NSString *) name;
```

## Parameters

- `name`: The name of an image file stored in the app bundle.

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

## Mentioned In

- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)

<a id="Discussion"></a>

## Discussion

This method creates a new texture object from the image file and assigns that texture to the [texture](texture.md) property, the [normalTexture](normaltexture.md) properties is set to `nil`. The [size](size.md) property of the sprite is set to the dimensions of the image. The [color](color.md) property is set to white with an alpha of zero `(1.0,1.0,1.0,0.0)`.

## See Also

### Creating a Sprite from an Image Filename

- [Getting Started with Sprite Nodes](../getting-started-with-sprite-nodes.md): Learn the basics about using images, also known as sprites, with SpriteKit.
- [spriteNodeWithImageNamed:normalMapped:](init%28imagenamed_normalmapped_%29.md): Initializes a textured sprite using an image file, optionally adding a normal map to simulate 3D lighting.
