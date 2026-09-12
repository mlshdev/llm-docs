> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/menus-cursors-and-the-dock](https://developer.apple.com/documentation/appkit/menus-cursors-and-the-dock)

# Menus, Cursors, and the Dock

**Interface languages:** Swift, Objective-C

**Framework:** AppKit  
**Kind:** API Collection

Implement menus and cursors to facilitate interactions with your app, and use your app’s Dock tile to convey updated information.

## Topics

### Menus

- [NSMenu](nsmenu.md): An object that manages an app’s menus.
- [NSMenuItem](nsmenuitem.md): A command item in an app menu.
- [NSMenuItemBadge](nsmenuitembadge.md): A control that provides additional quantitative information specific to a menu item, such as the number of available updates.
- [NSMenuDelegate](nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.

### Menu Validation

- [NSMenuItemValidation](nsmenuitemvalidation.md)

### Menu Bar Items

- [NSStatusBar](nsstatusbar.md): An object that manages a collection of status items displayed within the system-wide menu bar.
- [NSStatusItem](nsstatusitem.md): An individual element displayed in the system menu bar.
- [NSStatusBarButton](nsstatusbarbutton.md): The appearance and behavior of an item in the systemwide menu bar.

### Expanded interface

- [NSStatusItemExpandedInterfaceSession](nsstatusitemexpandedinterfacesession.md)
- [NSStatusItemExpandedInterfaceDelegate](nsstatusitemexpandedinterfacedelegate.md)

### Cursors

- [NSCursor](nscursor.md): A pointer (also called a cursor).
- [NSTrackingArea](nstrackingarea.md): A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.

### The Dock

- [NSDockTile](nsdocktile.md): The visual representation of your app’s miniaturized windows and app icon as they appear in the Dock.
- [NSDockTilePlugIn](nsdocktileplugin.md): A set of methods implemented by plug-ins that allow an app’s Dock tile to be customized while the app is not running.

## See Also

### User Interactions

- [Mouse, Keyboard, and Trackpad](mouse-keyboard-and-trackpad.md): Handle events related to mouse, keyboard, and trackpad input.
- [Gestures](gestures.md): Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.
- [Touch Bar](touch-bar.md): Display interactive content and controls in the Touch Bar.
- [Drag and Drop](drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [Accessibility for AppKit](accessibility-for-appkit.md): Make your AppKit apps accessible to everyone who uses macOS.
