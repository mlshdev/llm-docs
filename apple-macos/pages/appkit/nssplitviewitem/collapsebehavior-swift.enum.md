> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum](https://developer.apple.com/documentation/appkit/nssplitviewitem/collapsebehavior-swift.enum)

# NSSplitViewItem.CollapseBehavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants that describe the split view item’s collapsing behavior.

## Declaration

```swift
enum CollapseBehavior
```

## Topics

### Constants

- [NSSplitViewItem.CollapseBehavior.default](collapsebehavior-swift.enum/default.md): The item uses the default collapsing behavior.
- [NSSplitViewItem.CollapseBehavior.preferResizingSplitViewWithFixedSiblings](collapsebehavior-swift.enum/preferresizingsplitviewwithfixedsiblings.md): The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.
- [NSSplitViewItem.CollapseBehavior.preferResizingSiblingsWithFixedSplitView](collapsebehavior-swift.enum/preferresizingsiblingswithfixedsplitview.md): The item’s preference is to resize the other split panes.
- [NSSplitViewItem.CollapseBehavior.useConstraints](collapsebehavior-swift.enum/useconstraints.md): The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.

### Initializers

- [init(rawValue:)](collapsebehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collapsing and expanding the item

- [isCollapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [isSpringLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

# NSSplitViewItemCollapseBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants that describe the split view item’s collapsing behavior.

## Declaration

```objectivec
enum NSSplitViewItemCollapseBehavior : NSInteger;
```

## Topics

### Constants

- [NSSplitViewItemCollapseBehaviorDefault](collapsebehavior-swift.enum/default.md): The item uses the default collapsing behavior.
- [NSSplitViewItemCollapseBehaviorPreferResizingSplitViewWithFixedSiblings](collapsebehavior-swift.enum/preferresizingsplitviewwithfixedsiblings.md): The item’s preference is to keep the other panes at their current size and position onscreen, potentially growing or shrinking the window in the direction to best preserve that.
- [NSSplitViewItemCollapseBehaviorPreferResizingSiblingsWithFixedSplitView](collapsebehavior-swift.enum/preferresizingsiblingswithfixedsplitview.md): The item’s preference is to resize the other split panes.
- [NSSplitViewItemCollapseBehaviorUseConstraints](collapsebehavior-swift.enum/useconstraints.md): The item collapses and expands using a constraint animation, with a constraint priority of the item’s holding priority.

## See Also

### Collapsing and expanding the item

- [collapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [springLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.
