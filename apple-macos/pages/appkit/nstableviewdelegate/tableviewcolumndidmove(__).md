> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableviewcolumndidmove(_:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableviewcolumndidmove(_:))

# tableViewColumnDidMove(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that a table column was moved by user action.

## Declaration

```swift
@MainActor optional func tableViewColumnDidMove(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [columnDidMoveNotification](../nstableview/columndidmovenotification.md).

## See Also

### Moving and resizing columns

- [tableView(\_:shouldReorderColumn:toColumn:)](tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableView(\_:didDrag:)](tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidResize(\_:)](tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.

# tableViewColumnDidMove: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that a table column was moved by user action.

## Declaration

```objectivec
- (void) tableViewColumnDidMove:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSTableViewColumnDidMoveNotification](../nstableview/columndidmovenotification.md).

## See Also

### Moving and resizing columns

- [tableView:shouldReorderColumn:toColumn:](tableview%28__shouldreordercolumn_tocolumn_%29.md): Asks the delegate to allow or prohibit the specified column to be dragged to a new location.
- [tableView:didDragTableColumn:](tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidResize:](tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.
