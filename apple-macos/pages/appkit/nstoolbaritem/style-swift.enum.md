> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/style-swift.enum](https://developer.apple.com/documentation/appkit/nstoolbaritem/style-swift.enum)

# NSToolbarItem.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
enum Style
```

## Topics

### Enumeration Cases

- [NSToolbarItem.Style.plain](style-swift.enum/plain.md)
- [NSToolbarItem.Style.prominent](style-swift.enum/prominent.md)

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the item’s configuration

- [isVisible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [isHidden](ishidden.md): Determines whether an item is visible in the toolbar.
- [isBordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [isNavigational](isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](badge-17r3r.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-swift.struct.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItem.VisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.

# NSToolbarItemStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```objectivec
enum NSToolbarItemStyle : NSInteger;
```

## Topics

### Enumeration Cases

- [NSToolbarItemStylePlain](style-swift.enum/plain.md)
- [NSToolbarItemStyleProminent](style-swift.enum/prominent.md)

## See Also

### Getting the item’s configuration

- [visible](isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [hidden](ishidden.md): Determines whether an item is visible in the toolbar.
- [bordered](isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [navigational](isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [enabled](isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](badge-2b38p.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](../nsitembadge-c.class.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItemVisibilityPriority](visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.
