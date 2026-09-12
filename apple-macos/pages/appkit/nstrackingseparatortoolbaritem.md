> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingseparatortoolbaritem](https://developer.apple.com/documentation/appkit/nstrackingseparatortoolbaritem)

# NSTrackingSeparatorToolbarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

A toolbar separator that aligns with the vertical split view in the same window.

## Declaration

```swift
class NSTrackingSeparatorToolbarItem
```

<a id="overview"></a>

## Overview

Use a `NSTrackingSeparatorToolbarItem` to divide an [NSToolbar](nstoolbar.md) into sections that visually align with the views on either side of the divider of the [splitView](nstrackingseparatortoolbaritem/splitview.md). This keeps [NSToolbarItem](nstoolbaritem.md)s above the content that’s the [target](nstoolbaritem/target.md) for the item’s [target](nstoolbaritem/target.md).

The `splitView` must be in the same window as the toolbar containing this item before showing the toolbar.

## Topics

### Creating a tracking separator

- [init(identifier:splitView:dividerIndex:)](nstrackingseparatortoolbaritem/init%28identifier_splitview_dividerindex_%29.md): Creates a new tracking separator toolbar item and configures it to align with the divider of the split view.

### configuring a tracking separator

- [dividerIndex](nstrackingseparatortoolbaritem/dividerindex.md): The index of the split view divider to align with the tracking separator.
- [splitView](nstrackingseparatortoolbaritem/splitview.md): The vertical split view to align with the toolbar separator.

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
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.

# NSTrackingSeparatorToolbarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

A toolbar separator that aligns with the vertical split view in the same window.

## Declaration

```objectivec
@interface NSTrackingSeparatorToolbarItem : NSToolbarItem
```

<a id="overview"></a>

## Overview

Use a `NSTrackingSeparatorToolbarItem` to divide an [NSToolbar](nstoolbar.md) into sections that visually align with the views on either side of the divider of the [splitView](nstrackingseparatortoolbaritem/splitview.md). This keeps [NSToolbarItem](nstoolbaritem.md)s above the content that’s the [target](nstoolbaritem/target.md) for the item’s [target](nstoolbaritem/target.md).

The `splitView` must be in the same window as the toolbar containing this item before showing the toolbar.

## Topics

### Creating a tracking separator

- [trackingSeparatorToolbarItemWithIdentifier:splitView:dividerIndex:](nstrackingseparatortoolbaritem/init%28identifier_splitview_dividerindex_%29.md): Creates a new tracking separator toolbar item and configures it to align with the divider of the split view.

### configuring a tracking separator

- [dividerIndex](nstrackingseparatortoolbaritem/dividerindex.md): The index of the split view divider to align with the tracking separator.
- [splitView](nstrackingseparatortoolbaritem/splitview.md): The vertical split view to align with the toolbar separator.

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
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
