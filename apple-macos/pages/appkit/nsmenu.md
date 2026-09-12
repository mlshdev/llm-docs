> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu](https://developer.apple.com/documentation/appkit/nsmenu)

# NSMenu (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages an app’s menus.

## Declaration

```swift
class NSMenu
```

## Topics

### Managing the Menu Bar

- [menuBarVisible()](nsmenu/menubarvisible%28%29.md): Returns a Boolean value that indicates whether the menu bar is visible.
- [setMenuBarVisible(\_:)](nsmenu/setmenubarvisible%28__%29.md): Sets whether the menu bar is visible and selectable by the user.
- [menuBarHeight](nsmenu/menubarheight.md): The menu bar height for the main menu in pixels.

### Creating an NSMenu Object

- [init(title:)](nsmenu/init%28title_%29.md): Initializes and returns a menu having the specified title and with autoenabling of menu items turned on.
- [init(coder:)](nsmenu/init%28coder_%29.md)

### Adding and Removing Menu Items

- [insertItem(\_:at:)](nsmenu/insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItem(withTitle:action:keyEquivalent:at:)](nsmenu/insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem(\_:)](nsmenu/additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItem(withTitle:action:keyEquivalent:)](nsmenu/additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem(\_:)](nsmenu/removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItem(at:)](nsmenu/removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged(\_:)](nsmenu/itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems()](nsmenu/removeallitems%28%29.md): Removes all the menu items in the menu.

### Finding Menu Items

- [item(withTag:)](nsmenu/item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [item(withTitle:)](nsmenu/item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [item(at:)](nsmenu/item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [numberOfItems](nsmenu/numberofitems.md): The number of menu items in the menu, including separator items.
- [items](nsmenu/items.md): An array containing the menu items in the menu.

### Finding Indices of Menu Items

- [index(of:)](nsmenu/index%28of_%29.md): Returns the index identifying the location of a specified menu item in the menu.
- [indexOfItem(withTitle:)](nsmenu/indexofitem%28withtitle_%29.md): Returns the index of the first menu item in the menu that has a specified title.
- [indexOfItem(withTag:)](nsmenu/indexofitem%28withtag_%29.md): Returns the index of the first menu item in the menu identified by a tag.
- [indexOfItem(withTarget:andAction:)](nsmenu/indexofitem%28withtarget_andaction_%29.md): Returns the index of the first menu item in the menu that has a specified action and target.
- [indexOfItem(withRepresentedObject:)](nsmenu/indexofitem%28withrepresentedobject_%29.md): Returns the index of the first menu item in the menu that has a given represented object.
- [indexOfItem(withSubmenu:)](nsmenu/indexofitem%28withsubmenu_%29.md): Returns the index of the menu item in the menu with the given submenu.

### Managing Submenus

- [setSubmenu(\_:for:)](nsmenu/setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction(\_:)](nsmenu/submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [supermenu](nsmenu/supermenu.md): The parent menu that contains the menu as a submenu.
- [isTornOff](nsmenu/istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).

### Enabling and Disabling Menu Items

- [autoenablesItems](nsmenu/autoenablesitems.md): Indicates whether the menu automatically enables and disables its menu items.
- [update()](nsmenu/update%28%29.md): Enables or disables the menu items of the menu based on the NSMenuValidation informal protocol and sizes the menu to fit its current menu items if necessary.

### Getting and Setting the Menu Font

- [font](nsmenu/font.md): The font of the menu and its submenus.

### Handling Keyboard Equivalents

- [performKeyEquivalent(with:)](nsmenu/performkeyequivalent%28with_%29.md): Performs the action for the menu item that corresponds to the given key equivalent.

### Simulating Mouse Clicks

- [performActionForItem(at:)](nsmenu/performactionforitem%28at_%29.md): Causes the application to send the action message of a specified menu item to its target.

### Managing the Title

- [title](nsmenu/title.md): The title of the menu.

### Selecting Items

- [selectedItems](nsmenu/selecteditems.md): The menu items that are currently selected.
- [selectionMode](nsmenu/selectionmode-swift.property.md): The selection mode of the menu.
- [NSMenu.SelectionMode](nsmenu/selectionmode-swift.enum.md): Describes how the menu manages selection states of the menu items that belong to the same selection group.

### Configuring Menu Size

- [minimumWidth](nsmenu/minimumwidth.md): The minimum width of the menu in screen coordinates.
- [size](nsmenu/size.md): The size of the menu in screen coordinates

### Getting Menu Properties

- [propertiesToUpdate](nsmenu/propertiestoupdate.md): The available properties for the menu.

### Managing Presentation Styles

- [presentationStyle](nsmenu/presentationstyle-swift.property.md): The presentation style of the menu.
- [NSMenu.PresentationStyle](nsmenu/presentationstyle-swift.enum.md): Specifies the style of a menu.

### Working with Palettes

- [palette(colors:titles:template:onSelectionChange:)](nsmenu/palette%28colors_titles_template_onselectionchange_%29.md): Creates a palette style menu displaying user-selectable color tags that tint using the specified array of colors.

### Managing Menu Change Notifications

- [menuChangedMessagesEnabled](nsmenu/menuchangedmessagesenabled.md): Deprecated. Indicates whether messages are sent to the application’s windows each time the menu changes.

### Displaying Contextual Menus

- [allowsContextMenuPlugIns](nsmenu/allowscontextmenuplugins.md): Indicates whether the pop-up menu allows appending of contextual menu plug-in items.

### Displaying Context-Sensitive Help

- [popUpContextMenu(\_:with:for:)](nsmenu/popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [popUpContextMenu(\_:with:for:with:)](nsmenu/popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [helpRequested(with:)](nsmenu/helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.
- [popUp(positioning:at:in:)](nsmenu/popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.

### Managing Display of the State Column

- [showsStateColumn](nsmenu/showsstatecolumn.md): Indicates whether the menu displays the state column.

### Controlling Allocation Zones

- [menuZone()](nsmenu/menuzone%28%29.md): Deprecated. Returns the zone from which `NSMenu` objects should be allocated.

### Handling Highlighting

- [highlightedItem](nsmenu/highlighteditem.md): Indicates the currently highlighted item in the menu.

### Managing the User Interface

- [userInterfaceLayoutDirection](nsmenu/userinterfacelayoutdirection.md): Configures the layout direction of menu items in the menu.

### Managing the Delegate

- [delegate](nsmenu/delegate.md): The delegate of the menu.

### Handling Tracking

- [cancelTracking()](nsmenu/canceltracking%28%29.md): Dismisses the menu and ends all menu tracking.
- [cancelTrackingWithoutAnimation()](nsmenu/canceltrackingwithoutanimation%28%29.md): Dismisses the menu and ends all menu tracking without displaying the associated animation.

### Constants

- [NSMenu.Properties](nsmenu/properties.md): These constants are used as a bitmask for specifying a set of menu or menu item properties, and are contained by the [propertiesToUpdate](nsmenu/propertiestoupdate.md) property.

### Notifications

- [didAddItemNotification](nsmenu/didadditemnotification.md): Posted after a menu item is added to the menu.
- [didChangeItemNotification](nsmenu/didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [didBeginTrackingNotification](nsmenu/didbegintrackingnotification.md): Posted when menu tracking begins.
- [didEndTrackingNotification](nsmenu/didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [didRemoveItemNotification](nsmenu/didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [didSendActionNotification](nsmenu/didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [willSendActionNotification](nsmenu/willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.

### Structures

- [NSMenu.DidAddItemMessage](nsmenu/didadditemmessage.md)
- [NSMenu.DidBeginTrackingMessage](nsmenu/didbegintrackingmessage.md)
- [NSMenu.DidChangeItemMessage](nsmenu/didchangeitemmessage.md)
- [NSMenu.DidEndTrackingMessage](nsmenu/didendtrackingmessage.md)
- [NSMenu.DidRemoveItemMessage](nsmenu/didremoveitemmessage.md)
- [NSMenu.DidSendActionMessage](nsmenu/didsendactionmessage.md)
- [NSMenu.WillSendActionMessage](nsmenu/willsendactionmessage.md)

### Instance Properties

- [automaticallyInsertsWritingToolsItems](nsmenu/automaticallyinsertswritingtoolsitems.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

## See Also

### Menus

- [NSMenuItem](nsmenuitem.md): A command item in an app menu.
- [NSMenuItemBadge](nsmenuitembadge.md): A control that provides additional quantitative information specific to a menu item, such as the number of available updates.
- [NSMenuDelegate](nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.

# NSMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages an app’s menus.

## Declaration

```objectivec
@interface NSMenu : NSObject
```

## Topics

### Managing the Menu Bar

- [menuBarVisible](nsmenu/menubarvisible%28%29.md): Returns a Boolean value that indicates whether the menu bar is visible.
- [setMenuBarVisible:](nsmenu/setmenubarvisible%28__%29.md): Sets whether the menu bar is visible and selectable by the user.
- [menuBarHeight](nsmenu/menubarheight.md): The menu bar height for the main menu in pixels.

### Creating an NSMenu Object

- [initWithTitle:](nsmenu/init%28title_%29.md): Initializes and returns a menu having the specified title and with autoenabling of menu items turned on.
- [initWithCoder:](nsmenu/init%28coder_%29.md)

### Adding and Removing Menu Items

- [insertItem:atIndex:](nsmenu/insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItemWithTitle:action:keyEquivalent:atIndex:](nsmenu/insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem:](nsmenu/additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItemWithTitle:action:keyEquivalent:](nsmenu/additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem:](nsmenu/removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItemAtIndex:](nsmenu/removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged:](nsmenu/itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems](nsmenu/removeallitems%28%29.md): Removes all the menu items in the menu.

### Finding Menu Items

- [itemWithTag:](nsmenu/item%28withtag_%29.md): Returns the first menu item in the menu with the specified tag.
- [itemWithTitle:](nsmenu/item%28withtitle_%29.md): Returns the first menu item in the menu with a specified title.
- [itemAtIndex:](nsmenu/item%28at_%29.md): Returns the menu item at a specific location of the menu.
- [numberOfItems](nsmenu/numberofitems.md): The number of menu items in the menu, including separator items.
- [itemArray](nsmenu/items.md): An array containing the menu items in the menu.

### Finding Indices of Menu Items

- [indexOfItem:](nsmenu/index%28of_%29.md): Returns the index identifying the location of a specified menu item in the menu.
- [indexOfItemWithTitle:](nsmenu/indexofitem%28withtitle_%29.md): Returns the index of the first menu item in the menu that has a specified title.
- [indexOfItemWithTag:](nsmenu/indexofitem%28withtag_%29.md): Returns the index of the first menu item in the menu identified by a tag.
- [indexOfItemWithTarget:andAction:](nsmenu/indexofitem%28withtarget_andaction_%29.md): Returns the index of the first menu item in the menu that has a specified action and target.
- [indexOfItemWithRepresentedObject:](nsmenu/indexofitem%28withrepresentedobject_%29.md): Returns the index of the first menu item in the menu that has a given represented object.
- [indexOfItemWithSubmenu:](nsmenu/indexofitem%28withsubmenu_%29.md): Returns the index of the menu item in the menu with the given submenu.

### Managing Submenus

- [setSubmenu:forItem:](nsmenu/setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction:](nsmenu/submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [attachedMenu](nsmenu/attachedmenu.md): Deprecated. Returns the menu currently attached to the menu.
- [isAttached](nsmenu/isattached.md): Deprecated. Returns a Boolean value that indicates whether the menu is currently attached to another menu.
- [locationForSubmenu:](nsmenu/locationforsubmenu_.md): Deprecated. Returns the location in screen coordinates where the given submenu is displayed when opened as a submenu of the menu.
- [supermenu](nsmenu/supermenu.md): The parent menu that contains the menu as a submenu.
- [tornOff](nsmenu/istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).

### Enabling and Disabling Menu Items

- [autoenablesItems](nsmenu/autoenablesitems.md): Indicates whether the menu automatically enables and disables its menu items.
- [update](nsmenu/update%28%29.md): Enables or disables the menu items of the menu based on the NSMenuValidation informal protocol and sizes the menu to fit its current menu items if necessary.

### Getting and Setting the Menu Font

- [font](nsmenu/font.md): The font of the menu and its submenus.

### Handling Keyboard Equivalents

- [performKeyEquivalent:](nsmenu/performkeyequivalent%28with_%29.md): Performs the action for the menu item that corresponds to the given key equivalent.

### Simulating Mouse Clicks

- [performActionForItemAtIndex:](nsmenu/performactionforitem%28at_%29.md): Causes the application to send the action message of a specified menu item to its target.

### Managing the Title

- [title](nsmenu/title.md): The title of the menu.

### Selecting Items

- [selectedItems](nsmenu/selecteditems.md): The menu items that are currently selected.
- [selectionMode](nsmenu/selectionmode-swift.property.md): The selection mode of the menu.
- [NSMenuSelectionMode](nsmenu/selectionmode-swift.enum.md): Describes how the menu manages selection states of the menu items that belong to the same selection group.

### Configuring Menu Size

- [minimumWidth](nsmenu/minimumwidth.md): The minimum width of the menu in screen coordinates.
- [size](nsmenu/size.md): The size of the menu in screen coordinates
- [sizeToFit](nsmenu/sizetofit.md): Deprecated. Resizes the menu to exactly fit its items.

### Getting Menu Properties

- [propertiesToUpdate](nsmenu/propertiestoupdate.md): The available properties for the menu.

### Managing Presentation Styles

- [presentationStyle](nsmenu/presentationstyle-swift.property.md): The presentation style of the menu.
- [NSMenuPresentationStyle](nsmenu/presentationstyle-swift.enum.md): Specifies the style of a menu.

### Working with Palettes

- [paletteMenuWithColors:titles:selectionHandler:](nsmenu/palettemenuwithcolors_titles_selectionhandler_.md): Creates a palette style menu displaying user-selectable color tags.
- [paletteMenuWithColors:titles:templateImage:selectionHandler:](nsmenu/palettemenuwithcolors_titles_templateimage_selectionhandler_.md): Creates a palette style menu displaying user-selectable color tags that tint using the specified array of colors.

### Managing Menu Change Notifications

- [menuChangedMessagesEnabled](nsmenu/menuchangedmessagesenabled.md): Deprecated. Indicates whether messages are sent to the application’s windows each time the menu changes.

### Displaying Contextual Menus

- [allowsContextMenuPlugIns](nsmenu/allowscontextmenuplugins.md): Indicates whether the pop-up menu allows appending of contextual menu plug-in items.

### Displaying Context-Sensitive Help

- [popUpContextMenu:withEvent:forView:](nsmenu/popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [popUpContextMenu:withEvent:forView:withFont:](nsmenu/popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [helpRequested:](nsmenu/helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.
- [popUpMenuPositioningItem:atLocation:inView:](nsmenu/popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.

### Managing Display of the State Column

- [showsStateColumn](nsmenu/showsstatecolumn.md): Indicates whether the menu displays the state column.

### Controlling Allocation Zones

- [menuZone](nsmenu/menuzone%28%29.md): Deprecated. Returns the zone from which `NSMenu` objects should be allocated.
- [setMenuZone:](nsmenu/setmenuzone_.md): Deprecated. Sets the zone from which `NSMenu` objects should be allocated

### Handling Highlighting

- [highlightedItem](nsmenu/highlighteditem.md): Indicates the currently highlighted item in the menu.

### Managing the User Interface

- [userInterfaceLayoutDirection](nsmenu/userinterfacelayoutdirection.md): Configures the layout direction of menu items in the menu.

### Managing the Delegate

- [delegate](nsmenu/delegate.md): The delegate of the menu.

### Handling Tracking

- [cancelTracking](nsmenu/canceltracking%28%29.md): Dismisses the menu and ends all menu tracking.
- [cancelTrackingWithoutAnimation](nsmenu/canceltrackingwithoutanimation%28%29.md): Dismisses the menu and ends all menu tracking without displaying the associated animation.

### Deprecated Methods

- [contextMenuRepresentation](nsmenu/contextmenurepresentation.md): Deprecated. Deprecated.
- [setContextMenuRepresentation:](nsmenu/setcontextmenurepresentation_.md): Deprecated. Deprecated.
- [tearOffMenuRepresentation](nsmenu/tearoffmenurepresentation.md): Deprecated. Deprecated.
- [setTearOffMenuRepresentation:](nsmenu/settearoffmenurepresentation_.md): Deprecated. Deprecated.
- [setMenuRepresentation:](nsmenu/setmenurepresentation_.md): Deprecated. Deprecated.
- [menuRepresentation](nsmenu/menurepresentation.md): Deprecated. Deprecated.

### Constants

- [NSMenuProperties](nsmenu/properties.md): These constants are used as a bitmask for specifying a set of menu or menu item properties, and are contained by the [propertiesToUpdate](nsmenu/propertiestoupdate.md) property.

### Notifications

- [NSMenuDidAddItemNotification](nsmenu/didadditemnotification.md): Posted after a menu item is added to the menu.
- [NSMenuDidChangeItemNotification](nsmenu/didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [NSMenuDidBeginTrackingNotification](nsmenu/didbegintrackingnotification.md): Posted when menu tracking begins.
- [NSMenuDidEndTrackingNotification](nsmenu/didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [NSMenuDidRemoveItemNotification](nsmenu/didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [NSMenuDidSendActionNotification](nsmenu/didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [NSMenuWillSendActionNotification](nsmenu/willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.

### Instance Properties

- [automaticallyInsertsWritingToolsItems](nsmenu/automaticallyinsertswritingtoolsitems.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

## See Also

### Menus

- [NSMenuItem](nsmenuitem.md): A command item in an app menu.
- [NSMenuItemBadge](nsmenuitembadge.md): A control that provides additional quantitative information specific to a menu item, such as the number of available updates.
- [NSMenuDelegate](nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](nsmenu.md) objects to manage menu display and handle some events.
