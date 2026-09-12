> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/preferredthicknessfraction](https://developer.apple.com/documentation/appkit/nssplitviewitem/preferredthicknessfraction)

# preferredThicknessFraction (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The preferred thickness of the split view item relative to the split view.

## Declaration

```swift
var preferredThicknessFraction: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This value represents the proportion of the split view that you want the split view item to occupy on a scale of `0.0` to `1.0`. The system uses this value to adjust the thickness of the item in relation to other items when a user double-clicks a neighboring divider, and when the app enters full-screen mode.

The default value of this property is [unspecifiedDimension](unspecifieddimension.md), which means the item doesn’t resize when a user double-clicks the divider, and the system preserves the absolute size when the app enters full-screen mode.

## See Also

### Managing the item thickness

- [automaticMaximumThickness](automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [minimumThickness](minimumthickness.md): The minimum thickness of the split view item.
- [maximumThickness](maximumthickness.md): The maximum thickness of the split view item.
- [unspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.

# preferredThicknessFraction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The preferred thickness of the split view item relative to the split view.

## Declaration

```objectivec
@property CGFloat preferredThicknessFraction;
```

<a id="Discussion"></a>

## Discussion

This value represents the proportion of the split view that you want the split view item to occupy on a scale of `0.0` to `1.0`. The system uses this value to adjust the thickness of the item in relation to other items when a user double-clicks a neighboring divider, and when the app enters full-screen mode.

The default value of this property is [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md), which means the item doesn’t resize when a user double-clicks the divider, and the system preserves the absolute size when the app enters full-screen mode.

## See Also

### Managing the item thickness

- [automaticMaximumThickness](automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [minimumThickness](minimumthickness.md): The minimum thickness of the split view item.
- [maximumThickness](maximumthickness.md): The maximum thickness of the split view item.
- [NSSplitViewItemUnspecifiedDimension](unspecifieddimension.md): A constant that resets a dimension’s value.
