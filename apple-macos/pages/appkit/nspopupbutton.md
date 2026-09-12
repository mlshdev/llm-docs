> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton](https://developer.apple.com/documentation/appkit/nspopupbutton)

# NSPopUpButton (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A control for selecting an item from a list.

## Declaration

```swift
class NSPopUpButton
```

<a id="overview"></a>

## Overview

An `NSPopUpButton` object uses an [NSPopUpButtonCell](nspopupbuttoncell.md) object to implement its user interface.

Note that while a menu is tracking user input, programmatic changes to the menu, such as adding, removing, or changing items on the menu, is not reflected.

> **Important**

> Setting a pop up button’s [image](nscell/image.md) property has no effect. The image displayed in a pop up button is taken from the selected menu item (in the case of a pop up menu) or from the first menu item (in the case of a pull-down menu).

## Topics

### Initializing an NSPopUpButton

- [init(frame:pullsDown:)](nspopupbutton/init%28frame_pullsdown_%29.md): Returns an `NSPopUpButton` object initialized to the specified dimensions.

### Configuring the Cell

- [NSPopUpButtonCell](nspopupbuttoncell.md): The `NSPopUpButtonCell` class defines the visual appearance of pop-up buttons that display pop-up or pull-down menus. Pop-up menus present the user with a set of choices, much the way radio buttons do, but using much less space. Pull-down menus also provide a set of choices but present the information in a slightly different way, usually to provide a set of commands from which the user can choose.

### Setting the type of menu

- [pullsDown](nspopupbutton/pullsdown.md): A Boolean value indicating whether the button displays a pull-down or pop-up menu.
- [autoenablesItems](nspopupbutton/autoenablesitems.md): A Boolean value indicating whether the button enables and disables its items every time a user event occurs.

### Inserting and deleting items

- [addItem(withTitle:)](nspopupbutton/additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItems(withTitles:)](nspopupbutton/additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItem(withTitle:at:)](nspopupbutton/insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeAllItems()](nspopupbutton/removeallitems%28%29.md): Removes all items in the receiver’s item menu.
- [removeItem(withTitle:)](nspopupbutton/removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItem(at:)](nspopupbutton/removeitem%28at_%29.md): Removes the item at the specified index.

### Getting the user’s selection

- [selectedItem](nspopupbutton/selecteditem.md): The menu item that was last selected by the user.
- [titleOfSelectedItem](nspopupbutton/titleofselecteditem.md): The title of the item that was last selected by the user.
- [indexOfSelectedItem](nspopupbutton/indexofselecteditem.md): The index of the item that was last selected by the user.

### Setting the current selection

- [select(\_:)](nspopupbutton/select%28__%29.md): Selects the specified menu item.
- [selectItem(at:)](nspopupbutton/selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem(withTag:)](nspopupbutton/selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItem(withTitle:)](nspopupbutton/selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Getting menu items

- [menu](nspopupbutton/menu.md): The menu associated with the pop-up button.
- [numberOfItems](nspopupbutton/numberofitems.md): The number of items in the menu.
- [itemArray](nspopupbutton/itemarray.md): The array of menu item objects associated with the button.
- [item(at:)](nspopupbutton/item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitle(at:)](nspopupbutton/itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](nspopupbutton/itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [item(withTitle:)](nspopupbutton/item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](nspopupbutton/lastitem.md): The last item in the menu.

### Getting the indices of menu items

- [index(of:)](nspopupbutton/index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItem(withTag:)](nspopupbutton/indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItem(withTitle:)](nspopupbutton/indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItem(withRepresentedObject:)](nspopupbutton/indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItem(withTarget:andAction:)](nspopupbutton/indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.

### Setting the cell edge to pop out in restricted situations

- [preferredEdge](nspopupbutton/preferrededge.md): The edge of the button on which to display the menu when screen space is constrained.

### Setting the title

- [setTitle(\_:)](nspopupbutton/settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

### Setting the state

- [synchronizeTitleAndSelectedItem()](nspopupbutton/synchronizetitleandselecteditem%28%29.md): Ensures that the item being displayed by the receiver agrees with the selected item.

### Notifications

- [willPopUpNotification](nspopupbutton/willpopupnotification.md): Posted when an `NSPopUpButton` object receives a mouse-down event—that is, when the user is about to select an item from the menu.

### Instance Methods

- [selectedTag()](nspopupbutton/selectedtag%28%29.md)

### Structures

- [NSPopUpButton.WillPopUpMessage](nspopupbutton/willpopupmessage.md)

### Initializers

- [init(image:pullDownMenu:)](nspopupbutton/init%28image_pulldownmenu_%29.md): Creates a standard pull-down button with a title, optional image, and menu.
- [init(popUpMenu:target:action:)](nspopupbutton/init%28popupmenu_target_action_%29.md): Creates a standard pop-up button with a menu, target, and action.
- [init(title:image:pullDownMenu:)](nspopupbutton/init%28title_image_pulldownmenu_%29.md): Creates a standard pull-down button with a title, optional image, and menu.

### Instance Properties

- [altersStateOfSelectedItem](nspopupbutton/altersstateofselecteditem.md): When the value of this property is `YES`, the selected menu item’s `state` is set to `NSControlStateValueOn`. When the value of this property is `NO`, the menu item’s `state` is not changed. When this property changes, the `state` of the currently selected item is updated appropriately. This property is ignored for pull-down buttons.
- [usesItemFromMenu](nspopupbutton/usesitemfrommenu.md): When `usesItemFromMenu` is `YES`, a pull-down button uses the title of the first menu item and hides the first menu item. A pop-up button uses the title of the currently selected menu. The default value is `YES`.

## Relationships

### Inherits From

- [NSButton](nsbutton.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityButton](nsaccessibilitybutton.md)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceCompression](nsuserinterfacecompression.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSPopUpButton (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A control for selecting an item from a list.

## Declaration

```objectivec
@interface NSPopUpButton : NSButton
```

<a id="overview"></a>

## Overview

An `NSPopUpButton` object uses an [NSPopUpButtonCell](nspopupbuttoncell.md) object to implement its user interface.

Note that while a menu is tracking user input, programmatic changes to the menu, such as adding, removing, or changing items on the menu, is not reflected.

> **Important**

> Setting a pop up button’s [image](nscell/image.md) property has no effect. The image displayed in a pop up button is taken from the selected menu item (in the case of a pop up menu) or from the first menu item (in the case of a pull-down menu).

## Topics

### Initializing an NSPopUpButton

- [initWithFrame:pullsDown:](nspopupbutton/init%28frame_pullsdown_%29.md): Returns an `NSPopUpButton` object initialized to the specified dimensions.

### Configuring the Cell

- [NSPopUpButtonCell](nspopupbuttoncell.md): The `NSPopUpButtonCell` class defines the visual appearance of pop-up buttons that display pop-up or pull-down menus. Pop-up menus present the user with a set of choices, much the way radio buttons do, but using much less space. Pull-down menus also provide a set of choices but present the information in a slightly different way, usually to provide a set of commands from which the user can choose.

### Setting the type of menu

- [pullsDown](nspopupbutton/pullsdown.md): A Boolean value indicating whether the button displays a pull-down or pop-up menu.
- [autoenablesItems](nspopupbutton/autoenablesitems.md): A Boolean value indicating whether the button enables and disables its items every time a user event occurs.

### Inserting and deleting items

- [addItemWithTitle:](nspopupbutton/additem%28withtitle_%29.md): Adds an item with the specified title to the end of the menu.
- [addItemsWithTitles:](nspopupbutton/additems%28withtitles_%29.md): Adds multiple items to the end of the menu.
- [insertItemWithTitle:atIndex:](nspopupbutton/insertitem%28withtitle_at_%29.md): Inserts an item at the specified position in the menu.
- [removeAllItems](nspopupbutton/removeallitems%28%29.md): Removes all items in the receiver’s item menu.
- [removeItemWithTitle:](nspopupbutton/removeitem%28withtitle_%29.md): Removes the item with the specified title from the menu.
- [removeItemAtIndex:](nspopupbutton/removeitem%28at_%29.md): Removes the item at the specified index.

### Getting the user’s selection

- [selectedItem](nspopupbutton/selecteditem.md): The menu item that was last selected by the user.
- [titleOfSelectedItem](nspopupbutton/titleofselecteditem.md): The title of the item that was last selected by the user.
- [indexOfSelectedItem](nspopupbutton/indexofselecteditem.md): The index of the item that was last selected by the user.
- [selectedTag](nspopupbutton/selectedtag.md): The tag of the menu item that was last selected by the user.

### Setting the current selection

- [selectItem:](nspopupbutton/select%28__%29.md): Selects the specified menu item.
- [selectItemAtIndex:](nspopupbutton/selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItemWithTag:](nspopupbutton/selectitem%28withtag_%29.md): Selects the menu item with the specified tag.
- [selectItemWithTitle:](nspopupbutton/selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Getting menu items

- [menu](nspopupbutton/menu.md): The menu associated with the pop-up button.
- [numberOfItems](nspopupbutton/numberofitems.md): The number of items in the menu.
- [itemArray](nspopupbutton/itemarray.md): The array of menu item objects associated with the button.
- [itemAtIndex:](nspopupbutton/item%28at_%29.md): Returns the menu item at the specified index.
- [itemTitleAtIndex:](nspopupbutton/itemtitle%28at_%29.md): Returns the title of the item at the specified index.
- [itemTitles](nspopupbutton/itemtitles.md): An array of strings corresponding to the titles of the items in the menu.
- [itemWithTitle:](nspopupbutton/item%28withtitle_%29.md): Returns the menu item with the specified title.
- [lastItem](nspopupbutton/lastitem.md): The last item in the menu.

### Getting the indices of menu items

- [indexOfItem:](nspopupbutton/index%28of_%29.md): Returns the index of the specified menu item.
- [indexOfItemWithTag:](nspopupbutton/indexofitem%28withtag_%29.md): Returns the index of the menu item with the specified tag.
- [indexOfItemWithTitle:](nspopupbutton/indexofitem%28withtitle_%29.md): Returns the index of the item with the specified title.
- [indexOfItemWithRepresentedObject:](nspopupbutton/indexofitem%28withrepresentedobject_%29.md): Returns the index of the menu item that holds the specified represented object.
- [indexOfItemWithTarget:andAction:](nspopupbutton/indexofitem%28withtarget_andaction_%29.md): Returns the index of the menu item with the specified target and action.

### Setting the cell edge to pop out in restricted situations

- [preferredEdge](nspopupbutton/preferrededge.md): The edge of the button on which to display the menu when screen space is constrained.

### Setting the title

- [setTitle:](nspopupbutton/settitle%28__%29.md): Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

### Setting the state

- [synchronizeTitleAndSelectedItem](nspopupbutton/synchronizetitleandselecteditem%28%29.md): Ensures that the item being displayed by the receiver agrees with the selected item.

### Notifications

- [NSPopUpButtonWillPopUpNotification](nspopupbutton/willpopupnotification.md): Posted when an `NSPopUpButton` object receives a mouse-down event—that is, when the user is about to select an item from the menu.

### Instance Properties

- [altersStateOfSelectedItem](nspopupbutton/altersstateofselecteditem.md): When the value of this property is `YES`, the selected menu item’s `state` is set to `NSControlStateValueOn`. When the value of this property is `NO`, the menu item’s `state` is not changed. When this property changes, the `state` of the currently selected item is updated appropriately. This property is ignored for pull-down buttons.
- [usesItemFromMenu](nspopupbutton/usesitemfrommenu.md): When `usesItemFromMenu` is `YES`, a pull-down button uses the title of the first menu item and hides the first menu item. A pop-up button uses the title of the currently selected menu. The default value is `YES`.

### Type Methods

- [popUpButtonWithMenu:target:action:](nspopupbutton/popupbuttonwithmenu_target_action_.md): Creates a standard pop-up button with a menu, target, and action.
- [pullDownButtonWithImage:menu:](nspopupbutton/pulldownbuttonwithimage_menu_.md): Creates a standard pull-down button with an image and menu.
- [pullDownButtonWithTitle:image:menu:](nspopupbutton/pulldownbuttonwithtitle_image_menu_.md): Creates a standard pull-down button with a title, image, and menu.
- [pullDownButtonWithTitle:menu:](nspopupbutton/pulldownbuttonwithtitle_menu_.md): Creates a standard pull-down button with a title and menu.

## Relationships

### Inherits From

- [NSButton](nsbutton.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.
