> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate/tableview(_:itemsforbeginning:at:)](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate/tableview(_:itemsforbeginning:at:))

# tableView(\_:itemsForBeginning:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Provides the initial set of items (if any) to drag.

## Declaration

```swift
func tableView(_ tableView: UITableView, itemsForBeginning session: any UIDragSession, at indexPath: IndexPath) -> [UIDragItem]
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.
- `indexPath`: The index path of the row being dragged.

<a id="return-value"></a>

## Return Value

An array of [UIDragItem](../uidragitem.md) objects representing the contents of the specified row. Return an empty array if you do not want the user to drag the specified row.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

You must implement this method to allow the dragging of rows from your table view. In your implementation, use the specified `indexPath` to identify which row is being dragged. In response, create one or more [UIDragItem](../uidragitem.md) objects representing the content for that row. Normally, you return only one drag item, but you may return more than one item if the specified row represents a container for other content. Return an empty array to indicate that you don’t want the specified row to be dragged.

The table view calls this method one or more times when a new drag begins within its bounds. Specifically, it calls the method once for each row that’s part of the initial drag. For example, if three rows were selected when the user began the drag operation, the table view calls this method three times. If the user begins a drag operation from an unselected row, this method is called only once for that row.

## See Also

### Providing the items to drag

- [tableView(\_:itemsForAddingTo:at:point:)](tableview%28__itemsforaddingto_at_point_%29.md): Adds the specified items to an existing drag session.

# tableView:itemsForBeginningDragSession:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Provides the initial set of items (if any) to drag.

## Declaration

```objectivec
- (NSArray<UIDragItem *> *) tableView:(UITableView *) tableView itemsForBeginningDragSession:(id<UIDragSession>) session atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.
- `indexPath`: The index path of the row being dragged.

<a id="return-value"></a>

## Return Value

An array of [UIDragItem](../uidragitem.md) objects representing the contents of the specified row. Return an empty array if you do not want the user to drag the specified row.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

You must implement this method to allow the dragging of rows from your table view. In your implementation, use the specified `indexPath` to identify which row is being dragged. In response, create one or more [UIDragItem](../uidragitem.md) objects representing the content for that row. Normally, you return only one drag item, but you may return more than one item if the specified row represents a container for other content. Return an empty array to indicate that you don’t want the specified row to be dragged.

The table view calls this method one or more times when a new drag begins within its bounds. Specifically, it calls the method once for each row that’s part of the initial drag. For example, if three rows were selected when the user began the drag operation, the table view calls this method three times. If the user begins a drag operation from an unselected row, this method is called only once for that row.

## See Also

### Providing the items to drag

- [tableView:itemsForAddingToDragSession:atIndexPath:point:](tableview%28__itemsforaddingto_at_point_%29.md): Adds the specified items to an existing drag session.
