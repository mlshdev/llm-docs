> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/isnavigational](https://developer.apple.com/documentation/appkit/nstoolbaritem/isnavigational)

# isNavigational (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.

## Declaration

```swift
var isNavigational: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Mark a toolbar item as navigation if you use it to navigate around your content. When you set this property to [true](https://developer.apple.com/documentation/swift/true), the system can position navigation items outside of the normal list of items in the toolbar. For example, the back and forward buttons in Finder windows are navigational, and the system positions them at the leading edge of the window’s title area. Specify the initial order of the items using the [toolbarDefaultItemIdentifiers(\_:)](../nstoolbardelegate/toolbardefaultitemidentifiers%28__%29.md) method of the toolbar delegate object.

## See Also

### Getting the item’s configuration

- [isVisible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [isHidden](ishidden.md): Determines whether an item is visible in the toolbar.
- [isBordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](badge-17r3r.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-swift.struct.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItem.Style](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItem.VisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.

# navigational (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.

## Declaration

```objectivec
@property (getter=isNavigational) BOOL navigational;
```

<a id="Discussion"></a>

## Discussion

Mark a toolbar item as navigation if you use it to navigate around your content. When you set this property to [true](https://developer.apple.com/documentation/swift/true), the system can position navigation items outside of the normal list of items in the toolbar. For example, the back and forward buttons in Finder windows are navigational, and the system positions them at the leading edge of the window’s title area. Specify the initial order of the items using the [toolbarDefaultItemIdentifiers:](../nstoolbardelegate/toolbardefaultitemidentifiers%28__%29.md) method of the toolbar delegate object.

## See Also

### Getting the item’s configuration

- [visible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [hidden](ishidden.md): Determines whether an item is visible in the toolbar.
- [bordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [enabled](isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](badge-2b38p.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-c.class.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItemStyle](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItemVisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.
