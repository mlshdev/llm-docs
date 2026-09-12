> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:commit:forrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:commit:forrowat:))

# tableView(\_:commit:forRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the data source to commit the insertion or deletion of a specified row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: The table-view object requesting the insertion or deletion.
- `editingStyle`: The cell editing style corresponding to a insertion or deletion requested for the row specified by `indexPath`. Possible editing styles are [UITableViewCell.EditingStyle.insert](../uitableviewcell/editingstyle-swift.enum/insert.md) or [UITableViewCell.EditingStyle.delete](../uitableviewcell/editingstyle-swift.enum/delete.md).
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

When users tap the insertion (green plus) control or Delete button associated with a [UITableViewCell](../uitableviewcell.md) object in the table view, the table view sends this message to the data source, asking it to commit the change. (If the user taps the deletion (red minus) control, the table view then displays the Delete button to get confirmation.) The data source commits the insertion or deletion by invoking the `UITableView` methods [insertRows(at:with:)](../uitableview/insertrows%28at_with_%29.md) or [deleteRows(at:with:)](../uitableview/deleterows%28at_with_%29.md), as appropriate.

To enable the swipe-to-delete feature of table views (wherein a user swipes horizontally across a row to display a Delete button), you must implement this method.

You shouldn’t call [setEditing(\_:animated:)](../uitableview/setediting%28__animated_%29.md) within an implementation of this method. If for some reason you must, invoke it after a delay by using the [perform(\_:with:afterDelay:)](../../objectivec/nsobject-swift.class/perform%28__with_afterdelay_%29.md) method.

## See Also

### Inserting or deleting table rows

- [tableView(\_:canEditRowAt:)](tableview%28__caneditrowat_%29.md): Asks the data source to verify that the given row is editable.

# tableView:commitEditingStyle:forRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source to commit the insertion or deletion of a specified row.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView commitEditingStyle:(UITableViewCellEditingStyle) editingStyle forRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table-view object requesting the insertion or deletion.
- `editingStyle`: The cell editing style corresponding to a insertion or deletion requested for the row specified by `indexPath`. Possible editing styles are [UITableViewCellEditingStyleInsert](../uitableviewcell/editingstyle-swift.enum/insert.md) or [UITableViewCellEditingStyleDelete](../uitableviewcell/editingstyle-swift.enum/delete.md).
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

When users tap the insertion (green plus) control or Delete button associated with a [UITableViewCell](../uitableviewcell.md) object in the table view, the table view sends this message to the data source, asking it to commit the change. (If the user taps the deletion (red minus) control, the table view then displays the Delete button to get confirmation.) The data source commits the insertion or deletion by invoking the `UITableView` methods [insertRowsAtIndexPaths:withRowAnimation:](../uitableview/insertrows%28at_with_%29.md) or [deleteRowsAtIndexPaths:withRowAnimation:](../uitableview/deleterows%28at_with_%29.md), as appropriate.

To enable the swipe-to-delete feature of table views (wherein a user swipes horizontally across a row to display a Delete button), you must implement this method.

You shouldn’t call [setEditing:animated:](../uitableview/setediting%28__animated_%29.md) within an implementation of this method. If for some reason you must, invoke it after a delay by using the [performSelector:withObject:afterDelay:](../../objectivec/nsobject-swift.class/perform%28__with_afterdelay_%29.md) method.

## See Also

### Inserting or deleting table rows

- [tableView:canEditRowAtIndexPath:](tableview%28__caneditrowat_%29.md): Asks the data source to verify that the given row is editable.
