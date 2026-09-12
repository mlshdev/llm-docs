> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/colorblendfactor](https://developer.apple.com/documentation/spritekit/sktilemapnode/colorblendfactor)

# colorBlendFactor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Controls the blending between the texture and the tile map object’s [color](color.md). Values are clamped between zero and one where zero has no color blending and one has the maximum color blending.

## Declaration

```swift
var colorBlendFactor: CGFloat { get set }
```

## See Also

### Tinting a Tile Map

- [color](color.md): The base color for the tile map. The influence of the color over the tile map node’s textures is controlled by [colorBlendFactor](colorblendfactor.md).

# colorBlendFactor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Controls the blending between the texture and the tile map object’s [color](color.md). Values are clamped between zero and one where zero has no color blending and one has the maximum color blending.

## Declaration

```objectivec
@property (nonatomic) CGFloat colorBlendFactor;
```

## See Also

### Tinting a Tile Map

- [color](color.md): The base color for the tile map. The influence of the color over the tile map node’s textures is controlled by [colorBlendFactor](colorblendfactor.md).
