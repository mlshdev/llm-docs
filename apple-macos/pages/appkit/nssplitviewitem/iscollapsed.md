> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/iscollapsed](https://developer.apple.com/documentation/appkit/nssplitviewitem/iscollapsed)

# isCollapsed (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.

## Declaration

```swift
var isCollapsed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Collapsing and expanding the item

- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItem.CollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [isSpringLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

# collapsed (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.

## Declaration

```objectivec
@property (getter=isCollapsed) BOOL collapsed;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Collapsing and expanding the item

- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItemCollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [springLoaded](isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.
