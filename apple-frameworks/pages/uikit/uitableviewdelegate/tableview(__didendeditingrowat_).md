> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:didendeditingrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:didendeditingrowat:))

# tableView(\_:didEndEditingRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the table view has left editing mode.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, didEndEditingRowAt indexPath: IndexPath?)
```

## Parameters

- `tableView`: The table view providing this information.
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

This method is called when the table view exits editing mode after having been put into the mode by the user swiping across the row identified by `indexPath`. As a result, a Delete button appears in the row; however, in this “swipe to delete” mode the table view does not display any insertion, deletion, and reordering controls. When entering this “swipe to delete” editing mode, the table view sends a [tableView(\_:willBeginEditingRowAt:)](tableview%28__willbegineditingrowat_%29.md) message to the delegate to allow it to adjust its user interface.

## See Also

### Editing table rows

- [tableView(\_:willBeginEditingRowAt:)](tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView(\_:editingStyleForRowAt:)](tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView(\_:titleForDeleteConfirmationButtonForRowAt:)](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView(\_:shouldIndentWhileEditingRowAt:)](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.

# tableView:didEndEditingRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the table view has left editing mode.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView didEndEditingRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view providing this information.
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

This method is called when the table view exits editing mode after having been put into the mode by the user swiping across the row identified by `indexPath`. As a result, a Delete button appears in the row; however, in this “swipe to delete” mode the table view does not display any insertion, deletion, and reordering controls. When entering this “swipe to delete” editing mode, the table view sends a [tableView:willBeginEditingRowAtIndexPath:](tableview%28__willbegineditingrowat_%29.md) message to the delegate to allow it to adjust its user interface.

## See Also

### Editing table rows

- [tableView:willBeginEditingRowAtIndexPath:](tableview%28__willbegineditingrowat_%29.md): Tells the delegate that the table view is about to go into editing mode.
- [tableView:editingStyleForRowAtIndexPath:](tableview%28__editingstyleforrowat_%29.md): Asks the delegate for the editing style of a row at a particular location in a table view.
- [tableView:titleForDeleteConfirmationButtonForRowAtIndexPath:](tableview%28__titlefordeleteconfirmationbuttonforrowat_%29.md): Changes the default title of the delete-confirmation button.
- [tableView:shouldIndentWhileEditingRowAtIndexPath:](tableview%28__shouldindentwhileeditingrowat_%29.md): Asks the delegate whether the background of the specified row should be indented while the table view is in editing mode.
