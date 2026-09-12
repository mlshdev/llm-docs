> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:willbegineditingrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:willbegineditingrowat:))

# tableView(\_:willBeginEditingRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the table view is about to go into editing mode.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, willBeginEditingRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: The table view providing this information.
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

This method is called when the user swipes horizontally across a row; as a consequence, the table view sets its [isEditing](../uitableview/isediting.md) property to [true](https://developer.apple.com/documentation/swift/true) (thereby entering editing mode) and displays a Delete button in the row identified by `indexPath`. In this “swipe to delete” mode the table view does not display any insertion, deletion, and reordering controls. This method gives the delegate an opportunity to adjust the application’s user interface to editing mode. When the table exits editing mode (for example, the user taps the Delete button), the table view calls [tableView(\_:didEndEditingRowAt:)](tableview%28__didendeditingrowat_%29.md).

> **Note**

>  A swipe motion across a cell does not cause the display of a Delete button unless the table view’s data source implements the [tableView(\_:commit:forRowAt:)](../uitableviewdatasource/tableview%28__commit_forrowat_%29.md) method.

## See Also

### Editing table rows

- [tableView(\_:didEndEditingRowAt:)](tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView(\_:editingStyleForRowAt:)](tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView(\_:titleForDeleteConfirmationButtonForRowAt:)](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView(\_:shouldIndentWhileEditingRowAt:)](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

# tableView:willBeginEditingRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the table view is about to go into editing mode.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView willBeginEditingRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view providing this information.
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

This method is called when the user swipes horizontally across a row; as a consequence, the table view sets its [editing](../uitableview/isediting.md) property to [true](https://developer.apple.com/documentation/swift/true) (thereby entering editing mode) and displays a Delete button in the row identified by `indexPath`. In this “swipe to delete” mode the table view does not display any insertion, deletion, and reordering controls. This method gives the delegate an opportunity to adjust the application’s user interface to editing mode. When the table exits editing mode (for example, the user taps the Delete button), the table view calls [tableView:didEndEditingRowAtIndexPath:](tableview%28__didendeditingrowat_%29.md).

> **Note**

>  A swipe motion across a cell does not cause the display of a Delete button unless the table view’s data source implements the [tableView:commitEditingStyle:forRowAtIndexPath:](../uitableviewdatasource/tableview%28__commit_forrowat_%29.md) method.

## See Also

### Editing table rows

- [tableView:didEndEditingRowAtIndexPath:](tableview%28__didendeditingrowat_%29.md): Tells the delegate that the table view has left editing mode.
- [tableView:editingStyleForRowAtIndexPath:](tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView:titleForDeleteConfirmationButtonForRowAtIndexPath:](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView:shouldIndentWhileEditingRowAtIndexPath:](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.
