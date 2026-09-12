> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableviewcolumndidresize(_:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableviewcolumndidresize(_:))

# tableViewColumnDidResize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that a table column was resized.

## Declaration

```swift
@MainActor optional func tableViewColumnDidResize(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [columnDidResizeNotification](../nstableview/columndidresizenotification.md).

## See Also

### Moving and resizing columns

- [tableView(\_:shouldReorderColumn:toColumn:)](tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableView(\_:didDrag:)](tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidMove(\_:)](tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.

# tableViewColumnDidResize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that a table column was resized.

## Declaration

```objectivec
- (void) tableViewColumnDidResize:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSTableViewColumnDidResizeNotification](../nstableview/columndidresizenotification.md).

## See Also

### Moving and resizing columns

- [tableView:shouldReorderColumn:toColumn:](tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableView:didDragTableColumn:](tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidMove:](tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.
