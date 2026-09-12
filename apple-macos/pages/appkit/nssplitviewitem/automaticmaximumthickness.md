> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/automaticmaximumthickness](https://developer.apple.com/documentation/appkit/nssplitviewitem/automaticmaximumthickness)

# automaticMaximumThickness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum thickness of the split view item when it resizes due to automatic sizing.

## Declaration

```swift
var automaticMaximumThickness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Automatic sizing may happen when the split view item has a set [preferredThicknessFraction](preferredthicknessfraction.md) and the app enters full-screen mode, or when other split view items cause the item to change size. The user can still resize the item up to its absolute maximum size in [maximumThickness](maximumthickness.md) by dragging the divider.

The default value of this property is [unspecifiedDimension](unspecifieddimension.md), which means the split view item doesn’t enforce an automatic maximum size.

## See Also

### Managing the item thickness

- [preferredThicknessFraction](preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [minimumThickness](minimumthickness.md): The minimum thickness of the split view item.
- [maximumThickness](maximumthickness.md): The maximum thickness of the split view item.
- [unspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.

# automaticMaximumThickness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum thickness of the split view item when it resizes due to automatic sizing.

## Declaration

```objectivec
@property CGFloat automaticMaximumThickness;
```

<a id="Discussion"></a>

## Discussion

Automatic sizing may happen when the split view item has a set [preferredThicknessFraction](preferredthicknessfraction.md) and the app enters full-screen mode, or when other split view items cause the item to change size. The user can still resize the item up to its absolute maximum size in [maximumThickness](maximumthickness.md) by dragging the divider.

The default value of this property is [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md), which means the split view item doesn’t enforce an automatic maximum size.

## See Also

### Managing the item thickness

- [preferredThicknessFraction](preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [minimumThickness](minimumthickness.md): The minimum thickness of the split view item.
- [maximumThickness](maximumthickness.md): The maximum thickness of the split view item.
- [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.
