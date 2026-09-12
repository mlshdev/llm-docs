> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/cancollapsefromwindowresize](https://developer.apple.com/documentation/appkit/nssplitviewitem/cancollapsefromwindowresize)

# canCollapseFromWindowResize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

## Declaration

```swift
var canCollapseFromWindowResize: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This can differ from [canCollapse](cancollapse.md) to allow divider collapsing but not windows resize collapsing, or vice versa.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true) for Sidebars and [false](https://developer.apple.com/documentation/swift/false) for Inspectors.

> **Note**

>  Setting `canCollapse` for sidebars resets this value to that new value.

## See Also

### Collapsing and expanding the item

- [isCollapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItem.CollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [isSpringLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.

# canCollapseFromWindowResize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

## Declaration

```objectivec
@property BOOL canCollapseFromWindowResize;
```

<a id="Discussion"></a>

## Discussion

This can differ from [canCollapse](cancollapse.md) to allow divider collapsing but not windows resize collapsing, or vice versa.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true) for Sidebars and [false](https://developer.apple.com/documentation/swift/false) for Inspectors.

> **Note**

>  Setting `canCollapse` for sidebars resets this value to that new value.

## See Also

### Collapsing and expanding the item

- [collapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItemCollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [springLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
