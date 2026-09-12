> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/init(imagenamed:)](https://developer.apple.com/documentation/spritekit/sktexture/init(imagenamed:))

# init(imageNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Create a new texture object from an image file stored in the app bundle.

## Declaration

```swift
convenience init(imageNamed name: String)
```

## Parameters

- `name`: The name of the image file.

<a id="return-value"></a>

## Return Value

A new texture object.

## Mentioned In

- [About Texture Atlases](../about-texture-atlases.md)
- [Loading and Using Textures](../loading-and-using-textures.md)

<a id="Discussion"></a>

## Discussion

The new texture object is initialized with the name of the image file and then control returns immediately to your game. Sprite Kit loads and prepares the texture data when it is needed by your game.

When loading the texture data, Sprite Kit searches the app bundle for an image file with the specified filename. If a matching image file cannot be found, Sprite Kit searches for the texture in any texture atlases stored in the app bundle. If the specified image does not exist anywhere in the bundle, Sprite Kit creates a placeholder texture image.

# textureWithImageNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Create a new texture object from an image file stored in the app bundle.

## Declaration

```objectivec
+ (instancetype) textureWithImageNamed:(NSString *) name;
```

## Parameters

- `name`: The name of the image file.

<a id="return-value"></a>

## Return Value

A new texture object.

## Mentioned In

- [About Texture Atlases](../about-texture-atlases.md)
- [Loading and Using Textures](../loading-and-using-textures.md)

<a id="Discussion"></a>

## Discussion

The new texture object is initialized with the name of the image file and then control returns immediately to your game. Sprite Kit loads and prepares the texture data when it is needed by your game.

When loading the texture data, Sprite Kit searches the app bundle for an image file with the specified filename. If a matching image file cannot be found, Sprite Kit searches for the texture in any texture atlases stored in the app bundle. If the specified image does not exist anywhere in the bundle, Sprite Kit creates a placeholder texture image.
