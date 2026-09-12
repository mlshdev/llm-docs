> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:editingstyleforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:editingstyleforrowat:))

# tableView(\_:editingStyleForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the editing style of a row at a particular location in a table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, editingStyleForRowAt indexPath: IndexPath) -> UITableViewCell.EditingStyle
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

The editing style of the cell for the row identified by `indexPath`.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to customize the editing style of the cell located at`indexPath`. If the delegate does not implement this method and the `UITableViewCell` object is editable (that is, it has its [isEditing](../uitableviewcell/isediting.md) property set to [true](https://developer.apple.com/documentation/swift/true)), the cell has the [UITableViewCell.EditingStyle.delete](../uitableviewcell/editingstyle-swift.enum/delete.md) style set for it.

## See Also

### Editing table rows

- [tableView(\_:willBeginEditingRowAt:)](tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView(\_:didEndEditingRowAt:)](tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView(\_:titleForDeleteConfirmationButtonForRowAt:)](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView(\_:shouldIndentWhileEditingRowAt:)](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

# tableView:editingStyleForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the editing style of a row at a particular location in a table view.

## Declaration

```objectivec
- (UITableViewCellEditingStyle) tableView:(UITableView *) tableView editingStyleForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

The editing style of the cell for the row identified by `indexPath`.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to customize the editing style of the cell located at`indexPath`. If the delegate does not implement this method and the `UITableViewCell` object is editable (that is, it has its [editing](../uitableviewcell/isediting.md) property set to [true](https://developer.apple.com/documentation/swift/true)), the cell has the [UITableViewCellEditingStyleDelete](../uitableviewcell/editingstyle-swift.enum/delete.md) style set for it.

## See Also

### Editing table rows

- [tableView:willBeginEditingRowAtIndexPath:](tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView:didEndEditingRowAtIndexPath:](tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView:titleForDeleteConfirmationButtonForRowAtIndexPath:](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView:shouldIndentWhileEditingRowAtIndexPath:](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.
