> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:didenddisplaying:forrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:didenddisplaying:forrowat:))

# tableView(\_:didEndDisplaying:forRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the specified cell was removed from the table.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, didEndDisplaying cell: UITableViewCell, forRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: The table view that removed the view.
- `cell`: The cell that was removed.
- `indexPath`: The index path of the cell.

<a id="Discussion"></a>

## Discussion

Use this method to detect when a cell is removed from a table view, as opposed to monitoring the view itself to see when it appears or disappears.

## See Also

### Tracking the removal of views

- [tableView(\_:didEndDisplayingHeaderView:forSection:)](tableview%28__didenddisplayingheaderview_forsection_%29.md): Tells the delegate that the specified header view was removed from the table.
- [tableView(\_:didEndDisplayingFooterView:forSection:)](tableview%28__didenddisplayingfooterview_forsection_%29.md): Tells the delegate that the specified footer view was removed from the table.

# tableView:didEndDisplayingCell:forRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the specified cell was removed from the table.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView didEndDisplayingCell:(UITableViewCell *) cell forRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view that removed the view.
- `cell`: The cell that was removed.
- `indexPath`: The index path of the cell.

<a id="Discussion"></a>

## Discussion

Use this method to detect when a cell is removed from a table view, as opposed to monitoring the view itself to see when it appears or disappears.

## See Also

### Tracking the removal of views

- [tableView:didEndDisplayingHeaderView:forSection:](tableview%28__didenddisplayingheaderview_forsection_%29.md): Tells the delegate that the specified header view was removed from the table.
- [tableView:didEndDisplayingFooterView:forSection:](tableview%28__didenddisplayingfooterview_forsection_%29.md): Tells the delegate that the specified footer view was removed from the table.
