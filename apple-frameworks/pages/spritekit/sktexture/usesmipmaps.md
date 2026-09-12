> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/usesmipmaps](https://developer.apple.com/documentation/spritekit/sktexture/usesmipmaps)

# usesMipmaps (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the texture attempts to generate mipmaps.

## Declaration

```swift
var usesMipmaps: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If you set this to [true](https://developer.apple.com/documentation/swift/true), Sprite Kit creates mipmaps for the texture when it prepares the texture for rendering. Mipmaps take up additional memory (usually one-third more) but can improve rendering quality and performance when the texture is reduced in size (such as when you reduce the scale of a sprite rendered using the texture).

You can only request mipmaps if both of the texture’s dimensions are a power of two.

## See Also

### Configuring a Texture’s Behavior for Scaling

- [filteringMode](filteringmode.md): The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.
- [SKTextureFilteringMode](../sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.

# usesMipmaps (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the texture attempts to generate mipmaps.

## Declaration

```objectivec
@property (nonatomic) BOOL usesMipmaps;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If you set this to [true](https://developer.apple.com/documentation/swift/true), Sprite Kit creates mipmaps for the texture when it prepares the texture for rendering. Mipmaps take up additional memory (usually one-third more) but can improve rendering quality and performance when the texture is reduced in size (such as when you reduce the scale of a sprite rendered using the texture).

You can only request mipmaps if both of the texture’s dimensions are a power of two.

## See Also

### Configuring a Texture’s Behavior for Scaling

- [filteringMode](filteringmode.md): The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.
- [SKTextureFilteringMode](../sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
