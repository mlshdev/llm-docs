> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihoverstyle/effect-12r83](https://developer.apple.com/documentation/uikit/uihoverstyle/effect-12r83)

# effect

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The effect to apply to the view with this style.

## Declaration

```objectivec
@property (nonatomic, strong) id<UIHoverEffect> effect;
```

<a id="Discussion"></a>

## Discussion

Use [UIHoverAutomaticEffect](../uihoverautomaticeffect-swift.struct.md) to apply a system-default effect to the view.

## See Also

### Specifying a hover effect

- [UIHoverAutomaticEffect](../uihoverautomaticeffect-c.class.md): A system-default hover effect that automatically selects the appropriate effect based on the view to which it applies.
- [UIHoverHighlightEffect](../uihoverhighlighteffect-c.class.md): An effect that applies a highlight to the view on hover.
- [UIHoverLiftEffect](../uihoverlifteffect-c.class.md): An effect that can visually lift the view on hover where appropriate.
- [UIHoverEffect](../uihovereffect-ukid.md): A hover effect that can apply to a view through a hover style.
