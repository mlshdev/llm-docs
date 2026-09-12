> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:moverowat:to:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:moverowat:to:))

# tableView(\_:moveRowAt:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the data source to move a row at a specific location in the table view to another location.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, moveRowAt sourceIndexPath: IndexPath, to destinationIndexPath: IndexPath)
```

## Parameters

- `tableView`: The table-view object requesting this action.
- `sourceIndexPath`: An index path locating the row to be moved in `tableView`.
- `destinationIndexPath`: An index path locating the row in `tableView` that’s the destination of the move.

<a id="Discussion"></a>

## Discussion

The [UITableView](../uitableview.md) object sends this message to the data source when the user presses the reorder control in the row at `sourceIndexPath`.

## See Also

### Related Documentation

- [tableView(\_:commit:forRowAt:)](tableview%28__commit_forrowat_%29.md): Asks the data source to commit the insertion or deletion of a specified row.

### Reordering table rows

- [tableView(\_:canMoveRowAt:)](tableview%28__canmoverowat_%29.md): Asks the data source whether a given row can move to another location in the table view.

# tableView:moveRowAtIndexPath:toIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the data source to move a row at a specific location in the table view to another location.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView moveRowAtIndexPath:(NSIndexPath *) sourceIndexPath toIndexPath:(NSIndexPath *) destinationIndexPath;
```

## Parameters

- `tableView`: The table-view object requesting this action.
- `sourceIndexPath`: An index path locating the row to be moved in `tableView`.
- `destinationIndexPath`: An index path locating the row in `tableView` that’s the destination of the move.

<a id="Discussion"></a>

## Discussion

The [UITableView](../uitableview.md) object sends this message to the data source when the user presses the reorder control in the row at `sourceIndexPath`.

## See Also

### Related Documentation

- [tableView:commitEditingStyle:forRowAtIndexPath:](tableview%28__commit_forrowat_%29.md): Asks the data source to commit the insertion or deletion of a specified row.

### Reordering table rows

- [tableView:canMoveRowAtIndexPath:](tableview%28__canmoverowat_%29.md): Asks the data source whether a given row can move to another location in the table view.
