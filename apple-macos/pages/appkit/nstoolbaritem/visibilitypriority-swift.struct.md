> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct](https://developer.apple.com/documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct)

# NSToolbarItem.VisibilityPriority (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Constants that indicate which toolbar items to keep in the toolbar when space is limited.

## Declaration

```swift
struct VisibilityPriority
```

<a id="overview"></a>

## Overview

When a toolbar doesn’t have enough space to fit all its items, it pushes items into the overflow menu to make space. Use these constants to suggest a priority for individual toolbar items. The toolbar pushes low-priority items to the overflow menu first, followed by standard items and high-priority items. When two or more items share the same priority, the toolbar pushes the one closest to the trailing edge first.

## Topics

### Visibility priorities

- [standard](visibilitypriority-swift.struct/standard.md): The default visibility priority.
- [low](visibilitypriority-swift.struct/low.md): The lowest-priority for a toolbar item.
- [high](visibilitypriority-swift.struct/high.md): A high priority that makes it less likely for the toolbar item to move to the overflow item.
- [user](visibilitypriority-swift.struct/user.md): The highest priority for items in the toolbar.

### Initializers

- [init(\_:)](visibilitypriority-swift.struct/init%28__%29.md): Creates a visibility priority structure.
- [init(rawValue:)](visibilitypriority-swift.struct/init%28rawvalue_%29.md): Creates a visibility priority structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
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
- [NSToolbarItem.Style](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.

# NSToolbarItemVisibilityPriority (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS

Constants that indicate which toolbar items to keep in the toolbar when space is limited.

## Declaration

```objectivec
typedef NSInteger NSToolbarItemVisibilityPriority;
```

<a id="overview"></a>

## Overview

When a toolbar doesn’t have enough space to fit all its items, it pushes items into the overflow menu to make space. Use these constants to suggest a priority for individual toolbar items. The toolbar pushes low-priority items to the overflow menu first, followed by standard items and high-priority items. When two or more items share the same priority, the toolbar pushes the one closest to the trailing edge first.

## Topics

### Visibility priorities

- [NSToolbarItemVisibilityPriorityStandard](visibilitypriority-swift.struct/standard.md): The default visibility priority.
- [NSToolbarItemVisibilityPriorityLow](visibilitypriority-swift.struct/low.md): The lowest-priority for a toolbar item.
- [NSToolbarItemVisibilityPriorityHigh](visibilitypriority-swift.struct/high.md): A high priority that makes it less likely for the toolbar item to move to the overflow item.
- [NSToolbarItemVisibilityPriorityUser](visibilitypriority-swift.struct/user.md): The highest priority for items in the toolbar.

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
- [NSToolbarItemStyle](style-swift.enum.md)
- [visibilityPriority](visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [tag](tag.md): An integer tag you can use to identify the toolbar item.
