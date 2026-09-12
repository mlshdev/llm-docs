> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchtoolbaritem](https://developer.apple.com/documentation/appkit/nssearchtoolbaritem)

# NSSearchToolbarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

A toolbar item that contains a search field optimized for performing text-based searches.

## Declaration

```swift
class NSSearchToolbarItem
```

<a id="overview"></a>

## Overview

[NSSearchToolbarItem](nssearchtoolbaritem.md) automatically resizes to accommodate typing when the focus switches to the toolbar item. When the toolbar is low on space, the system may collapse the search item into a button representation, which then expands to a full search field when the user clicks on it.

## Topics

### Configuring a search item

- [preferredWidthForSearchField](nssearchtoolbaritem/preferredwidthforsearchfield.md): The preferred width for the toolbar item when it has keyboard focus.
- [resignsFirstResponderWithCancel](nssearchtoolbaritem/resignsfirstresponderwithcancel.md): A Boolean value that enables the cancel button in the search field to resign the first responder in addition to clearing the contents.
- [searchField](nssearchtoolbaritem/searchfield.md): The search field inside the toolbar item.

### Controlling search interactions

- [beginSearchInteraction()](nssearchtoolbaritem/beginsearchinteraction%28%29.md): Starts a search interaction and moves the keyboard focus to the search field.
- [endSearchInteraction()](nssearchtoolbaritem/endsearchinteraction%28%29.md): Ends a search interaction by giving up the first responder and adjusting the size of the search field to the available width for the toolbar item if necessary.

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
- [NSMenuToolbarItem](nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.

# NSSearchToolbarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

A toolbar item that contains a search field optimized for performing text-based searches.

## Declaration

```objectivec
@interface NSSearchToolbarItem : NSToolbarItem
```

<a id="overview"></a>

## Overview

[NSSearchToolbarItem](nssearchtoolbaritem.md) automatically resizes to accommodate typing when the focus switches to the toolbar item. When the toolbar is low on space, the system may collapse the search item into a button representation, which then expands to a full search field when the user clicks on it.

## Topics

### Configuring a search item

- [preferredWidthForSearchField](nssearchtoolbaritem/preferredwidthforsearchfield.md): The preferred width for the toolbar item when it has keyboard focus.
- [resignsFirstResponderWithCancel](nssearchtoolbaritem/resignsfirstresponderwithcancel.md): A Boolean value that enables the cancel button in the search field to resign the first responder in addition to clearing the contents.
- [searchField](nssearchtoolbaritem/searchfield.md): The search field inside the toolbar item.

### Controlling search interactions

- [beginSearchInteraction](nssearchtoolbaritem/beginsearchinteraction%28%29.md): Starts a search interaction and moves the keyboard focus to the search field.
- [endSearchInteraction](nssearchtoolbaritem/endsearchinteraction%28%29.md): Ends a search interaction by giving up the first responder and adjusting the size of the search field to the available width for the toolbar item if necessary.

## Relationships

### Inherits From

- [NSToolbarItem](nstoolbaritem.md)

## See Also

### Items

- [NSToolbarItem](nstoolbaritem.md): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroup](nstoolbaritemgroup.md): A group of subitems in a toolbar item.
- [NSToolbarItemGroupControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [NSToolbarItemGroupSelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [NSMenuToolbarItem](nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.
