> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcelldatasource/numberofitems(in:)](https://developer.apple.com/documentation/appkit/nscomboboxcelldatasource/numberofitems(in:))

# numberOfItems(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of items managed for the combo box cell by your data source object.

## Declaration

```swift
optional func numberOfItems(in comboBoxCell: NSComboBoxCell) -> Int
```

## Parameters

- `comboBoxCell`: The combo box cell for which your data source manages items.

<a id="return-value"></a>

## Return Value

The number of items your data source object manages.

<a id="Discussion"></a>

## Discussion

An `NSComboBoxCell` object uses this method to determine how many items it should display in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, **you must implement this method if you are not providing the data for the combo box using Cocoa bindings**.

## See Also

### Instance Methods

- [comboBoxCell(\_:completedString:)](comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell(\_:indexOfItemWithStringValue:)](comboboxcell%28__indexofitemwithstringvalue_%29.md): Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.
- [comboBoxCell(\_:objectValueForItemAt:)](comboboxcell%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the given index in the combo box cell.

# numberOfItemsInComboBoxCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of items managed for the combo box cell by your data source object.

## Declaration

```objectivec
- (NSInteger) numberOfItemsInComboBoxCell:(NSComboBoxCell *) comboBoxCell;
```

## Parameters

- `comboBoxCell`: The combo box cell for which your data source manages items.

<a id="return-value"></a>

## Return Value

The number of items your data source object manages.

<a id="Discussion"></a>

## Discussion

An `NSComboBoxCell` object uses this method to determine how many items it should display in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, **you must implement this method if you are not providing the data for the combo box using Cocoa bindings**.

## See Also

### Instance Methods

- [comboBoxCell:completedString:](comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell:indexOfItemWithStringValue:](comboboxcell%28__indexofitemwithstringvalue_%29.md): Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.
- [comboBoxCell:objectValueForItemAtIndex:](comboboxcell%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the given index in the combo box cell.
