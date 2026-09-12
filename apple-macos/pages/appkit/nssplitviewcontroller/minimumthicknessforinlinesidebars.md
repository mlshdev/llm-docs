> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/minimumthicknessforinlinesidebars](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/minimumthicknessforinlinesidebars)

# minimumThicknessForInlineSidebars (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum thickness for a sidebar before it automatically collapses.

## Declaration

```swift
var minimumThicknessForInlineSidebars: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This value describes the minimum thickness in the primary axis of a split view—width if the split view’s [isVertical](../nssplitview/isvertical.md) value is [true](https://developer.apple.com/documentation/swift/true), height if it’s [false](https://developer.apple.com/documentation/swift/false). This value is the minimum thickness that sidebars can shrink to before they automatically collapse. When sidebars autocollapse in full-screen mode, they overlay the other split view items.

Autocollapsed sidebars automatically expand if their thickness increases to or above this minimum thickness threshold.

The default value of this property is [automaticDimension](automaticdimension.md), which determines the minimum thickness for sidebars using the effective minimum size of the split view item views from the layout constraints in the window. If the system can’t apply the constraints that establish the minimum size for all noncollapsed split panes, all sidebars automatically collapse. In full-screen mode, if a sidebar attempts to expand in this state, it overlays instead.

## See Also

### Managing Sidebars

- [toggleSidebar(\_:)](togglesidebar%28__%29.md): Collapses or expands the first sidebar in the split view controller using an animation.
- [automaticDimension](automaticdimension.md): The default value to apply to a dimension.

# minimumThicknessForInlineSidebars (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum thickness for a sidebar before it automatically collapses.

## Declaration

```objectivec
@property CGFloat minimumThicknessForInlineSidebars;
```

<a id="Discussion"></a>

## Discussion

This value describes the minimum thickness in the primary axis of a split view—width if the split view’s [vertical](../nssplitview/isvertical.md) value is [true](https://developer.apple.com/documentation/swift/true), height if it’s [false](https://developer.apple.com/documentation/swift/false). This value is the minimum thickness that sidebars can shrink to before they automatically collapse. When sidebars autocollapse in full-screen mode, they overlay the other split view items.

Autocollapsed sidebars automatically expand if their thickness increases to or above this minimum thickness threshold.

The default value of this property is [NSSplitViewControllerAutomaticDimension](automaticdimension.md), which determines the minimum thickness for sidebars using the effective minimum size of the split view item views from the layout constraints in the window. If the system can’t apply the constraints that establish the minimum size for all noncollapsed split panes, all sidebars automatically collapse. In full-screen mode, if a sidebar attempts to expand in this state, it overlays instead.

## See Also

### Managing Sidebars

- [toggleSidebar:](togglesidebar%28__%29.md): Collapses or expands the first sidebar in the split view controller using an animation.
- [NSSplitViewControllerAutomaticDimension](automaticdimension.md): The default value to apply to a dimension.
