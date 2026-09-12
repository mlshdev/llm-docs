> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdelegate/comboboxselectionischanging(_:)](https://developer.apple.com/documentation/appkit/nscomboboxdelegate/comboboxselectionischanging(_:))

# comboBoxSelectionIsChanging(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the delegate that the pop-up list selection is changing.

## Declaration

```swift
@MainActor optional func comboBoxSelectionIsChanging(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [selectionIsChangingNotification](../nscombobox/selectionischangingnotification.md).

## See Also

### Manipulating the selection

- [comboBoxSelectionDidChange(\_:)](comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxWillDismiss(\_:)](comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.
- [comboBoxWillPopUp(\_:)](comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.

# comboBoxSelectionIsChanging: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the pop-up list selection is changing.

## Declaration

```objectivec
- (void) comboBoxSelectionIsChanging:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSComboBoxSelectionIsChangingNotification](../nscombobox/selectionischangingnotification.md).

## See Also

### Manipulating the selection

- [comboBoxSelectionDidChange:](comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxWillDismiss:](comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.
- [comboBoxWillPopUp:](comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.
