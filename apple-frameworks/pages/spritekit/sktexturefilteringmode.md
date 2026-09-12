> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexturefilteringmode](https://developer.apple.com/documentation/spritekit/sktexturefilteringmode)

# SKTextureFilteringMode (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Texture filtering modes to use when the texture is drawn in a size other than its native size.

## Declaration

```swift
enum SKTextureFilteringMode
```

## Topics

### Constants

- [SKTextureFilteringMode.nearest](sktexturefilteringmode/nearest.md): Each pixel is drawn using the nearest point in the texture. This mode is faster, but the results are often pixelated.
- [SKTextureFilteringMode.linear](sktexturefilteringmode/linear.md): Each pixel is drawn by using a linear filter of multiple texels in the texture. This mode produces higher quality results but may be slower.

### Initializers

- [init(rawValue:)](sktexturefilteringmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a Texture’s Behavior for Scaling

- [filteringMode](sktexture/filteringmode.md): The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.
- [usesMipmaps](sktexture/usesmipmaps.md): A Boolean value that indicates whether the texture attempts to generate mipmaps.

# SKTextureFilteringMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Texture filtering modes to use when the texture is drawn in a size other than its native size.

## Declaration

```objectivec
enum SKTextureFilteringMode : NSInteger;
```

## Topics

### Constants

- [SKTextureFilteringNearest](sktexturefilteringmode/nearest.md): Each pixel is drawn using the nearest point in the texture. This mode is faster, but the results are often pixelated.
- [SKTextureFilteringLinear](sktexturefilteringmode/linear.md): Each pixel is drawn by using a linear filter of multiple texels in the texture. This mode produces higher quality results but may be slower.

## See Also

### Configuring a Texture’s Behavior for Scaling

- [filteringMode](sktexture/filteringmode.md): The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.
- [usesMipmaps](sktexture/usesmipmaps.md): A Boolean value that indicates whether the texture attempts to generate mipmaps.
