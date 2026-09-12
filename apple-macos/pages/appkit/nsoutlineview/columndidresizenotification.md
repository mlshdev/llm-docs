> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/columndidresizenotification](https://developer.apple.com/documentation/appkit/nsoutlineview/columndidresizenotification)

# columnDidResizeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted whenever a column is resized in an `NSOutlineView` object.

## Declaration

```swift
class let columnDidResizeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSOutlineView` object in which a column was resized. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSTableColumn"` | The column that was resized. |
| `@"NSOldWidth"` | An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the column’s original width |

To observe this notification using Swift concurrency, use [NSOutlineView.ColumnDidResizeMessage](columndidresizemessage.md).

## See Also

### Notifications

- [columnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [itemDidCollapseNotification](itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [itemDidExpandNotification](itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [itemWillCollapseNotification](itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [itemWillExpandNotification](itemwillexpandnotification.md): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [selectionIsChangingNotification](selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).

# NSOutlineViewColumnDidResizeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted whenever a column is resized in an `NSOutlineView` object.

## Declaration

```objectivec
extern NSNotificationName NSOutlineViewColumnDidResizeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSOutlineView` object in which a column was resized. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSTableColumn"` | The column that was resized. |
| `@"NSOldWidth"` | An [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the column’s original width |

To observe this notification using Swift concurrency, use [NSOutlineView.ColumnDidResizeMessage](columndidresizemessage.md).

## See Also

### Notifications

- [NSOutlineViewColumnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [NSOutlineViewItemDidCollapseNotification](itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [NSOutlineViewItemDidExpandNotification](itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [NSOutlineViewItemWillCollapseNotification](itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewItemWillExpandNotification](itemwillexpandnotification.md): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [NSOutlineViewSelectionIsChangingNotification](selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).
