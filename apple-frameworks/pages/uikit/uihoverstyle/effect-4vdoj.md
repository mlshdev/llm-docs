> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihoverstyle/effect-4vdoj](https://developer.apple.com/documentation/uikit/uihoverstyle/effect-4vdoj)

# effect

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The effect to apply to the view with this style.

## Declaration

```swift
@MainActor @preconcurrency var effect: any UIHoverEffect { get set }
```

<a id="Discussion"></a>

## Discussion

Use [UIHoverAutomaticEffect](../uihoverautomaticeffect-swift.struct.md) to apply a system-default effect to the view.

## See Also

### Specifying a hover effect

- [UIHoverAutomaticEffect](../uihoverautomaticeffect-swift.struct.md): A system-default hover effect that automatically selects the appropriate effect based on the view to which it applies.
- [UIHoverHighlightEffect](../uihoverhighlighteffect-swift.struct.md): An effect that applies a highlight to the view on hover.
- [UIHoverLiftEffect](../uihoverlifteffect-swift.struct.md): An effect that can visually lift the view on hover where appropriate.
- [UIHoverEffect](../uihovereffect-40091.md): A hover effect that can apply to a view through a hover style.
