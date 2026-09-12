> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox](https://developer.apple.com/documentation/appkit/nscombobox)

# NSComboBox (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that displays a list of values in a pop-up menu where the user selects a value or types in a custom value.

## Declaration

```swift
class NSComboBox
```

<a id="overview"></a>

## Overview

A combo box combines the behavior of an [NSTextField](nstextfield.md) object with an [NSPopUpButton](nspopupbutton.md) object. A combo box displays a list of values from a pop-up list, but also provides a means for users to type in custom values. For example, here’s a combo box in its initial state.

![A screenshot of a collapsed combo box.](https://developer.apple.com/images/com.apple.appkit/media-4305420@2x.png)

Clicking in the text portion of the control allows the user to edit the current value. When the user clicks the down arrow at the right side of the text field, the pop-up list appears.

![A screenshot of an expanded combo box. The first item in the list, Item A, is selected. The remaining three items are expanded and listed below.](https://developer.apple.com/images/com.apple.appkit/media-4305419@2x.png)

The [NSComboBox](nscombobox.md) class uses [NSComboBoxCell](nscomboboxcell.md) to implement its user interface.

Also see the [NSComboBoxDataSource](nscomboboxdatasource.md) protocol, which declares the methods that [NSComboBox](nscombobox.md) uses to access the contents of its data source object.

## Topics

### Setting Display Attributes

- [hasVerticalScroller](nscombobox/hasverticalscroller.md): A Boolean value indicating whether the combo box has a vertical scroller.
- [intercellSpacing](nscombobox/intercellspacing.md): The horizontal and vertical spacing between cells in the pop-up list.
- [isButtonBordered](nscombobox/isbuttonbordered.md): A Boolean value indicating whether the combo box displays a border.
- [itemHeight](nscombobox/itemheight.md): The height of each item in the pop-up list.
- [numberOfVisibleItems](nscombobox/numberofvisibleitems.md): The maximum number of visible items to display in the pop-up list at one time.

### Setting a Data Source

- [dataSource](nscombobox/datasource.md): The object that provides the item data for the combo box.
- [usesDataSource](nscombobox/usesdatasource.md): A Boolean value indicating whether the combo box retrieves its items from a data source object.

### Configuring the Combo Box Items

- [addItems(withObjectValues:)](nscombobox/additems%28withobjectvalues_%29.md): Adds multiple objects to the end of the receiver’s internal item list.
- [addItem(withObjectValue:)](nscombobox/additem%28withobjectvalue_%29.md): Adds an object to the end of the receiver’s internal item list.
- [insertItem(withObjectValue:at:)](nscombobox/insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the receiver’s internal item list.
- [objectValues](nscombobox/objectvalues.md): An array of the items from the combo box’s internal list.
- [removeAllItems()](nscombobox/removeallitems%28%29.md): Removes all items from the receiver’s internal item list.
- [removeItem(at:)](nscombobox/removeitem%28at_%29.md): Removes the object at the specified location from the receiver’s internal item list.
- [removeItem(withObjectValue:)](nscombobox/removeitem%28withobjectvalue_%29.md): Removes all occurrences of the given object from the receiver’s internal item list.
- [numberOfItems](nscombobox/numberofitems.md): The total number of items in the pop-up list.

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](nscombobox/indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValue(at:)](nscombobox/itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged()](nscombobox/notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData()](nscombobox/reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](nscombobox/scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](nscombobox/scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

### Manipulating the Selection

- [deselectItem(at:)](nscombobox/deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](nscombobox/indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](nscombobox/objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItem(at:)](nscombobox/selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItem(withObjectValue:)](nscombobox/selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.

### Completing the Text Field

- [completes](nscombobox/completes.md): A Boolean value indicating whether the combo box tries to complete what the user types.

### Accessing the Delegate

- [delegate](nscombobox/delegate.md): Sets the receiver’s delegate.

### Notifications

- [selectionDidChangeNotification](nscombobox/selectiondidchangenotification.md): Posted after the pop-up list selection of the `NSComboBox` changes.
- [selectionIsChangingNotification](nscombobox/selectionischangingnotification.md): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [willDismissNotification](nscombobox/willdismissnotification.md): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [willPopUpNotification](nscombobox/willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.

### Structures

- [NSComboBox.SelectionDidChangeMessage](nscombobox/selectiondidchangemessage.md)
- [NSComboBox.SelectionIsChangingMessage](nscombobox/selectionischangingmessage.md)
- [NSComboBox.WillDismissMessage](nscombobox/willdismissmessage.md)
- [NSComboBox.WillPopUpMessage](nscombobox/willpopupmessage.md)

## Relationships

### Inherits From

- [NSTextField](nstextfield.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityStaticText](nsaccessibilitystatictext.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextContent](nstextcontent.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSComboBox (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that displays a list of values in a pop-up menu where the user selects a value or types in a custom value.

## Declaration

```objectivec
@interface NSComboBox : NSTextField
```

<a id="overview"></a>

## Overview

A combo box combines the behavior of an [NSTextField](nstextfield.md) object with an [NSPopUpButton](nspopupbutton.md) object. A combo box displays a list of values from a pop-up list, but also provides a means for users to type in custom values. For example, here’s a combo box in its initial state.

![A screenshot of a collapsed combo box.](https://developer.apple.com/images/com.apple.appkit/media-4305420@2x.png)

Clicking in the text portion of the control allows the user to edit the current value. When the user clicks the down arrow at the right side of the text field, the pop-up list appears.

![A screenshot of an expanded combo box. The first item in the list, Item A, is selected. The remaining three items are expanded and listed below.](https://developer.apple.com/images/com.apple.appkit/media-4305419@2x.png)

The [NSComboBox](nscombobox.md) class uses [NSComboBoxCell](nscomboboxcell.md) to implement its user interface.

Also see the [NSComboBoxDataSource](nscomboboxdatasource.md) protocol, which declares the methods that [NSComboBox](nscombobox.md) uses to access the contents of its data source object.

## Topics

### Setting Display Attributes

- [hasVerticalScroller](nscombobox/hasverticalscroller.md): A Boolean value indicating whether the combo box has a vertical scroller.
- [intercellSpacing](nscombobox/intercellspacing.md): The horizontal and vertical spacing between cells in the pop-up list.
- [buttonBordered](nscombobox/isbuttonbordered.md): A Boolean value indicating whether the combo box displays a border.
- [itemHeight](nscombobox/itemheight.md): The height of each item in the pop-up list.
- [numberOfVisibleItems](nscombobox/numberofvisibleitems.md): The maximum number of visible items to display in the pop-up list at one time.

### Setting a Data Source

- [dataSource](nscombobox/datasource.md): The object that provides the item data for the combo box.
- [usesDataSource](nscombobox/usesdatasource.md): A Boolean value indicating whether the combo box retrieves its items from a data source object.

### Configuring the Combo Box Items

- [addItemsWithObjectValues:](nscombobox/additems%28withobjectvalues_%29.md): Adds multiple objects to the end of the receiver’s internal item list.
- [addItemWithObjectValue:](nscombobox/additem%28withobjectvalue_%29.md): Adds an object to the end of the receiver’s internal item list.
- [insertItemWithObjectValue:atIndex:](nscombobox/insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the receiver’s internal item list.
- [objectValues](nscombobox/objectvalues.md): An array of the items from the combo box’s internal list.
- [removeAllItems](nscombobox/removeallitems%28%29.md): Removes all items from the receiver’s internal item list.
- [removeItemAtIndex:](nscombobox/removeitem%28at_%29.md): Removes the object at the specified location from the receiver’s internal item list.
- [removeItemWithObjectValue:](nscombobox/removeitem%28withobjectvalue_%29.md): Removes all occurrences of the given object from the receiver’s internal item list.
- [numberOfItems](nscombobox/numberofitems.md): The total number of items in the pop-up list.

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](nscombobox/indexofitem%28withobjectvalue_%29.md): Searches the receiver’s internal item list for the specified object and returns the lowest matching index.
- [itemObjectValueAtIndex:](nscombobox/itemobjectvalue%28at_%29.md): Returns the object located at the given index within the receiver’s internal item list.
- [noteNumberOfItemsChanged](nscombobox/notenumberofitemschanged%28%29.md): Informs the receiver that the number of items in its data source has changed.
- [reloadData](nscombobox/reloaddata%28%29.md): Marks the receiver as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](nscombobox/scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](nscombobox/scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

### Manipulating the Selection

- [deselectItemAtIndex:](nscombobox/deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](nscombobox/indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](nscombobox/objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItemAtIndex:](nscombobox/selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItemWithObjectValue:](nscombobox/selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.

### Completing the Text Field

- [completes](nscombobox/completes.md): A Boolean value indicating whether the combo box tries to complete what the user types.

### Accessing the Delegate

- [delegate](nscombobox/delegate.md): Sets the receiver’s delegate.

### Notifications

- [NSComboBoxSelectionDidChangeNotification](nscombobox/selectiondidchangenotification.md): Posted after the pop-up list selection of the `NSComboBox` changes.
- [NSComboBoxSelectionIsChangingNotification](nscombobox/selectionischangingnotification.md): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [NSComboBoxWillDismissNotification](nscombobox/willdismissnotification.md): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [NSComboBoxWillPopUpNotification](nscombobox/willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.

## Relationships

### Inherits From

- [NSTextField](nstextfield.md)
