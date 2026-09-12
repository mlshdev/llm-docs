> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/itemwillexpandnotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemwillexpandnotification)

# itemWillExpandNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).

## Declaration

```swift
class let itemWillExpandNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the outline view that contains an item about to be expanded. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSObject"` | The item that is to be expanded (an `id`) |

To observe this notification using Swift concurrency, use [NSOutlineView.ItemWillExpandMessage](itemwillexpandmessage.md).

## See Also

### Notifications

- [columnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [columnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSOutlineView` object.
- [itemDidCollapseNotification](itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [itemDidExpandNotification](itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [itemWillCollapseNotification](itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [selectionDidChangeNotification](selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [selectionIsChangingNotification](selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).

# NSOutlineViewItemWillExpandNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).

## Declaration

```objectivec
extern NSNotificationName NSOutlineViewItemWillExpandNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the outline view that contains an item about to be expanded. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSObject"` | The item that is to be expanded (an `id`) |

To observe this notification using Swift concurrency, use [NSOutlineView.ItemWillExpandMessage](itemwillexpandmessage.md).

## See Also

### Notifications

- [NSOutlineViewColumnDidMoveNotification](columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [NSOutlineViewColumnDidResizeNotification](columndidresizenotification.md): Posted whenever a column is resized in an `NSOutlineView` object.
- [NSOutlineViewItemDidCollapseNotification](itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [NSOutlineViewItemDidExpandNotification](itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [NSOutlineViewItemWillCollapseNotification](itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewSelectionDidChangeNotification](selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [NSOutlineViewSelectionIsChangingNotification](selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).
