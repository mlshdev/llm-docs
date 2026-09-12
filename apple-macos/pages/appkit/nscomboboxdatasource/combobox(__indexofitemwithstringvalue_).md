> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdatasource/combobox(_:indexofitemwithstringvalue:)](https://developer.apple.com/documentation/appkit/nscomboboxdatasource/combobox(_:indexofitemwithstringvalue:))

# comboBox(\_:indexOfItemWithStringValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the combo box item matching the specified string.

## Declaration

```swift
@MainActor optional func comboBox(_ comboBox: NSComboBox, indexOfItemWithStringValue string: String) -> Int
```

## Parameters

- `comboBox`: The combo box.
- `string`: The string to match against the items in the combo box.  If the datasource implements[comboBox(\_:completedString:)](combobox%28__completedstring_%29.md), this is the string returned by that method. Otherwise, it is the text that the user has typed.

<a id="return-value"></a>

## Return Value

The index for the item that matches the specified string, or `NSNotFound` if no item matches.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to synchronize the pop-up list’s selected item with the text field’s contents.  If you don’t implement this method the receiver does not synchronize the pop-up list’s selected item with the text field’s contents.

## See Also

### Instance Methods

- [comboBox(\_:completedString:)](combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox(\_:objectValueForItemAt:)](combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.
- [numberOfItems(in:)](numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.

# comboBox:indexOfItemWithStringValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the combo box item matching the specified string.

## Declaration

```objectivec
- (NSUInteger) comboBox:(NSComboBox *) comboBox indexOfItemWithStringValue:(NSString *) string;
```

## Parameters

- `comboBox`: The combo box.
- `string`: The string to match against the items in the combo box.  If the datasource implements[comboBox:completedString:](combobox%28__completedstring_%29.md), this is the string returned by that method. Otherwise, it is the text that the user has typed.

<a id="return-value"></a>

## Return Value

The index for the item that matches the specified string, or `NSNotFound` if no item matches.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to synchronize the pop-up list’s selected item with the text field’s contents.  If you don’t implement this method the receiver does not synchronize the pop-up list’s selected item with the text field’s contents.

## See Also

### Instance Methods

- [comboBox:completedString:](combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox:objectValueForItemAtIndex:](combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.
- [numberOfItemsInComboBox:](numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.
