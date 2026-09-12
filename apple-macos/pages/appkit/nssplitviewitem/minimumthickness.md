> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/minimumthickness](https://developer.apple.com/documentation/appkit/nssplitviewitem/minimumthickness)

# minimumThickness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum thickness of the split view item.

## Declaration

```swift
var minimumThickness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This value affects the split view item’s width (for a vertical split view) or height (for a horizontal split view).

The default value of this property is [unspecifiedDimension](unspecifieddimension.md), which means the split view item doesn’t enforce a minimum size. However, layout constraints in the contained view hierarchy might specify a minimum size regardless.

## See Also

### Managing the item thickness

- [automaticMaximumThickness](automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [preferredThicknessFraction](preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [maximumThickness](maximumthickness.md): The maximum thickness of the split view item.
- [unspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.

# minimumThickness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum thickness of the split view item.

## Declaration

```objectivec
@property CGFloat minimumThickness;
```

<a id="Discussion"></a>

## Discussion

This value affects the split view item’s width (for a vertical split view) or height (for a horizontal split view).

The default value of this property is [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md), which means the split view item doesn’t enforce a minimum size. However, layout constraints in the contained view hierarchy might specify a minimum size regardless.

## See Also

### Managing the item thickness

- [automaticMaximumThickness](automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [preferredThicknessFraction](preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [maximumThickness](maximumthickness.md): The maximum thickness of the split view item.
- [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.
