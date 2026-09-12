> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate](https://developer.apple.com/documentation/appkit/nsmenudelegate)

# NSMenuDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.

## Declaration

```swift
protocol NSMenuDelegate : NSObjectProtocol
```

## Topics

### Handling Keyboard Equivalents

- [menuHasKeyEquivalent(\_:for:target:action:)](nsmenudelegate/menuhaskeyequivalent%28__for_target_action_%29.md): Invoked to allow the delegate to return the target and action for a key-down event.

### Updating Menu Layout

- [menu(\_:update:at:shouldCancel:)](nsmenudelegate/menu%28__update_at_shouldcancel_%29.md): Invoked to let the delegate update a menu item before it is displayed.
- [confinementRect(for:on:)](nsmenudelegate/confinementrect%28for_on_%29.md): Invoked to allow the delegate to specify a display location for the menu.

### Handling Highlighting

- [menu(\_:willHighlight:)](nsmenudelegate/menu%28__willhighlight_%29.md): Invoked to indicate that a menu is about to highlight a given item.

### Handling Open and Close Events

- [menuWillOpen(\_:)](nsmenudelegate/menuwillopen%28__%29.md): Invoked when a menu is about to open.
- [menuDidClose(\_:)](nsmenudelegate/menudidclose%28__%29.md): Invoked after a menu closed.

### Handling Tracking

- [numberOfItems(in:)](nsmenudelegate/numberofitems%28in_%29.md): Invoked when a menu is about to be displayed at the start of a tracking session so the delegate can specify the number of items in the menu.
- [menuNeedsUpdate(\_:)](nsmenudelegate/menuneedsupdate%28__%29.md): Invoked when a menu is about to be displayed at the start of a tracking session.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Menus

- [NSMenu](nsmenu.md): An object that manages an app’s menus.
- [NSMenuItem](nsmenuitem.md): A command item in an app menu.
- [NSMenuItemBadge](nsmenuitembadge.md): A control that provides additional quantitative information specific to a menu item, such as the number of available updates.

# NSMenuDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.

## Declaration

```objectivec
@protocol NSMenuDelegate <NSObject>
```

## Topics

### Handling Keyboard Equivalents

- [menuHasKeyEquivalent:forEvent:target:action:](nsmenudelegate/menuhaskeyequivalent%28__for_target_action_%29.md): Invoked to allow the delegate to return the target and action for a key-down event.

### Updating Menu Layout

- [menu:updateItem:atIndex:shouldCancel:](nsmenudelegate/menu%28__update_at_shouldcancel_%29.md): Invoked to let the delegate update a menu item before it is displayed.
- [confinementRectForMenu:onScreen:](nsmenudelegate/confinementrect%28for_on_%29.md): Invoked to allow the delegate to specify a display location for the menu.

### Handling Highlighting

- [menu:willHighlightItem:](nsmenudelegate/menu%28__willhighlight_%29.md): Invoked to indicate that a menu is about to highlight a given item.

### Handling Open and Close Events

- [menuWillOpen:](nsmenudelegate/menuwillopen%28__%29.md): Invoked when a menu is about to open.
- [menuDidClose:](nsmenudelegate/menudidclose%28__%29.md): Invoked after a menu closed.

### Handling Tracking

- [numberOfItemsInMenu:](nsmenudelegate/numberofitems%28in_%29.md): Invoked when a menu is about to be displayed at the start of a tracking session so the delegate can specify the number of items in the menu.
- [menuNeedsUpdate:](nsmenudelegate/menuneedsupdate%28__%29.md): Invoked when a menu is about to be displayed at the start of a tracking session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Menus

- [NSMenu](nsmenu.md): An object that manages an app’s menus.
- [NSMenuItem](nsmenuitem.md): A command item in an app menu.
- [NSMenuItemBadge](nsmenuitembadge.md): A control that provides additional quantitative information specific to a menu item, such as the number of available updates.
