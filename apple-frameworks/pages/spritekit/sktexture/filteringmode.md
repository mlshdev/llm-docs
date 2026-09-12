> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/filteringmode](https://developer.apple.com/documentation/spritekit/sktexture/filteringmode)

# filteringMode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.

## Declaration

```swift
var filteringMode: SKTextureFilteringMode { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in [SKTextureFilteringMode](../sktexturefilteringmode.md). The default value is [SKTextureFilteringMode.linear](../sktexturefilteringmode/linear.md) where each pixel is drawn by using a linear filter of multiple texels in the texture. The other option is [SKTextureFilteringMode.nearest](../sktexturefilteringmode/nearest.md) where each pixel is drawn using the nearest point in the texture.

The figure below shows the effect of different filtering modes. The rabbit texture (original on left) has been scaled up five times. Node 1 has been scaled using [SKTextureFilteringMode.nearest](../sktexturefilteringmode/nearest.md) and node 2 has been scaled with [SKTextureFilteringMode.linear](../sktexturefilteringmode/linear.md).

![The effect of filtering modes on a scaled texture](https://developer.apple.com/images/com.apple.spritekit/media-2668828@2x.png)

## See Also

### Configuring a Texture’s Behavior for Scaling

- [SKTextureFilteringMode](../sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [usesMipmaps](usesmipmaps.md): A Boolean value that indicates whether the texture attempts to generate mipmaps.

# filteringMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.

## Declaration

```objectivec
@property (nonatomic) SKTextureFilteringMode filteringMode;
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in [SKTextureFilteringMode](../sktexturefilteringmode.md). The default value is [SKTextureFilteringLinear](../sktexturefilteringmode/linear.md) where each pixel is drawn by using a linear filter of multiple texels in the texture. The other option is [SKTextureFilteringNearest](../sktexturefilteringmode/nearest.md) where each pixel is drawn using the nearest point in the texture.

The figure below shows the effect of different filtering modes. The rabbit texture (original on left) has been scaled up five times. Node 1 has been scaled using [SKTextureFilteringNearest](../sktexturefilteringmode/nearest.md) and node 2 has been scaled with [SKTextureFilteringLinear](../sktexturefilteringmode/linear.md).

![The effect of filtering modes on a scaled texture](https://developer.apple.com/images/com.apple.spritekit/media-2668828@2x.png)

## See Also

### Configuring a Texture’s Behavior for Scaling

- [SKTextureFilteringMode](../sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [usesMipmaps](usesmipmaps.md): A Boolean value that indicates whether the texture attempts to generate mipmaps.
