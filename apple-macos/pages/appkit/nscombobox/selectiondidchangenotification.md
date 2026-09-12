> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/selectiondidchangenotification](https://developer.apple.com/documentation/appkit/nscombobox/selectiondidchangenotification)

# selectionDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted after the pop-up list selection of the `NSComboBox` changes.

## Declaration

```swift
class let selectionDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSComboBox` whose selection changed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSComboBox.SelectionDidChangeMessage](selectiondidchangemessage.md).

## See Also

### Notifications

- [selectionIsChangingNotification](selectionischangingnotification.md): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [willDismissNotification](willdismissnotification.md): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [willPopUpNotification](willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.

# NSComboBoxSelectionDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted after the pop-up list selection of the `NSComboBox` changes.

## Declaration

```objectivec
extern NSNotificationName NSComboBoxSelectionDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSComboBox` whose selection changed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSComboBox.SelectionDidChangeMessage](selectiondidchangemessage.md).

## See Also

### Notifications

- [NSComboBoxSelectionIsChangingNotification](selectionischangingnotification.md): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [NSComboBoxWillDismissNotification](willdismissnotification.md): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [NSComboBoxWillPopUpNotification](willpopupnotification.md): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.
