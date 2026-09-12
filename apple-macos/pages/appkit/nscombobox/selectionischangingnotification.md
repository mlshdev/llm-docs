> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/selectionischangingnotification](https://developer.apple.com/documentation/appkit/nscombobox/selectionischangingnotification)

# selectionIsChangingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever the pop-up list selection of the `NSComboBox` is changing.

## Declaration

```swift
class let selectionIsChangingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSComboBox` whose selection is changing. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSComboBox.SelectionIsChangingMessage](selectionischangingmessage.md).

## See Also

### Notifications

- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after the pop-up list selection of the `NSComboBox` changes.
- [willDismissNotification](willdismissnotification.md): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [willPopUpNotification](willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.

# NSComboBoxSelectionIsChangingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever the pop-up list selection of the `NSComboBox` is changing.

## Declaration

```objectivec
extern NSNotificationName NSComboBoxSelectionIsChangingNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSComboBox` whose selection is changing. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSComboBox.SelectionIsChangingMessage](selectionischangingmessage.md).

## See Also

### Notifications

- [NSComboBoxSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after the pop-up list selection of the `NSComboBox` changes.
- [NSComboBoxWillDismissNotification](willdismissnotification.md): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [NSComboBoxWillPopUpNotification](willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.
