> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdatasource/numberofitems(in:)](https://developer.apple.com/documentation/appkit/nscomboboxdatasource/numberofitems(in:))

# numberOfItems(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of items that the data source manages for the combo box.

## Declaration

```swift
@MainActor optional func numberOfItems(in comboBox: NSComboBox) -> Int
```

## Parameters

- `comboBox`: The combo box.

<a id="return-value"></a>

## Return Value

The number of items that the data source object manages for the specified combo box.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to determine how many items it should display in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, you must implement this method if you are not providing the data for the combo box using Cocoa bindings.

## See Also

### Instance Methods

- [comboBox(\_:completedString:)](combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox(\_:indexOfItemWithStringValue:)](combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [comboBox(\_:objectValueForItemAt:)](combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.

# numberOfItemsInComboBox: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of items that the data source manages for the combo box.

## Declaration

```objectivec
- (NSInteger) numberOfItemsInComboBox:(NSComboBox *) comboBox;
```

## Parameters

- `comboBox`: The combo box.

<a id="return-value"></a>

## Return Value

The number of items that the data source object manages for the specified combo box.

<a id="Discussion"></a>

## Discussion

An `NSComboBox` object uses this method to determine how many items it should display in its pop-up list.

> **Important**

>  While this method is marked as `@optional` in the protocol, you must implement this method if you are not providing the data for the combo box using Cocoa bindings.

## See Also

### Instance Methods

- [comboBox:completedString:](combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox:indexOfItemWithStringValue:](combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [comboBox:objectValueForItemAtIndex:](combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.
