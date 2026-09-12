> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/badge-2b38p](https://developer.apple.com/documentation/appkit/nstoolbaritem/badge-2b38p)

# badge

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.

## Declaration

```objectivec
@property (copy, nullable) NSItemBadge * badge;
```

## See Also

### Getting the item’s configuration

- [visible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [hidden](ishidden.md): Determines whether an item is visible in the toolbar.
- [bordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [navigational](isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [enabled](isenabled.md): A Boolean value that indicates whether the item is enabled.
- [NSItemBadge](../nsitembadge-c.class.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItemStyle](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItemVisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.
