> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcelldatasource/comboboxcell(_:indexofitemwithstringvalue:)](https://developer.apple.com/documentation/appkit/nscomboboxcelldatasource/comboboxcell(_:indexofitemwithstringvalue:))

# comboBoxCell(\_:indexOfItemWithStringValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.

## Declaration

```swift
optional func comboBoxCell(_ comboBoxCell: NSComboBoxCell, indexOfItemWithStringValue string: String) -> Int
```

## Parameters

- `comboBoxCell`: The combo box cell.
- `string`: The string to match. If [comboBoxCell(\_:completedString:)](comboboxcell%28__completedstring_%29.md) is implemented, `aString` is the string returned by that method. Otherwise, `aString` is the text that the user has typed.

<a id="return-value"></a>

## Return Value

The index for the pop-up list item matching `aString`, or `NSNotFound` if no item matches.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the receiver does not synchronize the pop-up list’s selected item with the text field’s contents.

## See Also

### Instance Methods

- [comboBoxCell(\_:completedString:)](comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell(\_:objectValueForItemAt:)](comboboxcell%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the given index in the combo box cell.
- [numberOfItems(in:)](numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.

# comboBoxCell:indexOfItemWithStringValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked by an `NSComboBoxCell` object to synchronize the pop-up list’s selected item with the text field’s contents.

## Declaration

```objectivec
- (NSUInteger) comboBoxCell:(NSComboBoxCell *) comboBoxCell indexOfItemWithStringValue:(NSString *) string;
```

## Parameters

- `comboBoxCell`: The combo box cell.
- `string`: The string to match. If [comboBoxCell:completedString:](comboboxcell%28__completedstring_%29.md) is implemented, `aString` is the string returned by that method. Otherwise, `aString` is the text that the user has typed.

<a id="return-value"></a>

## Return Value

The index for the pop-up list item matching `aString`, or `NSNotFound` if no item matches.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the receiver does not synchronize the pop-up list’s selected item with the text field’s contents.

## See Also

### Instance Methods

- [comboBoxCell:completedString:](comboboxcell%28__completedstring_%29.md): Returns the item from the combo box’s pop-up list that matches the text entered by the user.
- [comboBoxCell:objectValueForItemAtIndex:](comboboxcell%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the given index in the combo box cell.
- [numberOfItemsInComboBoxCell:](numberofitems%28in_%29.md): Returns the number of items managed for the combo box cell by your data source object.
