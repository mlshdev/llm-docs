> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/isspringloaded](https://developer.apple.com/documentation/appkit/nssplitviewitem/isspringloaded)

# isSpringLoaded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that determines whether the split view item can temporarily expand during a drag.

## Declaration

```swift
var isSpringLoaded: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the split view item can temporarily expand during a drag if the user hovers or force clicks its neighboring divider.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Collapsing and expanding the item

- [isCollapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItem.CollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

# springLoaded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that determines whether the split view item can temporarily expand during a drag.

## Declaration

```objectivec
@property (getter=isSpringLoaded) BOOL springLoaded;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the split view item can temporarily expand during a drag if the user hovers or force clicks its neighboring divider.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Collapsing and expanding the item

- [collapsed](iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItemCollapseBehavior](collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [canCollapseFromWindowResize](cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.
