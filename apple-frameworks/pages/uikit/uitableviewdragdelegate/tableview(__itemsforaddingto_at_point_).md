> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdragdelegate/tableview(_:itemsforaddingto:at:point:)](https://developer.apple.com/documentation/uikit/uitableviewdragdelegate/tableview(_:itemsforaddingto:at:point:))

# tableView(\_:itemsForAddingTo:at:point:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the specified items to an existing drag session.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, itemsForAddingTo session: any UIDragSession, at indexPath: IndexPath, point: CGPoint) -> [UIDragItem]
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.
- `indexPath`: The index path of the row being added to the drag operation.
- `point`: The location of the touch that caused the row to be added. This point is in the coordinate space of the table view.

<a id="return-value"></a>

## Return Value

An array of [UIDragItem](../uidragitem.md) objects representing the contents of the specified row. Return an empty array if you do not want the user to add the row to the drag session.

<a id="Discussion"></a>

## Discussion

Implement this method to allow the user to add items to an active drag session. When a drag session is active and the user taps a row, the table view calls this method. Your implementation should return the drag items to add to the drag operation. If you don’t implement this method, additional touches in the table view are handled as normal table view interactions. For example, additional taps cause rows to be selected or deselected.

In your implementation, create one or more [UIDragItem](../uidragitem.md) objects representing the contents at the specified index path. Normally, you return only one drag item, but you may return more than one item if the specified row represents a container for other content.

## See Also

### Providing the items to drag

- [tableView(\_:itemsForBeginning:at:)](tableview%28__itemsforbeginning_at_%29.md): Provides the initial set of items (if any) to drag.

# tableView:itemsForAddingToDragSession:atIndexPath:point: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the specified items to an existing drag session.

## Declaration

```objectivec
- (NSArray<UIDragItem *> *) tableView:(UITableView *) tableView itemsForAddingToDragSession:(id<UIDragSession>) session atIndexPath:(NSIndexPath *) indexPath point:(CGPoint) point;
```

## Parameters

- `tableView`: The table view from which the drag operation originated.
- `session`: The drag session object providing context for the drag operation.
- `indexPath`: The index path of the row being added to the drag operation.
- `point`: The location of the touch that caused the row to be added. This point is in the coordinate space of the table view.

<a id="return-value"></a>

## Return Value

An array of [UIDragItem](../uidragitem.md) objects representing the contents of the specified row. Return an empty array if you do not want the user to add the row to the drag session.

<a id="Discussion"></a>

## Discussion

Implement this method to allow the user to add items to an active drag session. When a drag session is active and the user taps a row, the table view calls this method. Your implementation should return the drag items to add to the drag operation. If you don’t implement this method, additional touches in the table view are handled as normal table view interactions. For example, additional taps cause rows to be selected or deselected.

In your implementation, create one or more [UIDragItem](../uidragitem.md) objects representing the contents at the specified index path. Normally, you return only one drag item, but you may return more than one item if the specified row represents a container for other content.

## See Also

### Providing the items to drag

- [tableView:itemsForBeginningDragSession:atIndexPath:](tableview%28__itemsforbeginning_at_%29.md): Provides the initial set of items (if any) to drag.
