> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcelldatasource/comboboxcell(_:objectvalueforitemat:)](https://developer.apple.com/documentation/appkit/nscomboboxcelldatasource/comboboxcell(_:objectvalueforitemat:))

# comboBoxCell(\_:objectValueForItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object that corresponds to the item at the given index in the combo box cell.

## Declaration

```swift
optional func comboBoxCell(_ comboBoxCell: NSComboBoxCell, objectValueForItemAt index: Int) -> Any
```

## Parameters

- `comboBoxCell`: The combo box cell for which to return the item.
- `index`: The index of the item to return.

<a id="return-value"></a>

## Return Value

The object corresponding to the item at the specified index in the given combo box cell.

<a id="Discussion"></a>

## Discussion

An `NSComboBoxCell` object uses this method to populate the items displayed in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, **you must implement this method if you are not providing the data for the combo box using using Cocoa bindings**.

## See Also

### Related Documentation

- [NSComboBoxCellDataSource](../nscomboboxcelldatasource.md)

### Instance Methods

- [comboBoxCell(\_:completedString:)](comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell(\_:indexOfItemWithStringValue:)](comboboxcell%28__indexofitemwithstringvalue_%29.md): Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.
- [numberOfItems(in:)](numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.

# comboBoxCell:objectValueForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object that corresponds to the item at the given index in the combo box cell.

## Declaration

```objectivec
- (id) comboBoxCell:(NSComboBoxCell *) comboBoxCell objectValueForItemAtIndex:(NSInteger) index;
```

## Parameters

- `comboBoxCell`: The combo box cell for which to return the item.
- `index`: The index of the item to return.

<a id="return-value"></a>

## Return Value

The object corresponding to the item at the specified index in the given combo box cell.

<a id="Discussion"></a>

## Discussion

An `NSComboBoxCell` object uses this method to populate the items displayed in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, **you must implement this method if you are not providing the data for the combo box using using Cocoa bindings**.

## See Also

### Related Documentation

- [NSComboBoxCellDataSource](../nscomboboxcelldatasource.md)

### Instance Methods

- [comboBoxCell:completedString:](comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell:indexOfItemWithStringValue:](comboboxcell%28__indexofitemwithstringvalue_%29.md): Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.
- [numberOfItemsInComboBoxCell:](numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.
