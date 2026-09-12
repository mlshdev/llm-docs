> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdelegate/comboboxselectiondidchange(_:)](https://developer.apple.com/documentation/appkit/nscomboboxdelegate/comboboxselectiondidchange(_:))

# comboBoxSelectionDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the delegate that the pop-up list selection has finished changing.

## Declaration

```swift
@MainActor optional func comboBoxSelectionDidChange(_ notification: Notification)
```

## Parameters

- `notification`: A notification named  [selectionDidChangeNotification](../nscombobox/selectiondidchangenotification.md).

## See Also

### Related Documentation

- [comboBoxSelectionIsChanging(\_:)](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.

### Manipulating the selection

- [comboBoxSelectionIsChanging(\_:)](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillDismiss(\_:)](comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.
- [comboBoxWillPopUp(\_:)](comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.

# comboBoxSelectionDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the pop-up list selection has finished changing.

## Declaration

```objectivec
- (void) comboBoxSelectionDidChange:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named  [NSComboBoxSelectionDidChangeNotification](../nscombobox/selectiondidchangenotification.md).

## See Also

### Related Documentation

- [comboBoxSelectionIsChanging:](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.

### Manipulating the selection

- [comboBoxSelectionIsChanging:](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillDismiss:](comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.
- [comboBoxWillPopUp:](comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.
