> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectiondidchangenotification](https://developer.apple.com/documentation/appkit/nstableview/selectiondidchangenotification)

# selectionDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted after an `NSTableView` object’s selection changes.

## Declaration

```swift
class let selectionDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the table view whose selection changed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSTableView.SelectionDidChangeMessage](selectiondidchangemessage.md).

## See Also

### Notifications

- [columnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [columnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [selectionIsChangingNotification](selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).

# NSTableViewSelectionDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted after an `NSTableView` object’s selection changes.

## Declaration

```objectivec
extern NSNotificationName NSTableViewSelectionDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the table view whose selection changed. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSTableView.SelectionDidChangeMessage](selectiondidchangemessage.md).

## See Also

### Notifications

- [NSTableViewColumnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [NSTableViewColumnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [NSTableViewSelectionIsChangingNotification](selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).
