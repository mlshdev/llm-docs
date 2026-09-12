> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidupdate:withdestinationindexpath:)](https://developer.apple.com/documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidupdate:withdestinationindexpath:))

# tableView(\_:dropSessionDidUpdate:withDestinationIndexPath:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Proposes how to handle a drop at the specified location in the table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dropSessionDidUpdate session: any UIDropSession, withDestinationIndexPath destinationIndexPath: IndexPath?) -> UITableViewDropProposal
```

## Parameters

- `tableView`: The table view currently being targeted to receive the drop.
- `session`: The drop session object containing information about the data being dragged.
- `destinationIndexPath`: The index path of the row currently being targeted by the drop. Use this value to determine an appropriate course of action for the drop.

<a id="return-value"></a>

## Return Value

The [UITableViewDropProposal](../uitableviewdropproposal.md) object indicating how to incorporate the dropped data.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

While the user is dragging content, the table view calls this method repeatedly to determine how you would handle the drop if it occurred at the specified location. The table view provides visual feedback to the user based on your proposal.

In your implementation of this method, create a [UITableViewDropProposal](../uitableviewdropproposal.md) object and use it to convey your intentions. Because this method is called repeatedly while the user drags over the table view, your implementation should return as quickly as possible.

## See Also

### Tracking the drag movements

- [tableView(\_:dropSessionDidEnter:)](tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView(\_:dropSessionDidExit:)](tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.
- [tableView(\_:dropSessionDidEnd:)](tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.

# tableView:dropSessionDidUpdate:withDestinationIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Proposes how to handle a drop at the specified location in the table view.

## Declaration

```objectivec
- (UITableViewDropProposal *) tableView:(UITableView *) tableView dropSessionDidUpdate:(id<UIDropSession>) session withDestinationIndexPath:(NSIndexPath *) destinationIndexPath;
```

## Parameters

- `tableView`: The table view currently being targeted to receive the drop.
- `session`: The drop session object containing information about the data being dragged.
- `destinationIndexPath`: The index path of the row currently being targeted by the drop. Use this value to determine an appropriate course of action for the drop.

<a id="return-value"></a>

## Return Value

The [UITableViewDropProposal](../uitableviewdropproposal.md) object indicating how to incorporate the dropped data.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

While the user is dragging content, the table view calls this method repeatedly to determine how you would handle the drop if it occurred at the specified location. The table view provides visual feedback to the user based on your proposal.

In your implementation of this method, create a [UITableViewDropProposal](../uitableviewdropproposal.md) object and use it to convey your intentions. Because this method is called repeatedly while the user drags over the table view, your implementation should return as quickly as possible.

## See Also

### Tracking the drag movements

- [tableView:dropSessionDidEnter:](tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView:dropSessionDidExit:](tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.
- [tableView:dropSessionDidEnd:](tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.
