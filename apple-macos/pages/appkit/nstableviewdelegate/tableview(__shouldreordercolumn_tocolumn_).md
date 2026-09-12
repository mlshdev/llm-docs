> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:shouldreordercolumn:tocolumn:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:shouldreordercolumn:tocolumn:))

# tableView(\_:shouldReorderColumn:toColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to allow or prohibit the specified column to be dragged to a new location.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, shouldReorderColumn columnIndex: Int, toColumn newColumnIndex: Int) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `columnIndex`: The index of the column being dragged.
- `newColumnIndex`: The proposed target index of the column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column reordering should be allowed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When a column is initially dragged by the user, the delegate is first called with a `newColumnIndex` value of `-1`. Returning [false](https://developer.apple.com/documentation/swift/false) will disallow that column from being reordered at all. Returning [true](https://developer.apple.com/documentation/swift/true) allows it to be reordered, and the delegate will be called again when the column reaches a new location.

The actual [NSTableColumn](../nstablecolumn.md) instance can be retrieved from the [tableColumns](../nstableview/tablecolumns.md) array.

If this method isn’t implemented, all columns are considered reorderable.

## See Also

### Moving and resizing columns

- [tableView(\_:didDrag:)](tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidMove(\_:)](tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.
- [tableViewColumnDidResize(\_:)](tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.

# tableView:shouldReorderColumn:toColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to allow or prohibit the specified column to be dragged to a new location.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView shouldReorderColumn:(NSInteger) columnIndex toColumn:(NSInteger) newColumnIndex;
```

## Parameters

- `tableView`: The table view that sent the message.
- `columnIndex`: The index of the column being dragged.
- `newColumnIndex`: The proposed target index of the column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column reordering should be allowed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When a column is initially dragged by the user, the delegate is first called with a `newColumnIndex` value of `-1`. Returning [false](https://developer.apple.com/documentation/swift/false) will disallow that column from being reordered at all. Returning [true](https://developer.apple.com/documentation/swift/true) allows it to be reordered, and the delegate will be called again when the column reaches a new location.

The actual [NSTableColumn](../nstablecolumn.md) instance can be retrieved from the [tableColumns](../nstableview/tablecolumns.md) array.

If this method isn’t implemented, all columns are considered reorderable.

## See Also

### Moving and resizing columns

- [tableView:didDragTableColumn:](tableview%28__diddrag_%29.md): Tells the delegate that the specified table column was dragged.
- [tableViewColumnDidMove:](tableviewcolumndidmove%28__%29.md): Tells the delegate that a table column was moved by user action.
- [tableViewColumnDidResize:](tableviewcolumndidresize%28__%29.md): Tells the delegate that a table column was resized.
