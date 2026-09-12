> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/collapsebehavior-swift.property](https://developer.apple.com/documentation/appkit/nssplitviewitem/collapsebehavior-swift.property)

# collapseBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The resizing behavior when the split view item toggles its collapsed state.

## Declaration

```swift
var collapseBehavior: NSSplitViewItem.CollapseBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSSplitViewItem.CollapseBehavior.default](collapsebehavior-swift.enum/default.md).

## See Also

### Collapsing and expanding the item

- [isCollapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [NSSplitViewItem.CollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [isSpringLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

# collapseBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The resizing behavior when the split view item toggles its collapsed state.

## Declaration

```objectivec
@property NSSplitViewItemCollapseBehavior collapseBehavior;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSSplitViewItemCollapseBehaviorDefault](collapsebehavior-swift.enum/default.md).

## See Also

### Collapsing and expanding the item

- [collapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [NSSplitViewItemCollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [springLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.
