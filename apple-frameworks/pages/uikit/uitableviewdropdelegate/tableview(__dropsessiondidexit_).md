> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidexit:)](https://developer.apple.com/documentation/uikit/uitableviewdropdelegate/tableview(_:dropsessiondidexit:))

# tableView(\_:dropSessionDidExit:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when dragged content exits the table view’s bounds rectangle.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, dropSessionDidExit session: any UIDropSession)
```

## Parameters

- `tableView`: The collection view that was tracking the dragged content.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The table view calls this method when dragged content exits its bounds rectangle. This method isn’t called again until the dragged content enters the table view’s bounds (triggering a call to the [tableView(\_:dropSessionDidEnter:)](tableview%28__dropsessiondidenter_%29.md) method) and exits again.

Use this method to clean up any state information that you configured in your [tableView(\_:dropSessionDidEnter:)](tableview%28__dropsessiondidenter_%29.md) method.

## See Also

### Tracking the drag movements

- [tableView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView(\_:dropSessionDidEnter:)](tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView(\_:dropSessionDidEnd:)](tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.

# tableView:dropSessionDidExit: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies the delegate when dragged content exits the table view’s bounds rectangle.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView dropSessionDidExit:(id<UIDropSession>) session;
```

## Parameters

- `tableView`: The collection view that was tracking the dragged content.
- `session`: The drop session object containing information about the data being dragged.

<a id="Discussion"></a>

## Discussion

The table view calls this method when dragged content exits its bounds rectangle. This method isn’t called again until the dragged content enters the table view’s bounds (triggering a call to the [tableView:dropSessionDidEnter:](tableview%28__dropsessiondidenter_%29.md) method) and exits again.

Use this method to clean up any state information that you configured in your [tableView:dropSessionDidEnter:](tableview%28__dropsessiondidenter_%29.md) method.

## See Also

### Tracking the drag movements

- [tableView:dropSessionDidUpdate:withDestinationIndexPath:](tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md): Proposes how to handle a drop at the specified location in the table view.
- [tableView:dropSessionDidEnter:](tableview%28__dropsessiondidenter_%29.md): Notifies the delegate when dragged content enters the table view’s bounds rectangle.
- [tableView:dropSessionDidEnd:](tableview%28__dropsessiondidend_%29.md): Notifies the delegate when the drag operation ends.
