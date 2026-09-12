> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdatasource](https://developer.apple.com/documentation/appkit/nscomboboxdatasource)

# NSComboBoxDataSource (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol NSComboBoxDataSource : NSObjectProtocol
```

## Topics

### Instance Methods

- [comboBox(\_:completedString:)](nscomboboxdatasource/combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox(\_:indexOfItemWithStringValue:)](nscomboboxdatasource/combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [comboBox(\_:objectValueForItemAt:)](nscomboboxdatasource/combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.
- [numberOfItems(in:)](nscomboboxdatasource/numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSComboBoxDelegate](nscomboboxdelegate.md): A set of optional methods implemented by delegates of combo box objects.

# NSComboBoxDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol NSComboBoxDataSource <NSObject>
```

## Topics

### Instance Methods

- [comboBox:completedString:](nscomboboxdatasource/combobox%28__completedstring_%29.md): Returns the first item from the pop-up list that starts with the text the user has typed.
- [comboBox:indexOfItemWithStringValue:](nscomboboxdatasource/combobox%28__indexofitemwithstringvalue_%29.md): Returns the index of the combo box item matching the specified string.
- [comboBox:objectValueForItemAtIndex:](nscomboboxdatasource/combobox%28__objectvalueforitemat_%29.md): Returns the object that corresponds to the item at the specified index in the combo box.
- [numberOfItemsInComboBox:](nscomboboxdatasource/numberofitems%28in_%29.md): Returns the number of items that the data source manages for the combo box.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSComboBoxDelegate](nscomboboxdelegate.md): A set of optional methods implemented by delegates of combo box objects.
