> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdatasource/combobox(_:completedstring:)](https://developer.apple.com/documentation/appkit/nscomboboxdatasource/combobox(_:completedstring:))

# comboBox(\_:completedString:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first item from the pop-up list that starts with the text the user has typed.

## Declaration

```swift
@MainActor optional func comboBox(_ comboBox: NSComboBox, completedString string: String) -> String?
```

## Parameters

- `comboBox`: The combo box.
- `string`: The string to match against items in the combo box’s pop-up list. This is text that the user has typed.

<a id="return-value"></a>

## Return Value

The first complete string from the items in the combo box’s pop-up list that starts with the string in `uncompletedString`.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to perform incremental—or “smart”—searches when the user types into the text field.  As the user types in the text field, the receiver uses this method to search for items from the pop-up list that start with what the user has typed. The receiver adds the new text to the end of the field and selects the new text, so when the user types another character, it replaces the new text.

This method is optional. If you don’t implement it, the receiver does not perform incremental searches.

## See Also

### Instance Methods

- [comboBox(\_:indexOfItemWithStringValue:)](combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [comboBox(\_:objectValueForItemAt:)](combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.
- [numberOfItems(in:)](numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.

# comboBox:completedString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first item from the pop-up list that starts with the text the user has typed.

## Declaration

```objectivec
- (NSString *) comboBox:(NSComboBox *) comboBox completedString:(NSString *) string;
```

## Parameters

- `comboBox`: The combo box.
- `string`: The string to match against items in the combo box’s pop-up list. This is text that the user has typed.

<a id="return-value"></a>

## Return Value

The first complete string from the items in the combo box’s pop-up list that starts with the string in `uncompletedString`.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to perform incremental—or “smart”—searches when the user types into the text field.  As the user types in the text field, the receiver uses this method to search for items from the pop-up list that start with what the user has typed. The receiver adds the new text to the end of the field and selects the new text, so when the user types another character, it replaces the new text.

This method is optional. If you don’t implement it, the receiver does not perform incremental searches.

## See Also

### Instance Methods

- [comboBox:indexOfItemWithStringValue:](combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [comboBox:objectValueForItemAtIndex:](combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.
- [numberOfItemsInComboBox:](numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.
