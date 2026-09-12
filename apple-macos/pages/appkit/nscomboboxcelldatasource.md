> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcelldatasource](https://developer.apple.com/documentation/appkit/nscomboboxcelldatasource)

# NSComboBoxCellDataSource (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol NSComboBoxCellDataSource : NSObjectProtocol
```

## Topics

### Instance Methods

- [comboBoxCell(\_:completedString:)](nscomboboxcelldatasource/comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell(\_:indexOfItemWithStringValue:)](nscomboboxcelldatasource/comboboxcell%28__indexofitemwithstringvalue_%29.md): Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.
- [comboBoxCell(\_:objectValueForItemAt:)](nscomboboxcelldatasource/comboboxcell%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the given index in the combo box cell.
- [numberOfItems(in:)](nscomboboxcelldatasource/numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cells

- [NSComboBoxCell](nscomboboxcell.md): The user interface of a combo box.

# NSComboBoxCellDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol NSComboBoxCellDataSource <NSObject>
```

## Topics

### Instance Methods

- [comboBoxCell:completedString:](nscomboboxcelldatasource/comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell:indexOfItemWithStringValue:](nscomboboxcelldatasource/comboboxcell%28__indexofitemwithstringvalue_%29.md): Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.
- [comboBoxCell:objectValueForItemAtIndex:](nscomboboxcelldatasource/comboboxcell%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the given index in the combo box cell.
- [numberOfItemsInComboBoxCell:](nscomboboxcelldatasource/numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cells

- [NSComboBoxCell](nscomboboxcell.md): The user interface of a combo box.
