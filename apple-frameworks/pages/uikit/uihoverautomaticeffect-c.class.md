> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihoverautomaticeffect-c.class](https://developer.apple.com/documentation/uikit/uihoverautomaticeffect-c.class)

# UIHoverAutomaticEffect

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A system-default hover effect that automatically selects the appropriate effect based on the view to which it applies.

## Declaration

```objectivec
@interface UIHoverAutomaticEffect : NSObject
```

## Topics

### Creating an automatic hover effect

- [effect](uihoverautomaticeffect-c.class/effect.md): Provides a convenience initializer to create a system-default hover effect that automatically selects the appropriate effect based on the view to which it applies.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIHoverEffect](uihovereffect-ukid.md)

## See Also

### Specifying a hover effect

- [effect](uihoverstyle/effect-12r83.md): The effect to apply to the view with this style.
- [UIHoverHighlightEffect](uihoverhighlighteffect-c.class.md): An effect that applies a highlight to the view on hover.
- [UIHoverLiftEffect](uihoverlifteffect-c.class.md): An effect that can visually lift the view on hover where appropriate.
- [UIHoverEffect](uihovereffect-ukid.md): A hover effect that can apply to a view through a hover style.
