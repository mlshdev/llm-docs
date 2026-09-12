> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/columndidresizenotification](https://developer.apple.com/documentation/appkit/nstableview/columndidresizenotification)

# columnDidResizeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever a column is resized in an `NSTableView` object.

## Declaration

```swift
class let columnDidResizeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the table view in which a column was resized. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSTableColumn"` | The column that was resized. |
| `@"NSOldWidth"` | An NSNumber containing the integer value of the column’s original width. |

To observe this notification using Swift concurrency, use [NSTableView.ColumnDidResizeMessage](columndidresizemessage.md).

## See Also

### Notifications

- [columnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.
- [selectionIsChangingNotification](selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).

# NSTableViewColumnDidResizeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever a column is resized in an `NSTableView` object.

## Declaration

```objectivec
extern NSNotificationName NSTableViewColumnDidResizeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the table view in which a column was resized. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSTableColumn"` | The column that was resized. |
| `@"NSOldWidth"` | An NSNumber containing the integer value of the column’s original width. |

To observe this notification using Swift concurrency, use [NSTableView.ColumnDidResizeMessage](columndidresizemessage.md).

## See Also

### Notifications

- [NSTableViewColumnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSTableView` object.
- [NSTableViewSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.
- [NSTableViewSelectionIsChangingNotification](selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).
