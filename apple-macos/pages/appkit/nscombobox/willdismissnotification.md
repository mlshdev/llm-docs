> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/willdismissnotification](https://developer.apple.com/documentation/appkit/nscombobox/willdismissnotification)

# willDismissNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.

## Declaration

```swift
class let willDismissNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSComboBox` whose pop-up list will be dismissed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSComboBox.WillDismissMessage](willdismissmessage.md).

## See Also

### Notifications

- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after the pop-up list selection of the `NSComboBox` changes.
- [selectionIsChangingNotification](selectionischangingnotification.md): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [willPopUpNotification](willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.

# NSComboBoxWillDismissNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.

## Declaration

```objectivec
extern NSNotificationName NSComboBoxWillDismissNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSComboBox` whose pop-up list will be dismissed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSComboBox.WillDismissMessage](willdismissmessage.md).

## See Also

### Notifications

- [NSComboBoxSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after the pop-up list selection of the `NSComboBox` changes.
- [NSComboBoxSelectionIsChangingNotification](selectionischangingnotification.md): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [NSComboBoxWillPopUpNotification](willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.
