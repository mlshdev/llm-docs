> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell](https://developer.apple.com/documentation/appkit/nspopupbuttoncell)

# NSPopUpButtonCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The `NSPopUpButtonCell` class defines the visual appearance of pop-up buttons that display pop-up or pull-down menus. Pop-up menus present the user with a set of choices, much the way radio buttons do, but using much less space. Pull-down menus also provide a set of choices but present the information in a slightly different way, usually to provide a set of commands from which the user can choose.

## Declaration

```swift
class NSPopUpButtonCell
```

<a id="overview"></a>

## Overview

The `NSPopUpButtonCell` class implements the user interface for the [NSPopUpButton](nspopupbutton.md) class.

Changes made to a menu (such as adding, removing, or changing the items) are not apparent while the menu is being displayed or interacted with.

> **Important**

> Setting a pop up button’s [image](nscell/image.md) property has no effect. The image displayed in a pop up button is taken from the selected menu item (in the case of a pop up menu) or from the first menu item (in the case of a pull-down menu).

## Topics

### Initialization

- [init(textCell:pullsDown:)](nspopupbuttoncell/init%28textcell_pullsdown_%29.md): Returns an `NSPopUpButtonCell` object initialized with the specified title.

### Accessing menu attributes

- [menu](nspopupbuttoncell/menu.md): The pop-up button’s associated menu.
- [pullsDown](nspopupbuttoncell/pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](nspopupbuttoncell/autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](nspopupbuttoncell/preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](nspopupbuttoncell/usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](nspopupbuttoncell/altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](nspopupbuttoncell/arrowposition.md): The position of the arrow displayed on the button.

### Adding and removing items

- [addItem(withTitle:)](nspopupbuttoncell/additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItems(withTitles:)](nspopupbuttoncell/additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItem(withTitle:at:)](nspopupbuttoncell/insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItem(withTitle:)](nspopupbuttoncell/removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](nspopupbuttoncell/removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems()](nspopupbuttoncell/removeallitems%28%29.md): Removes all items in the receiver’s item menu.

### Accessing the items

- [itemArray](nspopupbuttoncell/itemarray.md): An array of [NSMenuItem](nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](nspopupbuttoncell/numberofitems.md): The number of items in the menu.
- [index(of:)](nspopupbuttoncell/index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTitle:)](nspopupbuttoncell/indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withTag:)](nspopupbuttoncell/indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withRepresentedObject:)](nspopupbuttoncell/indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItem(withTarget:andAction:)](nspopupbuttoncell/indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [item(at:)](nspopupbuttoncell/item%28at_%29.md): Returns the menu item at the specified index.
- [item(withTitle:)](nspopupbuttoncell/item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](nspopupbuttoncell/lastitem.md): The last item in the menu.

### Dealing with selection

- [select(\_:)](nspopupbuttoncell/select%28__%29.md): Selects the specified menu item.
- [selectItem(at:)](nspopupbuttoncell/selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTag:)](nspopupbuttoncell/selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](nspopupbuttoncell/selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle(\_:)](nspopupbuttoncell/settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](nspopupbuttoncell/selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](nspopupbuttoncell/indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem()](nspopupbuttoncell/synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

### Title conveniences

- [itemTitle(at:)](nspopupbuttoncell/itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](nspopupbuttoncell/itemtitles.md): An array of `NSString` objects containing the titles of every item in the menu.
- [titleOfSelectedItem](nspopupbuttoncell/titleofselecteditem.md): The title of the item last selected by the user.

### Handling events and action messages

- [attachPopUp(withFrame:in:)](nspopupbuttoncell/attachpopup%28withframe_in_%29.md): Sets up the receiver to display a menu.
- [dismissPopUp()](nspopupbuttoncell/dismisspopup%28%29.md): Dismisses the pop-up button’s menu by ordering its window out.
- [performClick(withFrame:in:)](nspopupbuttoncell/performclick%28withframe_in_%29.md): Displays the receiver’s menu and track mouse events in it.

### Constants

- [NSPopUpButton.ArrowPosition](nspopupbutton/arrowposition.md): These constants are defined for use with the [arrowPosition](nspopupbuttoncell/arrowposition.md) property.

### Notifications

- [willPopUpNotification](nspopupbuttoncell/willpopupnotification.md): This notification is posted just before a pop-up menu is attached to its window frame.

### Initializers

- [init(coder:)](nspopupbuttoncell/init%28coder_%29.md)

### Structures

- [NSPopUpButtonCell.WillPopUpMessage](nspopupbuttoncell/willpopupmessage.md)

## Relationships

### Inherits From

- [NSMenuItemCell](nsmenuitemcell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSPopUpButtonCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The `NSPopUpButtonCell` class defines the visual appearance of pop-up buttons that display pop-up or pull-down menus. Pop-up menus present the user with a set of choices, much the way radio buttons do, but using much less space. Pull-down menus also provide a set of choices but present the information in a slightly different way, usually to provide a set of commands from which the user can choose.

## Declaration

```objectivec
@interface NSPopUpButtonCell : NSMenuItemCell
```

<a id="overview"></a>

## Overview

The `NSPopUpButtonCell` class implements the user interface for the [NSPopUpButton](nspopupbutton.md) class.

Changes made to a menu (such as adding, removing, or changing the items) are not apparent while the menu is being displayed or interacted with.

> **Important**

> Setting a pop up button’s [image](nscell/image.md) property has no effect. The image displayed in a pop up button is taken from the selected menu item (in the case of a pop up menu) or from the first menu item (in the case of a pull-down menu).

## Topics

### Initialization

- [initTextCell:pullsDown:](nspopupbuttoncell/init%28textcell_pullsdown_%29.md): Returns an `NSPopUpButtonCell` object initialized with the specified title.

### Accessing menu attributes

- [menu](nspopupbuttoncell/menu.md): The pop-up button’s associated menu.
- [pullsDown](nspopupbuttoncell/pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](nspopupbuttoncell/autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](nspopupbuttoncell/preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](nspopupbuttoncell/usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](nspopupbuttoncell/altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](nspopupbuttoncell/arrowposition.md): The position of the arrow displayed on the button.

### Adding and removing items

- [addItemWithTitle:](nspopupbuttoncell/additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItemsWithTitles:](nspopupbuttoncell/additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItemWithTitle:atIndex:](nspopupbuttoncell/insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeItemWithTitle:](nspopupbuttoncell/removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](nspopupbuttoncell/removeitem%28at_%29.md): Removes the item at the specified index.
- [removeAllItems](nspopupbuttoncell/removeallitems%28%29.md): Removes all items in the receiver’s item menu.

### Accessing the items

- [itemArray](nspopupbuttoncell/itemarray.md): An array of [NSMenuItem](nsmenuitem.md) objects that represent the items in the menu.
- [numberOfItems](nspopupbuttoncell/numberofitems.md): The number of items in the menu.
- [indexOfItem:](nspopupbuttoncell/index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTitle:](nspopupbuttoncell/indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithTag:](nspopupbuttoncell/indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithRepresentedObject:](nspopupbuttoncell/indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItemWithTarget:andAction:](nspopupbuttoncell/indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.
- [itemAtIndex:](nspopupbuttoncell/item%28at_%29.md): Returns the menu item at the specified index.
- [itemWithTitle:](nspopupbuttoncell/item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](nspopupbuttoncell/lastitem.md): The last item in the menu.

### Dealing with selection

- [selectItem:](nspopupbuttoncell/select%28__%29.md): Selects the specified menu item.
- [selectItemAtIndex:](nspopupbuttoncell/selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTag:](nspopupbuttoncell/selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](nspopupbuttoncell/selectitem%28withtitle_%29.md): Selects the item with the specified title.
- [setTitle:](nspopupbuttoncell/settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.
- [selectedItem](nspopupbuttoncell/selecteditem.md): The menu item last selected by the user.
- [indexOfSelectedItem](nspopupbuttoncell/indexofselecteditem.md): The index of the item last selected by the user.
- [synchronizeTitleAndSelectedItem](nspopupbuttoncell/synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

### Title conveniences

- [itemTitleAtIndex:](nspopupbuttoncell/itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](nspopupbuttoncell/itemtitles.md): An array of `NSString` objects containing the titles of every item in the menu.
- [titleOfSelectedItem](nspopupbuttoncell/titleofselecteditem.md): The title of the item last selected by the user.

### Handling events and action messages

- [attachPopUpWithFrame:inView:](nspopupbuttoncell/attachpopup%28withframe_in_%29.md): Sets up the receiver to display a menu.
- [dismissPopUp](nspopupbuttoncell/dismisspopup%28%29.md): Dismisses the pop-up button’s menu by ordering its window out.
- [performClickWithFrame:inView:](nspopupbuttoncell/performclick%28withframe_in_%29.md): Displays the receiver’s menu and track mouse events in it.

### Constants

- [NSPopUpArrowPosition](nspopupbutton/arrowposition.md): These constants are defined for use with the [arrowPosition](nspopupbuttoncell/arrowposition.md) property.

### Notifications

- [NSPopUpButtonCellWillPopUpNotification](nspopupbuttoncell/willpopupnotification.md): This notification is posted just before a pop-up menu is attached to its window frame.

### Initializers

- [initWithCoder:](nspopupbuttoncell/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSMenuItemCell](nsmenuitemcell.md)

### Conforms To

- [NSMenuItemValidation](nsmenuitemvalidation.md)
