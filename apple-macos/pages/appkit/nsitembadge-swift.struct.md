> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsitembadge-swift.struct](https://developer.apple.com/documentation/appkit/nsitembadge-swift.struct)

# NSItemBadge

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS 26.0+

`NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.

## Declaration

```swift
struct NSItemBadge
```

<a id="overview"></a>

## Overview

This badge provides a way to display small visual indicators, such as counts and text labels, within a toolbar item. Badges can be used to highlight important information, such as unread notifications or status indicators.

## Topics

### Instance Properties

- [text](nsitembadge-swift.struct/text.md): The text to be displayed within the badge.

### Type Properties

- [indicator](nsitembadge-swift.struct/indicator.md): Creates a badge styled as an indicator. In this context, an indicator is simply a badge without any text.

### Type Methods

- [count(\_:)](nsitembadge-swift.struct/count%28__%29.md): Creates a badge displaying a localized numerical count.
- [text(\_:)](nsitembadge-swift.struct/text%28__%29.md): Creates a badge displaying a text.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Getting the item’s configuration

- [isVisible](nstoolbaritem/isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [isHidden](nstoolbaritem/ishidden.md): Determines whether an item is visible in the toolbar.
- [isBordered](nstoolbaritem/isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [isNavigational](nstoolbaritem/isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [isEnabled](nstoolbaritem/isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](nstoolbaritem/badge-17r3r.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [style](nstoolbaritem/style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItem.Style](nstoolbaritem/style-swift.enum.md)
- [visibilityPriority](nstoolbaritem/visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItem.VisibilityPriority](nstoolbaritem/visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](nstoolbaritem/tag.md): An integer tag you can use to identify the toolbar item.
