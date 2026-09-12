> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdelegate/comboboxwillpopup(_:)](https://developer.apple.com/documentation/appkit/nscomboboxdelegate/comboboxwillpopup(_:))

# comboBoxWillPopUp(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the delegate that the pop-up list is about to be displayed.

## Declaration

```swift
@MainActor optional func comboBoxWillPopUp(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willPopUpNotification](../nscombobox/willpopupnotification.md).

## See Also

### Manipulating the selection

- [comboBoxSelectionDidChange(\_:)](comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxSelectionIsChanging(\_:)](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillDismiss(\_:)](comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.

# comboBoxWillPopUp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the pop-up list is about to be displayed.

## Declaration

```objectivec
- (void) comboBoxWillPopUp:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSComboBoxWillPopUpNotification](../nscombobox/willpopupnotification.md).

## See Also

### Manipulating the selection

- [comboBoxSelectionDidChange:](comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxSelectionIsChanging:](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillDismiss:](comboboxwilldismiss%28__%29.md): Informs the delegate that the pop-up list is about to be dismissed.
