> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum/useconstraints](https://developer.apple.com/documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum/useconstraints)

# NSSplitViewItem.CollapseBehavior.useConstraints (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.

## Declaration

```swift
case useConstraints
```

<a id="Discussion"></a>

## Discussion

This collapse behavior may result in a partial internal content resize and window resize, and doesn’t affect whether the window stays onscreen. You can use external constraints to adjust how the animation affects the item, its sibling items, and the window’s size and position.

## See Also

### Constants

- [NSSplitViewItem.CollapseBehavior.default](default.md): The item uses the default collapsing behavior.
- [NSSplitViewItem.CollapseBehavior.preferResizingSplitViewWithFixedSiblings](preferresizingsplitviewwithfixedsiblings.md): The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.
- [NSSplitViewItem.CollapseBehavior.preferResizingSiblingsWithFixedSplitView](preferresizingsiblingswithfixedsplitview.md): The item’s preference is to resize the other split panes.

# NSSplitViewItemCollapseBehaviorUseConstraints (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.

## Declaration

```objectivec
NSSplitViewItemCollapseBehaviorUseConstraints
```

<a id="Discussion"></a>

## Discussion

This collapse behavior may result in a partial internal content resize and window resize, and doesn’t affect whether the window stays onscreen. You can use external constraints to adjust how the animation affects the item, its sibling items, and the window’s size and position.

## See Also

### Constants

- [NSSplitViewItemCollapseBehaviorDefault](default.md): The item uses the default collapsing behavior.
- [NSSplitViewItemCollapseBehaviorPreferResizingSplitViewWithFixedSiblings](preferresizingsplitviewwithfixedsiblings.md): The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.
- [NSSplitViewItemCollapseBehaviorPreferResizingSiblingsWithFixedSplitView](preferresizingsiblingswithfixedsplitview.md): The item’s preference is to resize the other split panes.
