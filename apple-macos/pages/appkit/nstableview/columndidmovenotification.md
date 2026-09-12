> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/columndidmovenotification](https://developer.apple.com/documentation/appkit/nstableview/columndidmovenotification)

# columnDidMoveNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever a column is moved by user action in an `NSTableView` object.

## Declaration

```swift
class let columnDidMoveNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the table view in which a column moved. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldColumn"` | An `NSNumber` object containing the integer value of the column’s original index. |
| `@"NSNewColumn"` | An `NSNumber` object containing the integer value of the column’s present index. |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSTableView.ColumnDidMoveMessage](columndidmovemessage.md).

- [moveColumn(\_:toColumn:)](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.

### Notifications

- [columnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.
- [selectionIsChangingNotification](selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).

# NSTableViewColumnDidMoveNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever a column is moved by user action in an `NSTableView` object.

## Declaration

```objectivec
extern NSNotificationName NSTableViewColumnDidMoveNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the table view in which a column moved. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldColumn"` | An `NSNumber` object containing the integer value of the column’s original index. |
| `@"NSNewColumn"` | An `NSNumber` object containing the integer value of the column’s present index. |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSTableView.ColumnDidMoveMessage](columndidmovemessage.md).

- [moveColumn:toColumn:](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.

### Notifications

- [NSTableViewColumnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSTableView` object.
- [NSTableViewSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after an `NSTableView` object’s selection changes.
- [NSTableViewSelectionIsChangingNotification](selectionischangingnotification.md): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).
