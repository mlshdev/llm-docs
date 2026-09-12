> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdelegate](https://developer.apple.com/documentation/appkit/nscomboboxdelegate)

# NSComboBoxDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of combo box objects.

## Declaration

```swift
protocol NSComboBoxDelegate : NSTextFieldDelegate
```

## Topics

### Manipulating the selection

- [comboBoxSelectionDidChange(\_:)](nscomboboxdelegate/comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxSelectionIsChanging(\_:)](nscomboboxdelegate/comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillDismiss(\_:)](nscomboboxdelegate/comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.
- [comboBoxWillPopUp(\_:)](nscomboboxdelegate/comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTextFieldDelegate](nstextfielddelegate.md)

## See Also

### Management

- [NSComboBoxDataSource](nscomboboxdatasource.md)

# NSComboBoxDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of combo box objects.

## Declaration

```objectivec
@protocol NSComboBoxDelegate <NSTextFieldDelegate>
```

## Topics

### Manipulating the selection

- [comboBoxSelectionDidChange:](nscomboboxdelegate/comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxSelectionIsChanging:](nscomboboxdelegate/comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillDismiss:](nscomboboxdelegate/comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.
- [comboBoxWillPopUp:](nscomboboxdelegate/comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.

## Relationships

### Inherits From

- [NSTextFieldDelegate](nstextfielddelegate.md)

## See Also

### Management

- [NSComboBoxDataSource](nscomboboxdatasource.md)
