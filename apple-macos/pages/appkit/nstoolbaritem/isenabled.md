> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/isenabled](https://developer.apple.com/documentation/appkit/nstoolbaritem/isenabled)

# isEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the item is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the item is enabled. If the [autovalidates](autovalidates.md) property is true, changing the value of this property has no effect. Instead, the validation process enables and disables the toolbar item as appropriate.

## See Also

### Related Documentation

- [view](view.md): The custom view you use to draw the toolbar item.

### Getting the item’s configuration

- [isVisible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [isHidden](ishidden.md): Determines whether an item is visible in the toolbar.
- [isBordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [isNavigational](isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [badge](badge-17r3r.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-swift.struct.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItem.Style](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItem.VisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.

# enabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the item is enabled.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the item is enabled. If the [autovalidates](autovalidates.md) property is true, changing the value of this property has no effect. Instead, the validation process enables and disables the toolbar item as appropriate.

## See Also

### Related Documentation

- [view](view.md): The custom view you use to draw the toolbar item.

### Getting the item’s configuration

- [visible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [hidden](ishidden.md): Determines whether an item is visible in the toolbar.
- [bordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [navigational](isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [badge](badge-2b38p.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-c.class.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItemStyle](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItemVisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.
