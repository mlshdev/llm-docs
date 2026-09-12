> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell](https://developer.apple.com/documentation/appkit/nscomboboxcell)

# NSComboBoxCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The user interface of a combo box.

## Declaration

```swift
class NSComboBoxCell
```

<a id="overview"></a>

## Overview

[NSComboBoxCell](nscomboboxcell.md) is a subclass of [NSTextFieldCell](nstextfieldcell.md) used to implement the user interface of “combo boxes” (see [NSComboBox](nscombobox.md) for information on how combo boxes look and work). The [NSComboBox](nscombobox.md) subclass of [NSTextField](nstextfield.md) uses a single [NSComboBoxCell](nscomboboxcell.md), and essentially all of the [NSComboBox](nscombobox.md) class’s methods simply invoke the corresponding [NSComboBoxCell](nscomboboxcell.md) method.

Also see the [NSComboBoxCellDataSource](nscomboboxcelldatasource.md) protocol, which declares the methods that an [NSComboBoxCell](nscomboboxcell.md) object uses to access the contents of its data source object.

## Topics

### Setting Display Attributes

- [hasVerticalScroller](nscomboboxcell/hasverticalscroller.md): A Boolean value that indicates if the combo box displays a vertical scroller.
- [isButtonBordered](nscomboboxcell/isbuttonbordered.md): A Boolean value that indicates whether the combo box button displays a border.
- [intercellSpacing](nscomboboxcell/intercellspacing.md): The spacing between cells in the combo box’s pop-up list.
- [itemHeight](nscomboboxcell/itemheight.md): The height of each item in the combo box’s pop-up list.
- [numberOfVisibleItems](nscomboboxcell/numberofvisibleitems.md): The maximum number of items visible in the pop-up list at any one time.

### Accessing a Data Source

- [dataSource](nscomboboxcell/datasource.md): The object that provides the data displayed in the combo box’s pop-up list.
- [usesDataSource](nscomboboxcell/usesdatasource.md): A Boolean value that indicates if the combo box uses an external data source to populate its pop-up list.

### Working with an Internal List

- [addItems(withObjectValues:)](nscomboboxcell/additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItem(withObjectValue:)](nscomboboxcell/additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItem(withObjectValue:at:)](nscomboboxcell/insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](nscomboboxcell/objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems()](nscomboboxcell/removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItem(at:)](nscomboboxcell/removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [removeItem(withObjectValue:)](nscomboboxcell/removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.
- [numberOfItems](nscomboboxcell/numberofitems.md): The total number of items in the pop-up list.

### Manipulating the Displayed List

- [indexOfItem(withObjectValue:)](nscomboboxcell/indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.
- [itemObjectValue(at:)](nscomboboxcell/itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [noteNumberOfItemsChanged()](nscomboboxcell/notenumberofitemschanged%28%29.md): Informs the combo box that the number of items in its data source has changed.
- [reloadData()](nscomboboxcell/reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop(\_:)](nscomboboxcell/scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](nscomboboxcell/scrollitematindextovisible%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.

### Manipulating the Selection

- [deselectItem(at:)](nscomboboxcell/deselectitem%28at_%29.md): Deselects the pop-up list item at the given index if it’s selected.
- [indexOfSelectedItem](nscomboboxcell/indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](nscomboboxcell/objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItem(at:)](nscomboboxcell/selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItem(withObjectValue:)](nscomboboxcell/selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.

### Completing the Text Field

- [completedString(\_:)](nscomboboxcell/completedstring%28__%29.md): Returns a string from the combo box’s pop-up list that starts with the given substring.
- [completes](nscomboboxcell/completes.md): A Boolean value that indicates if the combo box tries to complete text entered by the user.

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

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
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cells

- [NSComboBoxCellDataSource](nscomboboxcelldatasource.md)

# NSComboBoxCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The user interface of a combo box.

## Declaration

```objectivec
@interface NSComboBoxCell : NSTextFieldCell
```

<a id="overview"></a>

## Overview

[NSComboBoxCell](nscomboboxcell.md) is a subclass of [NSTextFieldCell](nstextfieldcell.md) used to implement the user interface of “combo boxes” (see [NSComboBox](nscombobox.md) for information on how combo boxes look and work). The [NSComboBox](nscombobox.md) subclass of [NSTextField](nstextfield.md) uses a single [NSComboBoxCell](nscomboboxcell.md), and essentially all of the [NSComboBox](nscombobox.md) class’s methods simply invoke the corresponding [NSComboBoxCell](nscomboboxcell.md) method.

Also see the [NSComboBoxCellDataSource](nscomboboxcelldatasource.md) protocol, which declares the methods that an [NSComboBoxCell](nscomboboxcell.md) object uses to access the contents of its data source object.

## Topics

### Setting Display Attributes

- [hasVerticalScroller](nscomboboxcell/hasverticalscroller.md): A Boolean value that indicates if the combo box displays a vertical scroller.
- [buttonBordered](nscomboboxcell/isbuttonbordered.md): A Boolean value that indicates whether the combo box button displays a border.
- [intercellSpacing](nscomboboxcell/intercellspacing.md): The spacing between cells in the combo box’s pop-up list.
- [itemHeight](nscomboboxcell/itemheight.md): The height of each item in the combo box’s pop-up list.
- [numberOfVisibleItems](nscomboboxcell/numberofvisibleitems.md): The maximum number of items visible in the pop-up list at any one time.

### Accessing a Data Source

- [dataSource](nscomboboxcell/datasource.md): The object that provides the data displayed in the combo box’s pop-up list.
- [usesDataSource](nscomboboxcell/usesdatasource.md): A Boolean value that indicates if the combo box uses an external data source to populate its pop-up list.

### Working with an Internal List

- [addItemsWithObjectValues:](nscomboboxcell/additems%28withobjectvalues_%29.md): Adds multiple objects to the internal item list.
- [addItemWithObjectValue:](nscomboboxcell/additem%28withobjectvalue_%29.md): Adds the specified object to the internal item list.
- [insertItemWithObjectValue:atIndex:](nscomboboxcell/insertitem%28withobjectvalue_at_%29.md): Inserts an object at the specified location in the internal item list.
- [objectValues](nscomboboxcell/objectvalues.md): The combo box’s internal item list in an array.
- [removeAllItems](nscomboboxcell/removeallitems%28%29.md): Removes all items from the combo box’s internal item list.
- [removeItemAtIndex:](nscomboboxcell/removeitem%28at_%29.md): Removes the object at the specified location from the combo box’s internal item list.
- [removeItemWithObjectValue:](nscomboboxcell/removeitem%28withobjectvalue_%29.md): Removes all occurrences of the specified object from the combo box’s internal item list.
- [numberOfItems](nscomboboxcell/numberofitems.md): The total number of items in the pop-up list.

### Manipulating the Displayed List

- [indexOfItemWithObjectValue:](nscomboboxcell/indexofitem%28withobjectvalue_%29.md): Searches the combo box’s internal item list for the given object and returns the matching index number.
- [itemObjectValueAtIndex:](nscomboboxcell/itemobjectvalue%28at_%29.md): Returns the object located at the specified location in the internal item list.
- [noteNumberOfItemsChanged](nscomboboxcell/notenumberofitemschanged%28%29.md): Informs the combo box that the number of items in its data source has changed.
- [reloadData](nscomboboxcell/reloaddata%28%29.md): Marks the combo box as needing redisplay, so that it will reload the data for visible pop-up items and draw the new values.
- [scrollItemAtIndexToTop:](nscomboboxcell/scrollitematindextotop%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](nscomboboxcell/scrollitematindextovisible%28__%29.md): Scrolls the combo box’s pop-up list vertically so that the item at the given index is visible.

### Manipulating the Selection

- [deselectItemAtIndex:](nscomboboxcell/deselectitem%28at_%29.md): Deselects the pop-up list item at the given index if it’s selected.
- [indexOfSelectedItem](nscomboboxcell/indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [objectValueOfSelectedItem](nscomboboxcell/objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItemAtIndex:](nscomboboxcell/selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItemWithObjectValue:](nscomboboxcell/selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.

### Completing the Text Field

- [completedString:](nscomboboxcell/completedstring%28__%29.md): Returns a string from the combo box’s pop-up list that starts with the given substring.
- [completes](nscomboboxcell/completes.md): A Boolean value that indicates if the combo box tries to complete text entered by the user.

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

## See Also

### Cells

- [NSComboBoxCellDataSource](nscomboboxcelldatasource.md)
