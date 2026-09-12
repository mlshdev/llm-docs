> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum/preferresizingsplitviewwithfixedsiblings](https://developer.apple.com/documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum/preferresizingsplitviewwithfixedsiblings)

# NSSplitViewItem.CollapseBehavior.preferResizingSplitViewWithFixedSiblings (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.

## Declaration

```swift
case preferResizingSplitViewWithFixedSiblings
```

<a id="Discussion"></a>

## Discussion

The split view item breaks this preference in full-screen mode, and to keep the window fully onscreen during resizing.

## See Also

### Constants

- [NSSplitViewItem.CollapseBehavior.default](default.md): The item uses the default collapsing behavior.
- [NSSplitViewItem.CollapseBehavior.preferResizingSiblingsWithFixedSplitView](preferresizingsiblingswithfixedsplitview.md): The item’s preference is to resize the other split panes.
- [NSSplitViewItem.CollapseBehavior.useConstraints](useconstraints.md): The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.

# NSSplitViewItemCollapseBehaviorPreferResizingSplitViewWithFixedSiblings (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.

## Declaration

```objectivec
NSSplitViewItemCollapseBehaviorPreferResizingSplitViewWithFixedSiblings
```

<a id="Discussion"></a>

## Discussion

The split view item breaks this preference in full-screen mode, and to keep the window fully onscreen during resizing.

## See Also

### Constants

- [NSSplitViewItemCollapseBehaviorDefault](default.md): The item uses the default collapsing behavior.
- [NSSplitViewItemCollapseBehaviorPreferResizingSiblingsWithFixedSplitView](preferresizingsiblingswithfixedsplitview.md): The item’s preference is to resize the other split panes.
- [NSSplitViewItemCollapseBehaviorUseConstraints](useconstraints.md): The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.
