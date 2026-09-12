> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidend:)](https://developer.apple.com/documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidend:))

# tableView(\_:dropSessionDidEnd:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when the drag operation ends.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dropSessionDidEnd session: any UIDropSession)
```

## Parameters

- `tableView`: The table view that is no longer the target of the drop.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The table view calls this method at the conclusion of a drag that was over the table view at one point. Use it to clean up any state information that you used to handle the drag. This method is called regardless of whether the data was actually dropped onto the table view.

## See Also

### Tracking the drag movements

- [tableView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView(\_:dropSessionDidEnter:)](tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView(\_:dropSessionDidExit:)](tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.

# tableView:dropSessionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when the drag operation ends.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView dropSessionDidEnd:(id<UIDropSession>) session;
```

## Parameters

- `tableView`: The table view that is no longer the target of the drop.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The table view calls this method at the conclusion of a drag that was over the table view at one point. Use it to clean up any state information that you used to handle the drag. This method is called regardless of whether the data was actually dropped onto the table view.

## See Also

### Tracking the drag movements

- [tableView:dropSessionDidUpdate:withDestinationIndexPath:](tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView:dropSessionDidEnter:](tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView:dropSessionDidExit:](tableview%28__dropsessiondidexit_%29.md): Notifies the delegate when dragged content exits the table view’s bounds rectangle.
