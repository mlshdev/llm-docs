> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxdelegate/comboboxwilldismiss(_:)](https://developer.apple.com/documentation/appkit/nscomboboxdelegate/comboboxwilldismiss(_:))

# comboBoxWillDismiss(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the delegate that the pop-up list is about to be dismissed.

## Declaration

```swift
@MainActor optional func comboBoxWillDismiss(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willDismissNotification](../nscombobox/willdismissnotification.md).

## See Also

### Manipulating the selection

- [comboBoxSelectionDidChange(\_:)](comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxSelectionIsChanging(\_:)](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillPopUp(\_:)](comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.

# comboBoxWillDismiss: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the pop-up list is about to be dismissed.

## Declaration

```objectivec
- (void) comboBoxWillDismiss:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSComboBoxWillDismissNotification](../nscombobox/willdismissnotification.md).

## See Also

### Manipulating the selection

- [comboBoxSelectionDidChange:](comboboxselectiondidchange%28__%29.md): Informs the delegate that the pop-up list selection has finished changing.
- [comboBoxSelectionIsChanging:](comboboxselectionischanging%28__%29.md): Informs the delegate that the pop-up list selection is changing.
- [comboBoxWillPopUp:](comboboxwillpopup%28__%29.md): Informs the delegate that the pop-up list is about to be displayed.
