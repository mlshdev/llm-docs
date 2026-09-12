> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdatasource/combobox(_:objectvalueforitemat:)](https://developer.apple.com/documentation/appkit/nscomboboxdatasource/combobox(_:objectvalueforitemat:))

# comboBox(\_:objectValueForItemAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object that corresponds to the item at the specified index in the combo box.

## Declaration

```swift
@MainActor optional func comboBox(_ comboBox: NSComboBox, objectValueForItemAt index: Int) -> Any?
```

## Parameters

- `comboBox`: The combo box.
- `index`: The index of the item to return.

<a id="return-value"></a>

## Return Value

The object corresponding to the specified index number.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to populate the items displayed in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, you must implement this method if you are not providing the data for the combo box using Cocoa bindings.

## See Also

### Related Documentation

- [NSComboBoxDataSource](../nscomboboxdatasource.md)

### Instance Methods

- [comboBox(\_:completedString:)](combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox(\_:indexOfItemWithStringValue:)](combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [numberOfItems(in:)](numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.

# comboBox:objectValueForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object that corresponds to the item at the specified index in the combo box.

## Declaration

```objectivec
- (id) comboBox:(NSComboBox *) comboBox objectValueForItemAtIndex:(NSInteger) index;
```

## Parameters

- `comboBox`: The combo box.
- `index`: The index of the item to return.

<a id="return-value"></a>

## Return Value

The object corresponding to the specified index number.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to populate the items displayed in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, you must implement this method if you are not providing the data for the combo box using Cocoa bindings.

## See Also

### Related Documentation

- [NSComboBoxDataSource](../nscomboboxdatasource.md)

### Instance Methods

- [comboBox:completedString:](combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox:indexOfItemWithStringValue:](combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [numberOfItemsInComboBox:](numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.
