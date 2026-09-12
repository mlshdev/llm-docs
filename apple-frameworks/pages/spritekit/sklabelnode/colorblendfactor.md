> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklabelnode/colorblendfactor](https://developer.apple.com/documentation/spritekit/sklabelnode/colorblendfactor)

# colorBlendFactor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A floating-point value that describes how the color is blended with the font color.

## Declaration

```swift
var colorBlendFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The value must be a number between `0.0` and `1.0`, inclusive. The default value (`0.0`) indicates that the color property is ignored and that the label’s font color should be used unmodified. For values greater than `0.0`, the font color is blended with the blend color, with the maximum value of 1.0 determining that the font color is 100% of the blend color.

## See Also

### Colorizing a Label

- [color](color.md): An alternative to the font color that can be used for animations.

# colorBlendFactor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A floating-point value that describes how the color is blended with the font color.

## Declaration

```objectivec
@property (nonatomic) CGFloat colorBlendFactor;
```

<a id="Discussion"></a>

## Discussion

The value must be a number between `0.0` and `1.0`, inclusive. The default value (`0.0`) indicates that the color property is ignored and that the label’s font color should be used unmodified. For values greater than `0.0`, the font color is blended with the blend color, with the maximum value of 1.0 determining that the font color is 100% of the blend color.

## See Also

### Colorizing a Label

- [color](color.md): An alternative to the font color that can be used for animations.
