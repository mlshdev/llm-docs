> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidenter:)](https://developer.apple.com/documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidenter:))

# tableView(\_:dropSessionDidEnter:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when dragged content enters the table view’s bounds rectangle.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dropSessionDidEnter session: any UIDropSession)
```

## Parameters

- `tableView`: The table view that’s now the potential target of the drop.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The table view calls this method when dragged content first enters its bounds rectangle. This method isn’t called again until the dragged content exits the table view’s bounds (triggering a call to the [tableView(\_:dropSessionDidExit:)](tableview%28__dropsessiondidexit_%29.md) method) and enters again.

Use this method to perform any one-time setup associated with tracking dragged content over the table view.

## See Also

### Tracking the drag movements

- [tableView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView(\_:dropSessionDidExit:)](tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.
- [tableView(\_:dropSessionDidEnd:)](tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.

# tableView:dropSessionDidEnter: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when dragged content enters the table view’s bounds rectangle.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView dropSessionDidEnter:(id<UIDropSession>) session;
```

## Parameters

- `tableView`: The table view that’s now the potential target of the drop.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The table view calls this method when dragged content first enters its bounds rectangle. This method isn’t called again until the dragged content exits the table view’s bounds (triggering a call to the [tableView:dropSessionDidExit:](tableview%28__dropsessiondidexit_%29.md) method) and enters again.

Use this method to perform any one-time setup associated with tracking dragged content over the table view.

## See Also

### Tracking the drag movements

- [tableView:dropSessionDidUpdate:withDestinationIndexPath:](tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView:dropSessionDidExit:](tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.
- [tableView:dropSessionDidEnd:](tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.
