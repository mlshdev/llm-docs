> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenutoolbaritem](https://developer.apple.com/documentation/appkit/nsmenutoolbaritem)

# NSMenuToolbarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

A control that presents a menu in a window’s toolbar.

## Declaration

```swift
class NSMenuToolbarItem
```

<a id="overview"></a>

## Overview

If you set an action on an [NSMenuToolbarItem](nsmenutoolbaritem.md) control item, the user invokes the action when clicking on the item through pressing and holding to display the menu. If you set an action on the item and [showsIndicator](nsmenutoolbaritem/showsindicator.md) to [true](https://developer.apple.com/documentation/swift/true), the system displays the indicator as a separate segment so the user can invoke the menu with a click on that segment.

If you don’t set an action on the [NSMenuToolbarItem](nsmenutoolbaritem.md), a simple click invokes the menu, and the indicator is purely decorative.

## Topics

### Configuring a menu toolbar item

- [showsIndicator](nsmenutoolbaritem/showsindicator.md): A Boolean value that determines whether the toolbar item displays an indicator of additional functionality.
- [menu](nsmenutoolbaritem/menu.md): The menu presented from the toolbar item.
- [itemMenu](nsmenutoolbaritem/itemmenu.md)

## Relationships

### Inherits From

- [NSToolbarItem](nstoolbaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSValidatedUserInterfaceItem](nsvalidateduserinterfaceitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Items

- [NSToolbarItem](nstoolbaritem.md): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroup](nstoolbaritemgroup.md): A group of subitems in a toolbar item.
- [NSToolbarItemGroup.ControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [NSToolbarItemGroup.SelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.

# NSMenuToolbarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

A control that presents a menu in a window’s toolbar.

## Declaration

```objectivec
@interface NSMenuToolbarItem : NSToolbarItem
```

<a id="overview"></a>

## Overview

If you set an action on an [NSMenuToolbarItem](nsmenutoolbaritem.md) control item, the user invokes the action when clicking on the item through pressing and holding to display the menu. If you set an action on the item and [showsIndicator](nsmenutoolbaritem/showsindicator.md) to [true](https://developer.apple.com/documentation/swift/true), the system displays the indicator as a separate segment so the user can invoke the menu with a click on that segment.

If you don’t set an action on the [NSMenuToolbarItem](nsmenutoolbaritem.md), a simple click invokes the menu, and the indicator is purely decorative.

## Topics

### Configuring a menu toolbar item

- [showsIndicator](nsmenutoolbaritem/showsindicator.md): A Boolean value that determines whether the toolbar item displays an indicator of additional functionality.
- [menu](nsmenutoolbaritem/menu.md): The menu presented from the toolbar item.
- [itemMenu](nsmenutoolbaritem/itemmenu.md)

## Relationships

### Inherits From

- [NSToolbarItem](nstoolbaritem.md)

## See Also

### Items

- [NSToolbarItem](nstoolbaritem.md): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroup](nstoolbaritemgroup.md): A group of subitems in a toolbar item.
- [NSToolbarItemGroupControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [NSToolbarItemGroupSelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.
