> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/columndidmovenotification](https://developer.apple.com/documentation/appkit/nsoutlineview/columndidmovenotification)

# columnDidMoveNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever a column is moved by user action in an `NSOutlineView` object.

## Declaration

```swift
class let columnDidMoveNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSOutlineView` object in which a column moved. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldColumn"` | An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the integer value of the column’s original index |
| `@"NSNewColumn"` | An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the integer value of the column’s present index |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSOutlineView.ColumnDidMoveMessage](columndidmovemessage.md).

- [moveColumn(\_:toColumn:)](../nstableview/movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.

### Notifications

- [columnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSOutlineView` object.
- [itemDidCollapseNotification](itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [itemDidExpandNotification](itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [itemWillCollapseNotification](itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [itemWillExpandNotification](itemwillexpandnotification.md): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [selectionIsChangingNotification](selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).

# NSOutlineViewColumnDidMoveNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever a column is moved by user action in an `NSOutlineView` object.

## Declaration

```objectivec
extern NSNotificationName NSOutlineViewColumnDidMoveNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSOutlineView` object in which a column moved. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldColumn"` | An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the integer value of the column’s original index |
| `@"NSNewColumn"` | An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the integer value of the column’s present index |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSOutlineView.ColumnDidMoveMessage](columndidmovemessage.md).

- [moveColumn:toColumn:](../nstableview/movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.

### Notifications

- [NSOutlineViewColumnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSOutlineView` object.
- [NSOutlineViewItemDidCollapseNotification](itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [NSOutlineViewItemDidExpandNotification](itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [NSOutlineViewItemWillCollapseNotification](itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewItemWillExpandNotification](itemwillexpandnotification.md): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [NSOutlineViewSelectionIsChangingNotification](selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).
