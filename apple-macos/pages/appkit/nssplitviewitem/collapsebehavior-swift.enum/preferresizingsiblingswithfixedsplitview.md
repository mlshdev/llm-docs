> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum/preferresizingsiblingswithfixedsplitview](https://developer.apple.com/documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum/preferresizingsiblingswithfixedsplitview)

# NSSplitViewItem.CollapseBehavior.preferResizingSiblingsWithFixedSplitView (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

The item’s preference is to resize the other split panes.

## Declaration

```swift
case preferResizingSiblingsWithFixedSplitView
```

<a id="Discussion"></a>

## Discussion

The split view item breaks this preference if it can’t fully expand without causing the other split panes to resize below their minimum size threshold.

## See Also

### Constants

- [NSSplitViewItem.CollapseBehavior.default](default.md): The item uses the default collapsing behavior.
- [NSSplitViewItem.CollapseBehavior.preferResizingSplitViewWithFixedSiblings](preferresizingsplitviewwithfixedsiblings.md): The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.
- [NSSplitViewItem.CollapseBehavior.useConstraints](useconstraints.md): The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.

# NSSplitViewItemCollapseBehaviorPreferResizingSiblingsWithFixedSplitView (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The item’s preference is to resize the other split panes.

## Declaration

```objectivec
NSSplitViewItemCollapseBehaviorPreferResizingSiblingsWithFixedSplitView
```

<a id="Discussion"></a>

## Discussion

The split view item breaks this preference if it can’t fully expand without causing the other split panes to resize below their minimum size threshold.

## See Also

### Constants

- [NSSplitViewItemCollapseBehaviorDefault](default.md): The item uses the default collapsing behavior.
- [NSSplitViewItemCollapseBehaviorPreferResizingSplitViewWithFixedSiblings](preferresizingsplitviewwithfixedsiblings.md): The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.
- [NSSplitViewItemCollapseBehaviorUseConstraints](useconstraints.md): The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.
