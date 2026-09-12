> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/color](https://developer.apple.com/documentation/spritekit/sktilemapnode/color)

# color (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The base color for the tile map. The influence of the color over the tile map node’s textures is controlled by [colorBlendFactor](colorblendfactor.md).

## Declaration

```swift
var color: UIColor { get set }
```

```swift
var color: NSColor { get set }
```

## See Also

### Tinting a Tile Map

- [colorBlendFactor](colorblendfactor.md): Controls the blending between the texture and the tile map object’s [color](color.md). Values are clamped between zero and one where zero has no color blending and one has the maximum color blending.

# color (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The base color for the tile map. The influence of the color over the tile map node’s textures is controlled by [colorBlendFactor](colorblendfactor.md).

## Declaration

```objectivec
@property (nonatomic, retain) UIColor * color;
```

```objectivec
@property (nonatomic, retain) NSColor * color;
```

## See Also

### Tinting a Tile Map

- [colorBlendFactor](colorblendfactor.md): Controls the blending between the texture and the tile map object’s [color](color.md). Values are clamped between zero and one where zero has no color blending and one has the maximum color blending.
