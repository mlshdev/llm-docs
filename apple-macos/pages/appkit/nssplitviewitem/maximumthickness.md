> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/maximumthickness](https://developer.apple.com/documentation/appkit/nssplitviewitem/maximumthickness)

# maximumThickness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum thickness of the split view item.

## Declaration

```swift
var maximumThickness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This value affects the split view item’s width (for a vertical split view) or height (for a horizontal split view).

The default value of this property is [unspecifiedDimension](unspecifieddimension.md), which means the split view item doesn’t enforce a maximum size. However, layout constraints in the contained view hierarchy might specify a maximum size regardless.

## See Also

### Managing the item thickness

- [automaticMaximumThickness](automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [preferredThicknessFraction](preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [minimumThickness](minimumthickness.md): The minimum thickness of the split view item.
- [unspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.

# maximumThickness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum thickness of the split view item.

## Declaration

```objectivec
@property CGFloat maximumThickness;
```

<a id="Discussion"></a>

## Discussion

This value affects the split view item’s width (for a vertical split view) or height (for a horizontal split view).

The default value of this property is [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md), which means the split view item doesn’t enforce a maximum size. However, layout constraints in the contained view hierarchy might specify a maximum size regardless.

## See Also

### Managing the item thickness

- [automaticMaximumThickness](automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [preferredThicknessFraction](preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [minimumThickness](minimumthickness.md): The minimum thickness of the split view item.
- [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.
