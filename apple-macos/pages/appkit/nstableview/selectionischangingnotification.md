> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectionischangingnotification](https://developer.apple.com/documentation/appkit/nstableview/selectionischangingnotification)

# selectionIsChangingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).

## Declaration

```swift
class let selectionIsChangingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Note that the notification is sent only for mouse events that change the table’s selection, not keyboard events. The notification object is the table view whose selection is changing. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSTableView.SelectionIsChangingMessage](selectionischangingmessage.md).

## See Also

### Notifications

- [columnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [columnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.

# NSTableViewSelectionIsChangingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).

## Declaration

```objectivec
extern NSNotificationName NSTableViewSelectionIsChangingNotification;
```

<a id="Discussion"></a>

## Discussion

Note that the notification is sent only for mouse events that change the table’s selection, not keyboard events. The notification object is the table view whose selection is changing. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSTableView.SelectionIsChangingMessage](selectionischangingmessage.md).

## See Also

### Notifications

- [NSTableViewColumnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [NSTableViewColumnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [NSTableViewSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.
