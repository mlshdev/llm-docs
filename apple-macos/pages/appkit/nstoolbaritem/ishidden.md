> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/ishidden](https://developer.apple.com/documentation/appkit/nstoolbaritem/ishidden)

# isHidden (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Determines whether an item is visible in the toolbar.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The item will still be visible in the customization panel. Because hidden items may be visible during user customization, use the `visible` property to determine if an item is currently displayed. Note that even hidden toolbar items are sync’d to other toolbars with a shared identifier, but its `hidden` state can be unique to each instance. Use this property to show a toolbar item in one toolbar instance but not another.

## See Also

### Getting the item’s configuration

- [isVisible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [isBordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [isNavigational](isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](badge-17r3r.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-swift.struct.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItem.Style](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItem.VisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.

# hidden (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Determines whether an item is visible in the toolbar.

## Declaration

```objectivec
@property (getter=isHidden) BOOL hidden;
```

<a id="discussion"></a>

## Discussion

The item will still be visible in the customization panel. Because hidden items may be visible during user customization, use the `visible` property to determine if an item is currently displayed. Note that even hidden toolbar items are sync’d to other toolbars with a shared identifier, but its `hidden` state can be unique to each instance. Use this property to show a toolbar item in one toolbar instance but not another.

## See Also

### Getting the item’s configuration

- [visible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [bordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [navigational](isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [enabled](isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](badge-2b38p.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-c.class.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItemStyle](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItemVisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.
